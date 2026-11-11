import { Briefcase, type LucideIcon } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export type Experience = {
  kind: Record<Locale, string>; // "Staj", "Part-time" gibi etiket
  role: Record<Locale, string>;
  org: string;
  location: Record<Locale, string>;
  period: Record<Locale, string>;
  highlights: Record<Locale, string[]>; // 2-4 kısa madde
  subjects: string[];
  icon: LucideIcon;
};

export const experiences: Experience[] = [
  {
    kind: { tr: "Part-time", en: "Part-time" },
    role: { tr: "AI Developer", en: "AI Developer" },
    org: "ProudSec",
    location: { tr: "Ankara", en: "Ankara, Türkiye" },
    period: { tr: "Mart – Kasım 2026", en: "Mar – Nov 2026" },
    highlights: {
      tr: [
        "FastAPI, LangGraph ve LangChain ile şirketin güvenlik ürünlerine entegre bir GenAI asistanı geliştirdim; sorguları ilgili güvenlik veritabanlarına otonom yönlendiren, tool calling kullanan bir AI agent tasarladım ve token kullanımını azalttım.",
        "vLLM ile on-premise, self-hosted bir LLM devreye aldım; harici API bağımlılığını kaldırıp hassas verinin şirket içinde kalmasını sağladım.",
        "Günde 1.000+ haberi işleyip özetleyen ve tehdit aktörlerini tespit eden production LLM pipeline'ı kurdum; CVE analizi ve otomatik raporlama için bir AI workflow geliştirdim.",
        "Özel bir spaCy NER modeli eğiterek günlük etiketleme precision'ını %87'den %98'e çıkardım.",
      ],
      en: [
        "Built a GenAI assistant integrated into the company's security products with FastAPI, LangGraph, and LangChain; designed a tool-calling AI agent that autonomously routes queries to the relevant security databases while reducing token usage.",
        "Deployed a self-hosted LLM on-premise with vLLM, removing external API dependency and keeping sensitive data in-house.",
        "Built a production LLM pipeline that ingests and summarizes 1,000+ news articles daily and detects threat actors; developed an AI workflow for CVE analysis and automated reporting.",
        "Trained a custom spaCy NER model that raised daily labeling precision from 87% to 98%.",
      ],
    },
    subjects: ["AI Agents", "LangGraph", "FastAPI", "vLLM", "spaCy NER"],
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
        "SHAP analiziyle model açıklanabilirliğini güçlendirdim ve Power BI'da 2 karar destek dashboard'u oluşturdum.",
      ],
      en: [
        "Applied EDA and NLP-based feature engineering to 16,000+ rows of raw healthcare data; automated scripts cut data cleaning time by 50%.",
        "Raised the R² score of a LightGBM treatment-duration model from 0.86 to 0.91 with Optuna and FLAML hyperparameter optimization.",
        "Strengthened model explainability with SHAP analysis and built 2 decision-support dashboards in Power BI.",
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
        "Özel etiketlenmiş veri setiyle 3 varlık tipini kapsayan Türkçe NER modeli eğittim; Pull Request'leri otomatik inceleyen TypeScript aracı geliştirdim ve Jenkins, Bitbucket ile CI/CD otomasyonu kurdum.",
      ],
      en: [
        "Designed a RAG system managing 100M+ records on PostgreSQL, achieving sub-second search with FAISS indexing.",
        "Developed an Elasticsearch-integrated chatbot and a Streamlit interface for analyzing web traffic logs.",
        "Trained a Turkish NER model covering 3 entity types on a custom-labeled dataset; built a TypeScript tool that automatically reviews pull requests and set up CI/CD with Jenkins and Bitbucket.",
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
