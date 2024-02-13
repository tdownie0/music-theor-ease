import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ThemeButtons from "./ThemeButtons";
import { ThemeContext } from "../../context/ThemeContext";
import { themeName } from "@/app/utils/enums";

describe("ThemeButtons component", () => {
  test("renders buttons with correct themes", () => {
    const { getByText } = render(<ThemeButtons toggleCanvas={() => {}} />);
    Object.values(themeName).forEach((name) =>
      expect(getByText(name)).toBeDefined()
    );
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

    fireEvent.click(getByText(themeName.Dark));

    expect(changeTheme).toHaveBeenCalledWith("dark");
  });
});
