"use client";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface NavbarProps {
  toggleCanvas: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleCanvas }) => {
  const { changeTheme } = useContext(ThemeContext);

  const handleButtonClick = function themeButtonClicked(theme: string) {
    toggleCanvas();
    changeTheme(theme);
  };

  return (
    <div>
      <ul className="flex justify-between pt-5 items-center">
        <div className="flex gap-5 ml-auto z-10">
          <button className="btn" onClick={() => handleButtonClick("light")}>
            Light
          </button>
          <button
            className="btn bg-gray-900 text-white"
            onClick={() => handleButtonClick("dark")}
          >
            Dark
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleButtonClick("winter")}
          >
            Winter
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleButtonClick("valentine")}
          >
            Valentine
          </button>
          <button
            className="btn btn-accent"
            onClick={() => handleButtonClick("retro")}
          >
            Retro
          </button>
          <button
            className="btn btn-neutral"
            onClick={() => handleButtonClick("aqua")}
          >
            Aqua 
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
