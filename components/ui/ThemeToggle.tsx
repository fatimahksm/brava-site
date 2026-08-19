"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function currentTheme() {
  if (typeof document === "undefined") return "light" as const;
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(currentTheme());
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("brava-theme", next);
    setTheme(next);
  };

  return (
    <button className="icon-button" type="button" onClick={toggleTheme} aria-label="Toggle color theme">
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
