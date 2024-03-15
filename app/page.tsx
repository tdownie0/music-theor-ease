import React from "react";
import NavigationLinks from "./components/NavigationLinks/NavigationLinks";

const Home = () => {
  return (
    <div className="primary min-h-screen mt-16 ml-4">
      <NavigationLinks />
      <h1 className="text-4xl font-bold mt-8">Music Theor-ease</h1>
      <div className="mt-8 text-lg">
        Introduction to the pillars of music concepts
      </div>
    </div>
  );
};

export default Home;
