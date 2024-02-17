import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ThemeButtons from "./ThemeButtons";
import { ThemeContext } from "../../context/ThemeContext";
import { themeName } from "@/app/utils/enums";

describe("ThemeButtons component", () => {
  test("renders buttons with correct themes", () => {
    render(<ThemeButtons toggleCanvas={() => {}} />);
    Object.values(themeName).forEach((name) =>
      expect(screen.getByText(name)).toBeInTheDocument()
    );
  });

  test("calls changeTheme with correct theme when button is clicked", () => {
    // Mock the changeTheme function
    const changeTheme = jest.fn();

    // Render the ThemeButtons component with a mocked ThemeContext
    render(
      <ThemeContext.Provider value={{ changeTheme }}>
        <ThemeButtons toggleCanvas={() => {}} />
      </ThemeContext.Provider>
    );

    fireEvent.click(screen.getByText(themeName.Dark));

    expect(changeTheme).toHaveBeenCalledWith("dark");
  });
});
