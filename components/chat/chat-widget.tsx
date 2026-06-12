"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Dictionary } from "@/lib/i18n";
import { ChatMessages } from "./chat-messages";
import { SuggestedQuestions } from "./suggested-questions";

export function ChatWidget({ dict }: { dict: Dictionary["chat"] }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();

  const isLoading = status === "submitted" || status === "streaming";

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  return (
    <>
      {/* Açma/kapama balonu — sağ alt köşe */}
      <Button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg"
        aria-label={open ? dict.closeLabel : dict.openLabel}
      >
        {open ? "✕" : "💬"}
      </Button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-xl border bg-background shadow-2xl">
          <div className="border-b px-4 py-3">
            <p className="text-sm font-semibold">{dict.title}</p>
            <p className="text-xs text-muted-foreground">{dict.subtitle}</p>
          </div>

          <ChatMessages
            messages={messages}
            isLoading={isLoading}
            greeting={dict.greeting}
            typing={dict.typing}
          />

          {messages.length === 0 && (
            <SuggestedQuestions questions={dict.questions} onSelect={send} />
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t p-3"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={dict.placeholder}
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading || !input.trim()}>
              {dict.send}
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
