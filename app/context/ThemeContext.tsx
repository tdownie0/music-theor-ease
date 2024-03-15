"use client";
import { createContext, useEffect, useState, ReactNode } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  const changeTheme = (nextTheme) => {
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  // #region -- Load Theme
  const loadTheme = () => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    setIsMounted(true);
  };

  /* Simulate asynchronous loading to ensure the component mounts after
   * the initial render
   */
  useEffect(() => {
    setTimeout(loadTheme, 300);
  }, []);
  // #endregion -- Load Theme

  if (!isMounted) {
    return <>Loading...</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
