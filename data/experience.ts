import { Briefcase, type LucideIcon } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export type Experience = {
  kind: Record<Locale, string>; // "Staj", "Part-time" gibi etiket
  role: Record<Locale, string>;
  org: string;
  location: Record<Locale, string>;
  period: Record<Locale, string>;
  highlights: Record<Locale, string[]>; // 2-3 kısa madde
  subjects: string[];
  icon: LucideIcon;
};

export const experiences: Experience[] = [
  {
    kind: { tr: "Part-time", en: "Part-time" },
    role: { tr: "AI Developer", en: "AI Developer" },
    org: "ProudSec",
    location: { tr: "Ankara", en: "Ankara, Türkiye" },
    period: { tr: "Mart – Mayıs 2026", en: "Mar – May 2026" },
    highlights: {
      tr: [
        "FastAPI, LangGraph ve LangChain ile karmaşık güvenlik sorularını doğal dilde yorumlayan bir GenAI güvenlik asistanı geliştirdim.",
        "Asistanın ilgili güvenlik veritabanlarını otonom olarak seçip sorgulamasını sağlayan akıllı tool-routing mantığı tasarladım; manuel inceleme süresi önemli ölçüde azaldı.",
        "RAG mimarisi ve token optimizasyonuyla otomatik yanıt süresini düşürdüm.",
      ],
      en: [
        "Built a GenAI security assistant with FastAPI, LangGraph, and LangChain that interprets complex security questions in natural language.",
        "Designed intelligent tool-routing logic that lets the assistant autonomously pick and query the right security databases, cutting manual review time significantly.",
        "Reduced automated response times through RAG architecture and token optimization.",
      ],
    },
    subjects: ["LangGraph", "LangChain", "FastAPI", "RAG"],
    icon: Briefcase,
  },
  {
    kind: { tr: "Staj", en: "Internship" },
    role: { tr: "Data Scientist Stajyeri", en: "Data Scientist Intern" },
    org: "Pusula Kurumsal İş Çözümleri",
    location: { tr: "İstanbul", en: "Istanbul, Türkiye" },
    period: { tr: "Ekim – Aralık 2025", en: "Oct – Dec 2025" },
    highlights: {
      tr: [
        "16.000+ satırlık ham sağlık verisine EDA ve NLP tabanlı feature engineering uyguladım; otomatik scriptlerle veri temizleme süresini %50 azalttım.",
        "LightGBM tedavi süresi tahmin modelinde Optuna ve FLAML optimizasyonuyla R² skorunu 0.86'dan 0.91'e yükselttim.",
        "SHAP analiziyle model açıklanabilirliğini güçlendirdim ve Power BI'da karar destek dashboard'ları oluşturdum.",
      ],
      en: [
        "Applied EDA and NLP-based feature engineering to 16,000+ rows of raw healthcare data; automated scripts cut data cleaning time by 50%.",
        "Raised the R² score of a LightGBM treatment-duration model from 0.86 to 0.91 with Optuna and FLAML hyperparameter optimization.",
        "Strengthened model explainability with SHAP analysis and built decision-support dashboards in Power BI.",
      ],
    },
    subjects: ["LightGBM", "Optuna", "SHAP", "Power BI"],
    icon: Briefcase,
  },
  {
    kind: { tr: "Staj", en: "Internship" },
    role: { tr: "AI Engineer Stajyeri", en: "AI Engineer Intern" },
    org: "Secure Computing",
    location: { tr: "Ankara", en: "Ankara, Türkiye" },
    period: { tr: "Eylül 2024 – Ağustos 2025", en: "Sep 2024 – Aug 2025" },
    highlights: {
      tr: [
        "PostgreSQL üzerinde 100 milyondan fazla kayıt yöneten bir RAG sistemi tasarladım; FAISS indekslemeyle saniyenin altında arama süreleri elde ettim.",
        "Elasticsearch ile entegre bir chatbot ve web trafiği loglarını analiz eden Streamlit tabanlı bir arayüz geliştirdim.",
        "Özel etiketlenmiş veri setleriyle Türkçe NER modeli oluşturdum; Jenkins ve Bitbucket ile CI/CD otomasyonu kurdum.",
      ],
      en: [
        "Designed a RAG system managing 100M+ records on PostgreSQL, achieving sub-second search with FAISS indexing.",
        "Developed an Elasticsearch-integrated chatbot and a Streamlit interface for analyzing web traffic logs.",
        "Built a Turkish NER model with custom-labeled datasets; set up CI/CD automation with Jenkins and Bitbucket.",
      ],
    },
    subjects: ["RAG", "FAISS", "Elasticsearch", "Türkçe NER"],
    icon: Briefcase,
  },
  {
    kind: { tr: "Staj", en: "Internship" },
    role: { tr: "Data Scientist Stajyeri", en: "Data Scientist Intern" },
    org: "Kibar Holding / Assan Bilişim",
    location: { tr: "İstanbul", en: "Istanbul, Türkiye" },
    period: { tr: "Temmuz – Ağustos 2024", en: "Jul – Aug 2024" },
    highlights: {
      tr: [
        "3 yıldan uzun geçmiş hava durumu verisini yapay zekâ destekli optimizasyonla analiz ederek tahmin doğruluğunu artırdım.",
        "Veri odaklı stratejilerle enerji üretim verimliliğine katkı sağladım ve Microsoft Azure üzerinde uygulamalı deneyim kazandım.",
      ],
      en: [
        "Analyzed 3+ years of historical weather data with AI-supported optimization, improving forecast accuracy.",
        "Contributed to energy production efficiency through data-driven strategies and gained hands-on experience with Microsoft Azure.",
      ],
    },
    subjects: ["Microsoft Azure", "Zaman Serileri", "Python"],
    icon: Briefcase,
  },
];
