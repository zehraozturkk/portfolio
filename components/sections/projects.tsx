import { ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import type { Dictionary, Locale } from "@/lib/i18n";

function ProjectCard({ project, lang }: { project: Project; lang: Locale }) {
  const Icon = project.icon;
  const Wrapper = project.github ? "a" : "div";

  return (
    <Wrapper
      {...(project.github && {
        href: project.github,
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className="group flex flex-col rounded-2xl bg-card p-6 ring-1 ring-primary/15 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5 hover:ring-primary/30"
    >
      <div className="flex items-start justify-between">
        <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
          <Icon className="size-5" />
        </span>
        {project.github && (
          <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
        )}
      </div>
      <h3 className="mt-5 font-heading text-lg font-bold">{project.title}</h3>
      <p className="mt-2 grow text-sm leading-relaxed text-muted-foreground">
        {project.description[lang]}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full px-3 py-1 text-xs font-semibold text-foreground/80 ring-1 ring-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}

export function Projects({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["projects"];
}) {
  return (
    <section id="projects" className="py-24">
      <div className="text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
          {dict.eyebrow}
        </p>
        <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="text-primary">{dict.headingA}</span>{" "}
          <span className="text-primary/50">{dict.headingB}</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          {dict.subtitle}
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} lang={lang} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/zehraozturkk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-primary uppercase underline-offset-8 hover:underline"
        >
          {dict.allOnGithub}
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </section>
  );
}
