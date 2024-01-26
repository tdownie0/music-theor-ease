import React from "react";
import Link from "next/link";
import CircleOfFifths from "../components/CircleOfFifths";

const Circles = () => {
  return (
    <main className="primary min-h-screen mt-16 ml-4">
      <ul className="flex">
        <li className="mr-4">
          <Link href="/" className="link hover:text-primary">
            Home
          </Link>
        </li>
        <li>
          <Link href="/modes" className="link hover:text-accent">
            Modes
          </Link>
        </li>
      </ul>
      <div className="text-4xl font-semibold mt-8">Circles</div>
      <div className="hero flex flex-col">
        <p>
          The circle of fifths is a fundamental concept in music theory,
          providing a visual representation of the relationships between the 12
          tones of the chromatic scale. Arranged in a circular fashion, each
          adjacent key on the circle is a perfect fifth apart. Starting from any
          key, moving clockwise adds a sharp to the key signature, while moving
          counterclockwise adds a flat. This progression follows the order of
          sharps or flats commonly found in key signatures. The circle of fifths
          is a valuable tool for musicians, helping them understand key
          relationships, chord progressions, and modulation in music. It is
          particularly useful for composers, songwriters, and performers in
          navigating the complexities of musical harmony.
        </p>
        <CircleOfFifths />
      </div>
    </main>
  );
};

export default Circles;
