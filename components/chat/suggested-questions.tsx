"use client";

export function SuggestedQuestions({
  questions,
  onSelect,
}: {
  questions: readonly string[];
  onSelect: (question: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 px-4 pb-2">
      {questions.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          className="rounded-full border px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          {q}
        </button>
      ))}
    </div>
  );
}
