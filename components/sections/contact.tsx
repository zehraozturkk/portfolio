import { ArrowUpRight, Briefcase, Mail, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import type { Dictionary } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const EMAIL = "fatmatuzzehraozturkk@gmail.com";
// TODO: LinkedIn kullanıcı adını doğrula
const LINKEDIN = "https://www.linkedin.com/in/fatmatuzzehra-ozturk";
const GITHUB = "https://github.com/zehraozturkk";

// lucide'ın bu sürümünde marka ikonları yok; GitHub/LinkedIn inline SVG.
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  const links = [
    {
      label: dict.emailLabel,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "@zehraozturkk",
      href: GITHUB,
      icon: GitHubIcon,
    },
    {
      label: "LinkedIn",
      value: "Fatmatüzzehra Öztürk",
      href: LINKEDIN,
      icon: LinkedInIcon,
    },
  ];

  return (
    <section id="contact" className="py-24">
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

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col justify-between rounded-3xl bg-primary p-8 text-primary-foreground shadow-xl shadow-foreground/10">
          <div>
            <h3 className="font-heading text-2xl font-extrabold sm:text-3xl">
              {dict.cardTitle}
            </h3>
            <p className="mt-4 text-primary-foreground/85">{dict.cardText}</p>
            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/85">
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0" />
                {dict.location}
              </li>
              <li className="flex items-center gap-3">
                <Briefcase className="size-4 shrink-0" />
                {dict.workStyle}
              </li>
            </ul>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "mt-8 h-12 w-fit rounded-xl px-7 text-base font-semibold"
            )}
          >
            <Mail className="size-4" />
            {dict.sendEmail}
          </a>
        </div>

        <div className="flex flex-col gap-4">
          {links.map((link) => {
            const Icon = link.icon;
            const external = !link.href.startsWith("mailto:");
            return (
              <a
                key={link.label}
                href={link.href}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="group flex grow items-center gap-4 rounded-2xl bg-card p-5 ring-1 ring-foreground/10 transition-all hover:-translate-y-0.5 hover:ring-primary/30"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold tracking-wider text-muted-foreground uppercase">
                    {link.label}
                  </span>
                  <span className="block truncate text-sm font-semibold">
                    {link.value}
                  </span>
                </span>
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
