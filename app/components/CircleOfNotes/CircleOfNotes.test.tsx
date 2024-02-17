import React from "react";
import { render, waitFor, screen } from "@testing-library/react";

import CircleOfNotes from "./CircleOfNotes";

describe("CircleOfNotes component", () => {
  test("renders correctly with default", async () => {
    render(<CircleOfNotes />);
    let textElements: HTMLElement[] = [];
    await waitFor(() => {
      textElements = screen.getAllByRole("text");
    });

    expect(textElements).toHaveLength(12);
    const firstTextValue = textElements[0].textContent;
    expect(firstTextValue).toBe("C");
  });

  test("renders correctly with circleType='fourths'", async () => {
    render(<CircleOfNotes circleType="fourths" />);
    let textElements: HTMLElement[] = [];
    await waitFor(() => {
      textElements = screen.getAllByRole("text");
    });

    expect(textElements).toHaveLength(12);
    const firstTextValue = textElements[0].textContent;
    expect(firstTextValue).toBe("F");
  });
});
