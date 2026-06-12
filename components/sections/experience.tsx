import { BookOpen, Calendar, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { experiences, type Experience } from "@/data/experience";
import type { Dictionary, Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function ExperienceCard({
  item,
  lang,
  keySubjectsLabel,
}: {
  item: Experience;
  lang: Locale;
  keySubjectsLabel: string;
}) {
  const Icon = item.icon;
  return (
    <article className="overflow-hidden rounded-2xl bg-card shadow-lg shadow-foreground/5 ring-1 ring-foreground/10 transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* Kompakt başlık: ikon + rol/şirket tek blokta, sağda tarih */}
      <div className="bg-gradient-to-br from-primary to-primary/80 p-5 text-primary-foreground">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15">
              <Icon className="size-4.5" />
            </span>
            <div>
              <h3 className="font-heading text-lg leading-tight font-extrabold">
                {item.role[lang]}
              </h3>
              <p className="mt-0.5 text-sm font-semibold text-primary-foreground/90">
                {item.org}
              </p>
            </div>
          </div>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold">
            <Calendar className="size-3" />
            {item.period[lang]}
          </span>
        </div>
        <p className="mt-3 flex items-center gap-3 text-xs text-primary-foreground/80">
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3" />
            {item.location[lang]}
          </span>
          <span aria-hidden>·</span>
          {item.kind[lang]}
        </p>
      </div>

      <div className="p-6">
        <ul className="space-y-2.5">
          {item.highlights[lang].map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <span
                aria-hidden
                className="mt-2.5 h-0.5 w-3 shrink-0 rounded-full bg-primary"
              />
              {highlight}
            </li>
          ))}
        </ul>
        <p className="mt-4 flex items-center gap-1.5 text-xs font-bold tracking-wider text-foreground/80 uppercase">
          <BookOpen className="size-3.5 text-primary" />
          {keySubjectsLabel}
        </p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {item.subjects.map((subject) => (
            <span
              key={subject}
              className="rounded-full px-3 py-1 text-xs font-semibold text-foreground/80 ring-1 ring-border"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ExperienceSection({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["experience"];
}) {
  return (
    <section id="experience" className="py-24">
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

      <div className="relative mt-14">
        {/* Orta çizgi: mobilde solda, lg'de ortada */}
        <div
          aria-hidden
          className="absolute top-0 left-5 h-full w-0.5 -translate-x-1/2 rounded-full bg-primary/25 lg:left-1/2"
        />
        <ol className="space-y-10 lg:space-y-14">
          {experiences.map((item, index) => (
            <li
              key={`${item.org}-${item.period.en}`}
              className="relative pl-12 lg:grid lg:grid-cols-2 lg:gap-20 lg:pl-0"
            >
              {/* Zaman noktası */}
              <span
                aria-hidden
                className="absolute top-8 left-5 flex size-5 -translate-x-1/2 items-center justify-center rounded-full bg-background ring-2 ring-primary lg:left-1/2"
              >
                <span className="size-2 rounded-full bg-primary" />
              </span>
              <div
                className={cn(
                  index % 2 === 1 && "lg:col-start-2",
                  index % 2 === 0 && "lg:pr-2",
                  index % 2 === 1 && "lg:pl-2"
                )}
              >
                <Reveal from={index % 2 === 0 ? "left" : "right"}>
                  <ExperienceCard
                    item={item}
                    lang={lang}
                    keySubjectsLabel={dict.keySubjects}
                  />
                </Reveal>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
