import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ThemeButtons from "./ThemeButtons";
import { ThemeContext } from "../../context/ThemeContext";

describe("ThemeButtons component", () => {
  test("renders buttons with correct themes", () => {
    // Mock the changeTheme function
    const changeTheme = jest.fn();

    // Render the ThemeButtons component with a mocked ThemeContext
    const { getByText } = render(
      <ThemeContext.Provider value={{ changeTheme }}>
        <ThemeButtons toggleCanvas={() => {}} />
      </ThemeContext.Provider>
    );

    // Verify that each button is rendered with the correct theme name
    expect(getByText("Light")).toBeDefined();
    expect(getByText("Dark")).toBeDefined();
    expect(getByText("Winter")).toBeDefined();
    expect(getByText("Valentine")).toBeDefined();
    expect(getByText("Retro")).toBeDefined();
    expect(getByText("Aqua")).toBeDefined();
  });

  test("calls changeTheme with correct theme when button is clicked", () => {
    // Mock the changeTheme function
    const changeTheme = jest.fn();

    // Render the ThemeButtons component with a mocked ThemeContext
    const { getByText } = render(
      <ThemeContext.Provider value={{ changeTheme }}>
        <ThemeButtons toggleCanvas={() => {}} />
      </ThemeContext.Provider>
    );

    // Click a button
    fireEvent.click(getByText("Dark"));

    // Verify that changeTheme was called with the correct theme
    expect(changeTheme).toHaveBeenCalledWith("dark");
  });
});
