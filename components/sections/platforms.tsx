import { Code2, ExternalLink, Star, Terminal } from "lucide-react";
import { getHackerRankStats, getLeetCodeStats } from "@/lib/platform-stats";
import { cn } from "@/lib/utils";

const LEETCODE_USER = "fzehrao";
const HACKERRANK_USER = "zehraozturk1801";

type Stat = { label: string; value: string };

function PlatformCard({
  name,
  username,
  href,
  icon: Icon,
  accent,
  stats,
}: {
  name: string;
  username: string;
  href: string;
  icon: typeof Code2;
  accent: "amber" | "green";
  stats: Stat[];
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col rounded-2xl border-t-4 bg-card p-6 ring-1 ring-foreground/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5",
        accent === "amber" ? "border-t-amber-500/80" : "border-t-emerald-600/80"
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <span
            className={cn(
              "flex size-12 items-center justify-center rounded-xl",
              accent === "amber"
                ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                : "bg-emerald-600/15 text-emerald-700 dark:text-emerald-400"
            )}
          >
            <Icon className="size-5" />
          </span>
          <div>
            <h3 className="font-heading text-lg font-bold">{name}</h3>
            <p className="text-sm text-muted-foreground">@{username}</p>
          </div>
        </div>
        <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>

      {stats.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-secondary/60 px-2 py-3 text-center ring-1 ring-foreground/5"
            >
              <div className="font-heading text-xl font-extrabold">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </a>
  );
}

export async function Platforms() {
  const [leetcode, hackerrank] = await Promise.all([
    getLeetCodeStats(LEETCODE_USER),
    getHackerRankStats(HACKERRANK_USER),
  ]);

  const pythonBadge = hackerrank?.badges.find((b) => b.name === "Python");

  return (
    <section id="platforms" className="py-24">
      <div className="text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
          Pratik &amp; Yarışma
        </p>
        <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="text-primary">Problem</span>{" "}
          <span className="text-primary/50">Çözme</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Algoritma pratiğimi sürdürdüğüm platformlar — istatistikler günlük
          olarak otomatik güncellenir.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
        <PlatformCard
          name="LeetCode"
          username={LEETCODE_USER}
          href={`https://leetcode.com/u/${LEETCODE_USER}/`}
          icon={Code2}
          accent="amber"
          stats={
            leetcode
              ? [
                  { label: "Çözülen", value: String(leetcode.solvedTotal) },
                  { label: "Easy", value: String(leetcode.solvedEasy) },
                  { label: "Medium", value: String(leetcode.solvedMedium) },
                ]
              : []
          }
        />
        <PlatformCard
          name="HackerRank"
          username={HACKERRANK_USER}
          href={`https://www.hackerrank.com/profile/${HACKERRANK_USER}`}
          icon={Terminal}
          accent="green"
          stats={
            hackerrank
              ? [
                  { label: "Çözülen", value: String(hackerrank.solvedTotal) },
                  {
                    label: "Python",
                    value: pythonBadge ? `${pythonBadge.stars}★` : "—",
                  },
                  { label: "Rozet", value: String(hackerrank.badges.length) },
                ]
              : []
          }
        />
      </div>

      <p className="mt-8 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Star className="size-3.5" aria-hidden />
        Veriler platformların açık API&apos;lerinden günde bir kez çekilir.
      </p>
    </section>
  );
}
