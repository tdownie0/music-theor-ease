import React from "react";
import Link from "next/link";

enum siteLink {
  Home = "Home",
  Circles = "Circles",
  Modes = "Modes",
  Quizzes = "Quizzes",
}

const IonianArray = ["1", "2", "3", "4", "5", "6", "7"];
const DorianArray = ["1", "2", "b3", "4", "5", "6", "b7"];
const PhrygianArray = ["1", "b2", "b3", "4", "5", "b6", "b7"];
const LydianArray = ["1", "2", "3", "#4", "5", "6", "7"];
const MixolydianArray = ["1", "2", "3", "4", "5", "6", "b7"];
const AeolianArray = ["1", "2", "b3", "4", "5", "b6", "b7"];
const LocrianArray = ["1", "b2", "b3", "4", "b5", "b6", "b7"];

const modesList = {
  Ionian: IonianArray,
  Dorian: DorianArray,
  Phygrian: PhrygianArray,
  Lydian: LydianArray,
  Mixolydian: MixolydianArray,
  Aeolian: AeolianArray,
  Locrian: LocrianArray,
};

const ModesTable = () => {
  const modeNameColumnWidth = "25%";
  const amountOfIntervals = 7;
  const intervalColumnWidth = `${75 / amountOfIntervals}%`;
  const cellStyles = "border border-primary-content px-4 py-2";

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg bg-base-300 p-4 w-full">
      <h4 className="text-2xl pb-4">Primary Modes</h4>
      <table className="w-full bg-secondary text-secondary-content text-sm">
        <thead>
          <tr className="bg-primary text-primary-content text-center">
            <th
              key="Mode"
              className={cellStyles}
              style={{ width: modeNameColumnWidth }}
            >
              Mode
            </th>
            {[...Array(amountOfIntervals)].map((_, index) => (
              <th
                key={index}
                className={cellStyles}
                style={{ width: intervalColumnWidth }}
              >
                {index + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(modesList).map(([modeName, modeArray]) => (
            <tr className="text-center" key={modeName}>
              <td
                key={`${modeName}-name`}
                className={cellStyles}
                style={{ width: modeNameColumnWidth }}
              >
                {modeName}
              </td>
              {modeArray?.map((note, noteIndex) => (
                <td
                  key={`${modeName}-${noteIndex}`}
                  className={cellStyles}
                  style={{ width: intervalColumnWidth }}
                >
                  {note}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Modes = () => {
  return (
    <div className="primary min-h-screen mt-16 ml-4">
      <ul className="flex">
        <li className="mr-4" key={siteLink.Home}>
          <Link href={"/"} className="link hover:text-primary">
            {siteLink.Home}
          </Link>
        </li>
        <li className="mr-4" key={siteLink.Circles}>
          <Link
            href={`/${siteLink.Circles.toLowerCase()}`}
            className="link hover:text-secondary"
          >
            {siteLink.Circles}
          </Link>
        </li>
        <li className="mr-4" key={siteLink.Quizzes}>
          <Link
            href={`/${siteLink.Quizzes.toLowerCase()}`}
            className="link hover:text-accent"
          >
            {siteLink.Quizzes}
          </Link>
        </li>
      </ul>
      <h1 className="text-4xl font-semibold mt-8 mb-8">Modes</h1>
      <div className="hero flex flex-col">
        <div className="hero-content flex-col">
          <h2 className="text-5xl mb-8">Overview</h2>
          <p className="mb-4">
            Modes in music refer to different scales or tonal systems that serve
            as the foundation for melodies and harmonies. Each mode is
            characterized by a specific arrangement of intervals between the
            notes, which creates a distinct mood or atmosphere. The most common
            modes in Western music are the Ionian mode (major scale) and the
            Aeolian mode (natural minor scale). However, there are several other
            modes, each with its unique sound and character. For example, the
            Dorian mode is often associated with a melancholic or bluesy
            quality, while the Mixolydian mode has a bright and energetic feel.
            Modes have been used throughout history in various musical
            traditions and genres, from classical and jazz to folk and world
            music, offering composers and musicians a rich palette of tonal
            colors to explore and express diverse emotions and musical ideas.
          </p>
        </div>
        <ModesTable />
      </div>
    </div>
  );
};

export default Modes;
