import { useEffect, useState } from "react";

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

const isBrowser = typeof window !== "undefined";

export const useTheme = () => {
  const [theme, setTheme] = useState<THEME>(() => {
    const localTheme = isBrowser
      ? (localStorage.getItem("theme") as THEME)
      : undefined;
    const prefersDark = isBrowser
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;
    // return localTheme || (prefersDark ? THEME.DARK : THEME.LIGHT);
    return THEME.LIGHT;
  });

  const toggleTheme = () => {
    const root = window.document.documentElement;
    root.classList.toggle("dark");
    setTheme((prev) => {
      if (prev === THEME.DARK) {
        return THEME.LIGHT;
      }
      return THEME.DARK;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};
