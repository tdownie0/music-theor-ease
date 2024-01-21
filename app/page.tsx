"use client"
import { useEffect } from "react";
import { notesWithSharps } from "./utils/musicLogic";

export default function Home() {
  useEffect(() => {
    console.log(notesWithSharps);
  }, []);

  return (
    <main>
      <h1>Music Theor-ease</h1>
    </main>
  );
}
