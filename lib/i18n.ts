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
    cv: "Resume",
    cvHref: "/cv-en.pdf",
    toggleToLight: "Switch to light theme",
    toggleToDark: "Switch to dark theme",
  },
  hero: {
    eyebrow: "AI & Machine Learning",
    role: "ML & GenAI Engineer",
    tagline:
      "I build intelligent solutions that create real value — with Python, LLMs, and RAG architectures.",
    viewProjects: "View Projects",
    downloadCv: "Download Resume",
    cvHref: "/cv-en.pdf",
    highlightsLabel: "Quick Highlights",
    highlights: [
      "Solutions focused on LLMs, RAG architectures, and GenAI",
      "End-to-end AI/ML experience across 4 companies",
      "Open to junior AI/ML positions and collaborations",
    ],
    stats: [
      { value: "4+", label: "Work Experiences" },
      { value: "1st", label: "TÜBİTAK Award" },
      { value: "GenAI", label: "Specialization" },
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
      "Reach out for junior AI/ML positions, collaborations, or any questions.",
    cardTitle: "Open to new opportunities",
    cardText:
      "I'm looking for Junior AI/ML Engineer and Machine Learning Engineer roles. If you think I could contribute to your team — or you have career advice to share — I will definitely get back to you.",
    location: "Istanbul — on-site or hybrid",
    workStyle: "Open to remote and relocation",
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
    cv: "CV",
    cvHref: "/cv-tr.pdf",
    toggleToLight: "Açık temaya geç",
    toggleToDark: "Koyu temaya geç",
  },
  hero: {
    eyebrow: "AI & Machine Learning",
    role: "ML & GenAI Engineer",
    tagline:
      "Python, LLM'ler ve RAG mimarileriyle üretime değer katan akıllı çözümler geliştiriyorum.",
    viewProjects: "Projeleri Gör",
    downloadCv: "CV İndir",
    cvHref: "/cv-tr.pdf",
    highlightsLabel: "Öne Çıkanlar",
    highlights: [
      "LLM, RAG mimarileri ve GenAI odaklı çözümler",
      "4 farklı şirkette uçtan uca AI/ML deneyimi",
      "Junior AI/ML pozisyonlarına ve iş birliklerine açık",
    ],
    stats: [
      { value: "4+", label: "İş Deneyimi" },
      { value: "1.", label: "TÜBİTAK Ödülü" },
      { value: "GenAI", label: "Uzmanlık" },
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
      "Junior AI/ML pozisyonları, iş birlikleri veya sorularınız için bana ulaşabilirsiniz.",
    cardTitle: "Yeni fırsatlara açığım",
    cardText:
      "Junior AI/ML Engineer ve Machine Learning Engineer pozisyonları arıyorum. Ekibinize katkı sağlayabileceğimi düşünüyorsanız — ya da kariyerime dair bir tavsiyeniz varsa — mesajınıza mutlaka dönüş yaparım.",
    location: "İstanbul — ofis veya hibrit",
    workStyle: "Remote ve relocation'a açık",
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
