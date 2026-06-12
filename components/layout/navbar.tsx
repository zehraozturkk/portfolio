"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const sections = ["#hero", "#projects", "#skills", "#contact"];

export function Navbar({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["nav"];
}) {
  const [active, setActive] = useState("#hero");
  const [dark, setDark] = useState(false);

  const links = [
    { href: "#hero", label: dict.home },
    { href: "#projects", label: dict.projects },
    { href: "#skills", label: dict.skills },
    { href: "#contact", label: dict.contact },
  ];

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      // Aktif sayılma çizgisi: viewport'un üstten %40'ı — section bu bandı
      // geçince navbar'da seçili görünür.
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const href of sections) {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  const otherLang: Locale = lang === "tr" ? "en" : "tr";

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center">
        <nav className="flex items-center gap-1 rounded-full bg-card/80 p-1.5 shadow-lg shadow-foreground/5 ring-1 ring-foreground/10 backdrop-blur-md">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-bold tracking-widest uppercase transition-colors sm:px-4 sm:text-sm",
                active === link.href
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="absolute right-0 hidden items-center gap-2 md:flex">
          <a
            href={`/${otherLang}`}
            className="flex h-10 items-center justify-center rounded-xl bg-card/80 px-3 text-xs font-bold tracking-widest text-muted-foreground uppercase shadow-lg shadow-foreground/5 ring-1 ring-foreground/10 backdrop-blur-md transition-colors hover:bg-secondary hover:text-foreground"
          >
            {otherLang}
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? dict.toggleToLight : dict.toggleToDark}
            className="flex size-10 items-center justify-center rounded-xl bg-card/80 text-foreground shadow-lg shadow-foreground/5 ring-1 ring-foreground/10 backdrop-blur-md transition-colors hover:bg-secondary"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
