"use client";

import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 26) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setOutput(text);
      setDone(true);
      return;
    }

    setOutput("");
    setDone(false);

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setOutput(text.slice(0, i));
      if (i >= text.length) {
        window.clearInterval(id);
        setDone(true);
      }
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return { output, done };
}
