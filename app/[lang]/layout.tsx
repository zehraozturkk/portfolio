import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return lang === "tr"
    ? {
        title: "Fatmatüzzehra Öztürk | ML & GenAI Engineer",
        description:
          "Python, LLM'ler ve RAG mimarileriyle üretime değer katan akıllı çözümler geliştiren Machine Learning Engineer.",
      }
    : {
        title: "Fatmatüzzehra Öztürk | ML & GenAI Engineer",
        description:
          "Machine Learning Engineer building intelligent solutions with Python, LLMs, and RAG architectures.",
      };
}

const themeInit = `try{if(localStorage.theme==="dark"||(!("theme" in localStorage)&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="bg-speckle flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <Navbar lang={lang as Locale} dict={dict.nav} />
        {children}
      </body>
    </html>
  );
}
