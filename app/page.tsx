import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Platforms } from "@/components/sections/platforms";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { ChatWidget } from "@/components/chat/chat-widget";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6">
      <Hero />
      <Projects />
      <Platforms />
      <Skills />
      <Contact />
      <ChatWidget />
    </main>
  );
}
