import {
  BarChart3,
  Boxes,
  Braces,
  Brain,
  Cloud,
  Code2,
  Container,
  Database,
  FileCode,
  FlaskConical,
  GitBranch,
  HardDrive,
  Layers,
  LineChart,
  Network,
  PanelsTopLeft,
  Search,
  Server,
  Sparkles,
  Table2,
  Terminal,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/lib/i18n";

export type Skill = { name: string; icon: LucideIcon };

export type SkillCategory = {
  id: string;
  label: Record<Locale, string>;
  icon: LucideIcon;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: { en: "Languages", tr: "Diller" },
    icon: Code2,
    skills: [
      { name: "Python", icon: FileCode },
      { name: "SQL", icon: Database },
      { name: "Java", icon: Braces },
      { name: "TypeScript", icon: Braces },
    ],
  },
  {
    id: "genai",
    label: { en: "GenAI & LLM", tr: "GenAI & LLM" },
    icon: Sparkles,
    skills: [
      { name: "RAG", icon: Search },
      { name: "AI Agents", icon: Sparkles },
      { name: "Tool Calling", icon: Workflow },
      { name: "LangChain", icon: Workflow },
      { name: "LangGraph", icon: Network },
      { name: "CrewAI", icon: Network },
      { name: "Hugging Face", icon: Brain },
      { name: "vLLM", icon: Zap },
      { name: "FAISS", icon: Search },
      { name: "Pinecone", icon: Database },
    ],
  },
  {
    id: "data-science",
    label: { en: "Data Science & ML", tr: "Veri Bilimi & ML" },
    icon: LineChart,
    skills: [
      { name: "Pandas", icon: Table2 },
      { name: "Scikit-learn", icon: FlaskConical },
      { name: "NLP / NER", icon: Brain },
      { name: "spaCy", icon: Brain },
      { name: "LightGBM", icon: LineChart },
      { name: "XGBoost", icon: LineChart },
      { name: "Power BI", icon: BarChart3 },
    ],
  },
  {
    id: "backend",
    label: { en: "Backend & Databases", tr: "Backend & Veritabanı" },
    icon: Server,
    skills: [
      { name: "FastAPI", icon: Zap },
      { name: "Spring Boot", icon: Server },
      { name: "Node.js", icon: Server },
      { name: "Streamlit", icon: PanelsTopLeft },
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: HardDrive },
      { name: "Elasticsearch", icon: Search },
      { name: "Kafka", icon: Layers },
    ],
  },
  {
    id: "cloud-devops",
    label: { en: "Cloud & DevOps", tr: "Cloud & DevOps" },
    icon: Cloud,
    skills: [
      { name: "Docker", icon: Container },
      { name: "Git", icon: GitBranch },
      { name: "Linux", icon: Terminal },
      { name: "CI/CD (Jenkins)", icon: Boxes },
      { name: "Azure", icon: Cloud },
      { name: "n8n", icon: Workflow },
    ],
  },
];
