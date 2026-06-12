import { Hero } from "@/components/sections/hero";
import { ExperienceSection } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Platforms } from "@/components/sections/platforms";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { ChatWidget } from "@/components/chat/chat-widget";
import { getDictionary, type Locale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const locale = lang as Locale;

  return (
    <main className="mx-auto w-full max-w-6xl px-6">
      <Hero dict={dict.hero} />
      <ExperienceSection lang={locale} dict={dict.experience} />
      <Projects lang={locale} dict={dict.projects} />
      <Platforms dict={dict.platforms} />
      <Skills lang={locale} dict={dict.skills} />
      <Contact dict={dict.contact} />
      <ChatWidget dict={dict.chat} />
    </main>
  );
}
