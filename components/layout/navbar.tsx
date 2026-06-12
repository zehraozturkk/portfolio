"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#hero", label: "Anasayfa" },
  { href: "#projects", label: "Projeler" },
  { href: "#skills", label: "Yetenekler" },
  { href: "#contact", label: "İletişim" },
];

export function Navbar() {
  const [active, setActive] = useState("#hero");
  const [dark, setDark] = useState(false);

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

    for (const link of links) {
      const el = document.querySelector(link.href);
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
          <a
            href="/cv.pdf"
            download
            className="rounded-full px-3 py-1.5 text-xs font-bold tracking-widest text-primary uppercase ring-1 ring-primary/40 transition-colors hover:bg-primary hover:text-primary-foreground sm:px-4 sm:text-sm"
          >
            CV
          </a>
        </nav>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={dark ? "Açık temaya geç" : "Koyu temaya geç"}
          className="absolute right-0 hidden size-10 items-center justify-center rounded-xl bg-card/80 text-foreground shadow-lg shadow-foreground/5 ring-1 ring-foreground/10 backdrop-blur-md transition-colors hover:bg-secondary md:flex"
        >
          {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
      </div>
    </header>
  );
}
