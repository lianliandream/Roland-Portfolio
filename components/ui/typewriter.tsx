"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  text,
  delay = 300,
}: {
  text: string;
  delay?: number;
}) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let interval: number | undefined;
    const start = window.setTimeout(() => {
      let characterIndex = 0;
      interval = window.setInterval(() => {
        characterIndex += 1;
        setVisibleText(text.slice(0, characterIndex));
        if (characterIndex >= text.length && interval)
          window.clearInterval(interval);
      }, 130);
    }, delay);

    return () => {
      window.clearTimeout(start);
      if (interval) window.clearInterval(interval);
    };
  }, [delay, text]);

  return (
    <>
      <span aria-hidden="true">{visibleText}</span>
      <span className="sr-only">{text}</span>
    </>
  );
}

const roles = [
  { label: "REPORTER", href: "#writing" },
  { label: "AUTHOR", href: "#book" },
  { label: "PHOTOGRAPHER", href: "#photography" },
];

export function TypewriterNav({
  items = roles,
}: {
  items?: { label: string; href?: string }[];
}) {
  const fullText = items.map((item) => item.label).join(" · ");
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    let interval: number | undefined;

    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setVisibleCharacters((current) => {
          if (current >= fullText.length) {
            if (interval) window.clearInterval(interval);
            return current;
          }
          return current + 1;
        });
      }, 70);
    }, 650);

    return () => {
      window.clearTimeout(start);
      if (interval) window.clearInterval(interval);
    };
  }, [fullText]);

  let remainingCharacters = visibleCharacters;

  return (
    <span>
      {items.map((item, index) => {
        const visibleLabel = item.label.slice(
          0,
          Math.max(0, remainingCharacters),
        );
        remainingCharacters -= item.label.length;

        const separator = index < items.length - 1 ? " · " : "";
        const visibleSeparator = separator.slice(
          0,
          Math.max(0, remainingCharacters),
        );
        remainingCharacters -= separator.length;

        return (
          <span key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                className="transition-opacity text-[20px] hover:opacity-40"
              >
                {visibleLabel}
              </a>
            ) : (
              visibleLabel
            )}

            {visibleSeparator}
          </span>
        );
      })}
    </span>
  );
}
