import {
  Activity,
  BarChart3,
  Blocks,
  Bot,
  Boxes,
  Braces,
  Brain,
  Cloud,
  Code2,
  Container,
  Cpu,
  Database,
  FileCode,
  FlaskConical,
  Gauge,
  GitBranch,
  Globe,
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
  TrendingUp,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Skill = { name: string; icon: LucideIcon };

export type SkillCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Diller",
    icon: Code2,
    skills: [
      { name: "Python", icon: FileCode },
      { name: "SQL", icon: Database },
      { name: "JavaScript", icon: Braces },
    ],
  },
  {
    id: "genai",
    label: "GenAI & LLM",
    icon: Sparkles,
    skills: [
      { name: "RAG", icon: Search },
      { name: "LangChain", icon: Workflow },
      { name: "LangGraph", icon: Network },
      { name: "Hugging Face", icon: Brain },
      { name: "vLLM", icon: Zap },
    ],
  },
  {
    id: "data-science",
    label: "Veri Bilimi & ML",
    icon: LineChart,
    skills: [
      { name: "Pandas", icon: Table2 },
      { name: "Scikit-learn", icon: FlaskConical },
      { name: "NLP / NER", icon: Brain },
      { name: "Power BI", icon: BarChart3 },
    ],
  },
  {
    id: "backend",
    label: "Backend & Veritabanı",
    icon: Server,
    skills: [
      { name: "FastAPI", icon: Zap },
      { name: "Node.js", icon: Server },
      { name: "Streamlit", icon: PanelsTopLeft },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: HardDrive },
      { name: "Elasticsearch", icon: Search },
      { name: "Kafka", icon: Layers },
    ],
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Docker", icon: Container },
      { name: "Git", icon: GitBranch },
      { name: "Linux", icon: Terminal },
      { name: "Jenkins", icon: Boxes },
      { name: "n8n", icon: Workflow },
    ],
  },
];
