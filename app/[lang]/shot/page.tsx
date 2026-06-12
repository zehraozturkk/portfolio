import { ExperienceSection } from "@/components/sections/experience";
import { getDictionary, type Locale } from "@/lib/i18n";

// Screenshot için geçici sayfa — silinecek.
export default async function Shot({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return (
    <main className="mx-auto w-full max-w-6xl px-6">
      <ExperienceSection lang={lang as Locale} dict={dict.experience} />
    </main>
  );
}
