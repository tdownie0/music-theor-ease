"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { themeName } from "../../utils/enums";

type ThemeButtonsProps = {
  toggleCanvas: () => void;
}

type Theme = {
  name: themeName;
  className: string;
}

const ThemeButtons: React.FC<ThemeButtonsProps> = ({ toggleCanvas }) => {
  const { changeTheme } = useContext(ThemeContext);

  const themes: Theme[] = [
    { name: themeName.Light, className: "btn" },
    { name: themeName.Dark, className: "btn bg-gray-900 text-white" },
    { name: themeName.Winter, className: "btn btn-primary" },
    { name: themeName.Valentine, className: "btn btn-secondary" },
    { name: themeName.Retro, className: "btn btn-accent" },
    { name: themeName.Aqua, className: "btn btn-neutral" },
  ];

  const handleButtonClick = function themeButtonClicked(theme: string) {
    if (changeTheme) {
      toggleCanvas();
      changeTheme(theme);
    } else {
      console.error("ThemeContext not available");
    }
  };

  return (
    <div>
      <ul className="flex justify-between pt-5 items-center">
        <div className="flex gap-5 ml-auto z-10">
          {themes.map((theme, index) => (
            <button
              key={index}
              className={theme.className}
              onClick={() => handleButtonClick(theme.name.toLowerCase())}
            >
              {theme.name}
            </button>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ThemeButtons;
