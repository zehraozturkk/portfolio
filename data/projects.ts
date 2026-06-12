export type Project = {
  title: string;
  problem: string; // hangi sorunu çözüyor (1 cümle)
  solution: string; // ne yaptın (1-2 cümle)
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Örnek Proje",
    problem: "Çözülen sorunun tek cümlelik özeti.",
    solution: "Ne yaptığının kısa açıklaması.",
    tech: ["Next.js", "TypeScript"],
    github: "https://github.com/kullanici/repo",
  },
];
