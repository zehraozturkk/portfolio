"use client";

import { useEffect, useRef } from "react";
import type { UIMessage } from "ai";

function messageText(message: UIMessage): string {
  return message.parts
    .map((part) => (part.type === "text" ? part.text : ""))
    .join("");
}

export function ChatMessages({
  messages,
  isLoading,
}: {
  messages: UIMessage[];
  isLoading: boolean;
}) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 space-y-3 overflow-y-auto p-4">
      {messages.length === 0 && (
        <p className="text-sm text-muted-foreground">
          Merhaba! Fatmatüzzehra hakkında merak ettiklerinizi sorabilirsiniz.
        </p>
      )}
      {messages.map((m) => (
        <div
          key={m.id}
          className={
            m.role === "user"
              ? "ml-8 rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground"
              : "mr-8 rounded-lg bg-muted px-3 py-2 text-sm"
          }
        >
          {messageText(m)}
        </div>
      ))}
      {isLoading && (
        <div className="mr-8 rounded-lg bg-muted px-3 py-2 text-sm text-muted-foreground">
          Yazıyor…
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
