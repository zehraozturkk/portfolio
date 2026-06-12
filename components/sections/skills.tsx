"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active =
    skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];

  return (
    <section id="skills" className="py-24">
      <div className="text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-primary uppercase">
          Teknoloji Yığını
        </p>
        <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="text-primary">Teknik</span>{" "}
          <span className="text-primary/50">Yetenekler</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary" />
      </div>

      <div
        role="tablist"
        aria-label="Yetenek kategorileri"
        className="mt-14 flex flex-wrap gap-1.5 rounded-2xl bg-card p-1.5 ring-1 ring-foreground/10"
      >
        {skillCategories.map((category) => {
          const TabIcon = category.icon;
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`skills-panel-${category.id}`}
              onClick={() => setActiveId(category.id)}
              className={cn(
                "flex min-w-fit flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <TabIcon className="size-4" />
              {category.label}
            </button>
          );
        })}
      </div>

      <div
        id={`skills-panel-${active.id}`}
        role="tabpanel"
        className="mt-6 rounded-2xl bg-card p-6 ring-1 ring-foreground/10 sm:p-8"
      >
        <h3 className="font-heading text-xl font-bold text-primary">
          {active.label}
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {active.skills.map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-3 rounded-2xl bg-secondary/50 px-4 py-6 ring-1 ring-foreground/5 transition-all hover:-translate-y-0.5 hover:ring-primary/30"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <SkillIcon className="size-5" />
                </span>
                <span className="text-sm font-semibold">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
