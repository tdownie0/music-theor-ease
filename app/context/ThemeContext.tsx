// ThemeContext.tsx
"use client";
import { createContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextType {
  theme?: string;
  changeTheme?: (nextTheme?: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      return storedTheme;
    }
    return "light";
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const loadTheme = () => {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
      setIsMounted(true);
    };

    // Simulate asynchronous loading
    setTimeout(loadTheme, 0);
  }, []); // Make sure the dependency array is empty to run it only once

  const changeTheme = (nextTheme: string) => {
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  if (!isMounted) {
    return <>Loading...</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
