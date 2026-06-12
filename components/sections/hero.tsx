import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const highlights = [
  "LLM, RAG mimarileri ve GenAI odaklı çözümler",
  "4 farklı şirkette uçtan uca AI/ML deneyimi",
  "Junior AI/ML pozisyonlarına ve iş birliklerine açık",
];

const stats = [
  { value: "4+", label: "İş Deneyimi" },
  { value: "1.", label: "TÜBİTAK Ödülü" },
  { value: "100M+", label: "Kayıtla RAG" },
  { value: "GenAI", label: "Uzmanlık" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="grid min-h-svh items-center gap-12 pt-32 pb-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
    >
      <div>
        <p className="text-sm font-bold tracking-[0.25em] text-primary uppercase">
          AI &amp; Machine Learning
        </p>
        <h1 className="mt-4 font-heading text-5xl font-extrabold tracking-tight text-primary sm:text-6xl xl:text-7xl">
          Fatmatüzzehra Öztürk
          <span className="mt-2 block">ML &amp; GenAI Engineer</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
          Python, LLM&apos;ler ve RAG mimarileriyle üretime değer katan akıllı
          çözümler geliştiriyorum.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-xl px-7 text-base font-semibold"
            )}
          >
            Projeleri Gör
          </a>
          <a
            href="/cv.pdf"
            download
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-xl px-7 text-base font-semibold"
            )}
          >
            CV İndir
          </a>
        </div>
      </div>

      <div className="rounded-3xl bg-card p-6 shadow-xl shadow-foreground/5 ring-1 ring-foreground/10 sm:p-8">
        <div className="mx-auto flex size-36 items-center justify-center rounded-full bg-gradient-to-br from-primary/70 to-primary font-heading text-4xl font-extrabold text-primary-foreground ring-4 ring-primary/30 ring-offset-4 ring-offset-card sm:size-44">
          FÖ
        </div>

        <p className="mt-8 text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
          Öne Çıkanlar
        </p>
        <ul className="mt-3 space-y-2.5">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-[15px]">
              <span
                aria-hidden
                className="mt-2.5 h-0.5 w-3 shrink-0 rounded-full bg-primary"
              />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t pt-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-secondary/60 px-1 py-4 text-center ring-1 ring-foreground/5"
              >
                <div className="font-heading text-2xl font-extrabold">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
