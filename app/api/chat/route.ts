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
    system: systemPrompt,
    messages: await convertToModelMessages(recentMessages),
    maxOutputTokens: 512,
    temperature: 0.3,
  });

  return result.toUIMessageStreamResponse();
}
