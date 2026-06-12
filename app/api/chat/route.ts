import { groq } from "@ai-sdk/groq";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { systemPrompt } from "@/lib/system-prompt";

// --- Basit rate limit: IP başına dakikada 10 istek ---
// In-memory Map serverless'ta instance başına çalışır; küçük trafik için
// yeterli, garantili koruma değil. Garanti gerekirse Upstash Redis kullanılır.
const RATE_LIMIT = 10;
const WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

// --- Dil tespiti: son kullanıcı mesajının diline göre modele net talimat verilir.
// System prompt Türkçe olduğu için model İngilizce sorulara da Türkçe cevap
// vermeye meyilli; bu ek talimat onu deterministik olarak düzeltir.
const TURKISH_CHARS = /[ğüşıöçĞÜŞİÖÇ]/;
const TURKISH_WORDS =
  /\b(ve|bir|bu|ne|mi|mu|hangi|kim|kimdir|nedir|merhaba|selam|var|yok|neler|peki|evet|hayır)\b/i;

function lastUserText(messages: UIMessage[]): string {
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUser) return "";
  return lastUser.parts
    .map((part) => (part.type === "text" ? part.text : ""))
    .join(" ");
}

function languageInstruction(messages: UIMessage[]): string {
  const text = lastUserText(messages);
  const isTurkish = TURKISH_CHARS.test(text) || TURKISH_WORDS.test(text);
  return isTurkish
    ? "\n\nÖNEMLİ: Kullanıcının son mesajı Türkçe. Cevabını SADECE Türkçe yaz."
    : "\n\nIMPORTANT: The user's last message is in English. Write your answer ONLY in English.";
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  if (isRateLimited(ip)) {
    return new Response("Çok fazla istek gönderdiniz. Lütfen biraz bekleyin.", {
      status: 429,
    });
  }

  const { messages }: { messages: UIMessage[] } = await req.json();

  // Maliyet ve context koruması: sohbetin sadece son 12 mesajı gönderilir.
  const recentMessages = messages.slice(-12);

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    system: systemPrompt + languageInstruction(recentMessages),
    messages: await convertToModelMessages(recentMessages),
    maxOutputTokens: 512,
    temperature: 0.3,
  });

  return result.toUIMessageStreamResponse();
}
