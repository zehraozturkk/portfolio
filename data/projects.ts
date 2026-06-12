import {
  Accessibility,
  Activity,
  BarChart3,
  Boxes,
  HeartPulse,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";

export type Project = {
  title: string;
  description: Record<Locale, string>; // 1-2 cümle: sorun + ne yapıldığı
  tags: [string, string];
  icon: LucideIcon;
  github?: string; // repo yoksa kart linksiz gösterilir
};

export const projects: Project[] = [
  {
    title: "AccessMate",
    description: {
      tr: "Mekanları 15+ erişilebilirlik kriterine göre değerlendiren mobil platform. TÜBİTAK 2209/A destekli; 160+ proje arasından Toplum Kategorisi Birincilik Ödülü.",
      en: "A mobile platform that rates venues against 15+ accessibility criteria. Backed by TÜBİTAK 2209/A; won 1st place in the Community Category among 160+ projects.",
    },
    tags: ["Node.js", "TÜBİTAK #1"],
    icon: Accessibility,
  },
  {
    title: "E-Commerce RAG Chatbot",
    description: {
      tr: "E-ticaret verisine doğal dille soru sorulabilen RAG tabanlı bilgi sistemi; modüler ingestion, embedding ve vektör arama pipeline'ları.",
      en: "A RAG-based knowledge system for querying e-commerce data in natural language; modular ingestion, embedding, and vector search pipelines.",
    },
    tags: ["RAG", "Pinecone"],
    icon: ShoppingCart,
    github: "https://github.com/zehraozturkk/RAG_e-commerce",
  },
  {
    title: "Web Traffic Log Chatbot",
    description: {
      tr: "Web trafiği loglarını Elasticsearch üzerinde analiz edip doğal dille sorgulamayı sağlayan Streamlit tabanlı chatbot.",
      en: "A Streamlit-based chatbot that analyzes web traffic logs on Elasticsearch and lets you query them in natural language.",
    },
    tags: ["Elasticsearch", "Streamlit"],
    icon: Activity,
    github: "https://github.com/zehraozturkk/chatbot-web-traffic-logs",
  },
  {
    title: "Churn Prediction",
    description: {
      tr: "Türk Telekom Big Data Camp projesi: dengesiz veri üzerinde SMOTE, LightGBM ve XGBoost ile müşteri kaybı tahmini; Scala-Spark ile büyük veri işleme.",
      en: "Türk Telekom Big Data Camp project: customer churn prediction on imbalanced data with SMOTE, LightGBM, and XGBoost; big data processing with Scala-Spark.",
    },
    tags: ["Spark", "LightGBM"],
    icon: BarChart3,
    github: "https://github.com/zehraozturkk/tt-bootcamp",
  },
  {
    title: "Car-Price-Predict",
    description: {
      tr: "Araç özelliklerine göre fiyat tahmini yapan makine öğrenmesi modeli; EDA, feature engineering ve XGBoost ile yüksek doğruluk sağlandı.",
      en: "A machine learning model that predicts car prices from vehicle features; high accuracy achieved with EDA, feature engineering, and XGBoost.",
    },
    tags: ["EDA", "Machine Learning"],
    icon: HeartPulse,
    github: "https://github.com/zehraozturkk/Car-Price-Predict",
  },
  {
    title: "e-ticaret-microservice",
    description: {
      tr: "Monolitik e-ticaret uygulamasını Java, Spring Boot ve Kafka kullanarak mikroservis mimarisiyle yeniden tasarladım; Docker ile konteynerleştirme ve CI/CD entegrasyonu sağlandı.",
      en: "Redesigned a monolithic e-commerce app as microservices using Java, Spring Boot, and Kafka; containerized with Docker and integrated CI/CD.",
    },
    tags: ["Java", "Spring Boot"],
    icon: Boxes,
    github: "https://github.com/zehraozturkk/e-ticaret-microservice",
  },
];
