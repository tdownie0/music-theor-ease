"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface ThemeButtonsProps {
  toggleCanvas: () => void;
}

const ThemeButtons: React.FC<ThemeButtonsProps> = ({ toggleCanvas }) => {
  const { changeTheme } = useContext(ThemeContext);

  const themes = [
    { name: "Light", className: "btn" },
    { name: "Dark", className: "btn bg-gray-900 text-white" },
    { name: "Winter", className: "btn btn-primary" },
    { name: "Valentine", className: "btn btn-secondary" },
    { name: "Retro", className: "btn btn-accent" },
    { name: "Aqua", className: "btn btn-neutral" },
  ];

  const handleButtonClick = function themeButtonClicked(theme: string) {
    toggleCanvas();
    changeTheme(theme);
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
