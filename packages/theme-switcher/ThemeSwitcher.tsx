"use client";

import { useTheme } from "@/packages/hooks";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      className="relative inline-flex text-slate-900 dark:text-white"
      onClick={toggleTheme}
    >
      <Sun
        size="16"
        className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"
      />
      <Moon
        size="16"
        className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0"
      />

      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
