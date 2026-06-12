import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { ChatWidget } from "@/components/chat/chat-widget";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <ChatWidget />
    </main>
  );
}
