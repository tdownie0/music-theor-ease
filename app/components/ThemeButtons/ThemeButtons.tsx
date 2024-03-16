"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { themeName } from "../../utils/enums";

const ThemeButtons = ({ toggleCanvas }) => {
  const { changeTheme } = useContext(ThemeContext);

  const handleButtonClick = (theme) => {
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
          <button
            key={themeName.Light}
            className="btn"
            onClick={() => handleButtonClick(themeName.Light.toLowerCase())}
          >
            {themeName.Light}
          </button>
          <button
            key={themeName.Dark}
            className="btn bg-gray-900 text-white"
            onClick={() => handleButtonClick(themeName.Dark.toLowerCase())}
          >
            {themeName.Dark}
          </button>
          <button
            key={themeName.Valentine}
            className="btn btn-secondary"
            onClick={() => handleButtonClick(themeName.Valentine.toLowerCase())}
          >
            {themeName.Valentine}
          </button>
          <button
            key={themeName.Retro}
            className="btn btn-accent"
            onClick={() => handleButtonClick(themeName.Retro.toLowerCase())}
          >
            {themeName.Retro}
          </button>
          <button
            key={themeName.Winter}
            className="btn btn-primary"
            onClick={() => handleButtonClick(themeName.Winter.toLowerCase())}
          >
            {themeName.Winter}
          </button>
          <button
            key={themeName.Aqua}
            className="btn btn-neutral"
            onClick={() => handleButtonClick(themeName.Aqua.toLowerCase())}
          >
            {themeName.Aqua}
          </button>
        </div>
      </ul>
    </div>
  );
};

export default ThemeButtons;
