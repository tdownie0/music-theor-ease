import { useEffect } from "react";
import { notesWithSharps } from "./utils/musicLogic";

export default function Home() {

  return (
    <main className="primary min-h-screen flex items-center justify-center">
      <div className="text-4xl font-bold text-winter-700">
        Music Theor-ease
      </div>

      <div className="mt-8 text-lg text-winter-600">
        Introduction to the pillars in music concepts
      </div>
    </main>
  );
}
