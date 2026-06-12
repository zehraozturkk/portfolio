import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="mb-8 text-3xl font-bold">Projeler</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title}>
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.problem}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">{p.solution}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
