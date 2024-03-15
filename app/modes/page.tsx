import React from "react";
import ModesTable from "../components/ModesTable/ModesTable";
import NavigationLinks from "../components/NavigationLinks/NavigationLinks";
import { siteLink } from "../utils/enums";

const Modes = () => {
  return (
    <div className="primary min-h-screen mt-16 ml-4">
      <NavigationLinks linkType={siteLink.Modes} />
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
