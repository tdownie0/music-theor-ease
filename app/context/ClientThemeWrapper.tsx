// ClientThemeWrapper.tsx
"use client";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ClientThemeWrapper({ children }: any) {
  const { theme } = useContext(ThemeContext);

  return <div data-theme={theme}>{children}</div>;
}
