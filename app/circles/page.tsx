import React from "react";
import Link from "next/link";
import CircleOfNotes from "../components/CircleOfNotes";

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
        <CircleOfNotes />
        <p>
          The circle of fourths is a conceptual framework in music theory that
          presents the relationship between musical keys in a reverse order
          compared to the more commonly known circle of fifths. In the circle of
          fourths, each key is arranged counterclockwise, with each adjacent key
          being a perfect fourth apart. This reverse arrangement mirrors the
          circle of fifths, where keys are organized clockwise in perfect
          fifths. Just as the circle of fifths is a tool for understanding key
          relationships and chord progressions, the circle of fourths provides a
          complementary perspective, showcasing the inverse progression of
          musical keys. Musicians often use both the circle of fifths and the
          circle of fourths to navigate and comprehend the intricate connections
          within the chromatic scale, enhancing their understanding of harmony
          and modulation in music composition and performance.
        </p>
        <CircleOfNotes circleType="fourths" />
      </div>
    </main>
  );
};

export default Circles;
