export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const en = {
  nav: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    toggleToLight: "Switch to light theme",
    toggleToDark: "Switch to dark theme",
  },
  hero: {
    eyebrow: "LLM · RAG · AI Agents",
    role: "AI Application Engineer",
    tagline:
      "I build and deploy production AI applications — GenAI services, RAG systems, and AI agents.",
    viewProjects: "View Projects",
    highlightsLabel: "Quick Highlights",
    highlights: [
      "Production GenAI services and AI agents with FastAPI, LangGraph, and LangChain",
      "2+ years of hands-on AI experience across 4 companies",
      "M.Sc. (thesis) student in Computer Engineering at Kocaeli University",
    ],
    stats: [
      { value: "2+", label: "Years Experience" },
      { value: "4", label: "Companies" },
      { value: "1st", label: "TÜBİTAK Award" },
      { value: "100M+", label: "Records in RAG" },
    ],
  },
  experience: {
    eyebrow: "Career Journey",
    headingA: "Work",
    headingB: "Experience",
    subtitle: "Where I've worked, what I built, and what I learned along the way.",
    keySubjects: "Key Subjects",
  },
  projects: {
    eyebrow: "Selected Work",
    headingA: "Featured",
    headingB: "Projects",
    subtitle: "A curated selection of AI, data, and full-stack builds that touch real problems.",
    allOnGithub: "See All Projects on GitHub",
  },
  platforms: {
    eyebrow: "Practice & Competition",
    headingA: "Problem",
    headingB: "Solving",
    subtitle:
      "Platforms where I keep up my algorithm practice — stats refresh automatically every day.",
    footnote: "Data is pulled once a day from the platforms' public APIs.",
    solved: "Solved",
    easy: "Easy",
    medium: "Medium",
    python: "Python",
    badges: "Badges",
  },
  skills: {
    eyebrow: "Tech Stack",
    headingA: "Technical",
    headingB: "Skills",
    tablistLabel: "Skill categories",
  },
  contact: {
    eyebrow: "Contact",
    headingA: "Get in",
    headingB: "Touch",
    subtitle:
      "Reach out for AI engineering positions, collaborations, or any questions.",
    cardTitle: "Open to new opportunities",
    cardText:
      "I'm looking for AI Engineer and AI Application Engineer roles (LLM, RAG, AI agents). If you think I could contribute to your team — or you have career advice to share — I will definitely get back to you.",
    location: "Kocaeli, Türkiye",
    workStyle: "Open to hybrid and remote",
    sendEmail: "Send an Email",
    emailLabel: "Email",
  },
  chat: {
    openLabel: "Open assistant",
    closeLabel: "Close assistant",
    title: "AI Assistant",
    subtitle: "Ask anything about Fatmatüzzehra",
    greeting: "Hi! Feel free to ask anything about Fatmatüzzehra.",
    placeholder: "Type your question…",
    send: "Send",
    typing: "Typing…",
    questions: [
      "Does she have LLM and RAG experience?",
      "What is her best project?",
      "Which work models is she open to?",
      "Does she have production experience?",
    ],
  },
};

const tr: Dictionary = {
  nav: {
    home: "Anasayfa",
    projects: "Projeler",
    skills: "Yetenekler",
    contact: "İletişim",
    toggleToLight: "Açık temaya geç",
    toggleToDark: "Koyu temaya geç",
  },
  hero: {
    eyebrow: "LLM · RAG · AI Agents",
    role: "AI Application Engineer",
    tagline:
      "Production ortamında çalışan AI uygulamaları geliştiriyorum — GenAI servisleri, RAG sistemleri ve AI agent'lar.",
    viewProjects: "Projeleri Gör",
    highlightsLabel: "Öne Çıkanlar",
    highlights: [
      "FastAPI, LangGraph ve LangChain ile production GenAI servisleri ve AI agent'lar",
      "4 şirkette 2+ yıllık uygulamalı AI deneyimi",
      "Kocaeli Üniversitesi Bilgisayar Mühendisliği tezli yüksek lisans öğrencisi",
    ],
    stats: [
      { value: "2+", label: "Yıl Deneyim" },
      { value: "4", label: "Şirket" },
      { value: "1.", label: "TÜBİTAK Ödülü" },
      { value: "100M+", label: "RAG Kaydı" },
    ],
  },
  experience: {
    eyebrow: "Kariyer Yolculuğu",
    headingA: "İş",
    headingB: "Deneyimi",
    subtitle: "Nerelerde çalıştım, ne geliştirdim ve yol boyunca neler öğrendim.",
    keySubjects: "Öne Çıkan Konular",
  },
  projects: {
    eyebrow: "Seçilmiş İşler",
    headingA: "Öne Çıkan",
    headingB: "Projeler",
    subtitle: "Gerçek problemlere dokunan AI, veri ve full-stack projelerinden bir seçki.",
    allOnGithub: "Tüm Projeler GitHub'da",
  },
  platforms: {
    eyebrow: "Pratik & Yarışma",
    headingA: "Problem",
    headingB: "Çözme",
    subtitle:
      "Algoritma pratiğimi sürdürdüğüm platformlar — istatistikler günlük olarak otomatik güncellenir.",
    footnote: "Veriler platformların açık API'lerinden günde bir kez çekilir.",
    solved: "Çözülen",
    easy: "Easy",
    medium: "Medium",
    python: "Python",
    badges: "Rozet",
  },
  skills: {
    eyebrow: "Teknoloji Yığını",
    headingA: "Teknik",
    headingB: "Yetenekler",
    tablistLabel: "Yetenek kategorileri",
  },
  contact: {
    eyebrow: "İletişim",
    headingA: "İletişime",
    headingB: "Geç",
    subtitle:
      "AI mühendisliği pozisyonları, iş birlikleri veya sorularınız için bana ulaşabilirsiniz.",
    cardTitle: "Yeni fırsatlara açığım",
    cardText:
      "AI Engineer ve AI Application Engineer pozisyonları arıyorum (LLM, RAG, AI agent'lar). Ekibinize katkı sağlayabileceğimi düşünüyorsanız — ya da kariyerime dair bir tavsiyeniz varsa — mesajınıza mutlaka dönüş yaparım.",
    location: "Kocaeli, Türkiye",
    workStyle: "Hibrit ve remote çalışmaya açık",
    sendEmail: "E-posta Gönder",
    emailLabel: "E-posta",
  },
  chat: {
    openLabel: "Asistanı aç",
    closeLabel: "Asistanı kapat",
    title: "AI Asistan",
    subtitle: "Fatmatüzzehra hakkında soru sorun",
    greeting: "Merhaba! Fatmatüzzehra hakkında merak ettiklerinizi sorabilirsiniz.",
    placeholder: "Sorunuzu yazın…",
    send: "Gönder",
    typing: "Yazıyor…",
    questions: [
      "LLM ve RAG tecrübesi var mı?",
      "En iyi projesi hangisi?",
      "Hangi çalışma modeline açık?",
      "Üretim ortamı tecrübesi var mı?",
    ],
  },
};

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function getDictionary(lang: string): Dictionary {
  return dictionaries[isLocale(lang) ? lang : defaultLocale];
}
