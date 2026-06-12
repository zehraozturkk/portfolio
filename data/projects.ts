import {
  Accessibility,
  Activity,
  BarChart3,
  HeartPulse,
  ShoppingCart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  title: string;
  description: string; // 1-2 cümle: sorun + ne yapıldığı
  tags: [string, string];
  icon: LucideIcon;
  github?: string; // repo yoksa kart linksiz gösterilir
};

export const projects: Project[] = [
  {
    title: "AccessMate",
    description:
      "Mekanları 15+ erişilebilirlik kriterine göre değerlendiren mobil platform. TÜBİTAK 2209/A destekli; 160+ proje arasından Toplum Kategorisi Birincilik Ödülü.",
    tags: ["Node.js", "TÜBİTAK 1.si"],
    icon: Accessibility,
  },
  {
    title: "E-Commerce RAG Chatbot",
    description:
      "E-ticaret verisine doğal dille soru sorulabilen RAG tabanlı bilgi sistemi; modüler ingestion, embedding ve vektör arama pipeline'ları.",
    tags: ["RAG", "Pinecone"],
    icon: ShoppingCart,
    github: "https://github.com/zehraozturkk/RAG_e-commerce",
  },
  {
    title: "Web Traffic Log Chatbot",
    description:
      "Web trafiği loglarını Elasticsearch üzerinde analiz edip doğal dille sorgulamayı sağlayan Streamlit tabanlı chatbot.",
    tags: ["Elasticsearch", "Streamlit"],
    icon: Activity,
    github: "https://github.com/zehraozturkk/chatbot-web-traffic-logs",
  },
  {
    title: "Churn Prediction",
    description:
      "Türk Telekom Big Data Camp projesi: dengesiz veri üzerinde SMOTE, LightGBM ve XGBoost ile müşteri kaybı tahmini; Scala-Spark ile büyük veri işleme.",
    tags: ["Spark", "LightGBM"],
    icon: BarChart3,
    github: "https://github.com/zehraozturkk/tt-bootcamp",
  },
  {
    title: "Car-Price-Predict",
    description:
      "Araç özelliklerine göre fiyat tahmini yapan makine öğrenmesi modeli; EDA, feature engineering ve XGBoost ile yüksek doğruluk sağlandı.",
    tags: ["EDA", "Machine Learning"],
    icon: HeartPulse,
    github: "https://github.com/zehraozturkk/Car-Price-Predict",
  },
  {
    title: "e-ticaret-microservice",
    description:
      "Monolitik e-ticaret uygulamasını Java, springboot, Kafka kullanarak mikroservis mimarisiyle yeniden tasarladım; Docker ile konteynerleştirme ve CI/CD entegrasyonu sağlandı.",
    tags: ["Java", "Spring Boot"],
    icon: Sparkles,
    github: "https://github.com/zehraozturkk/e-ticaret-microservice",
  },
];
