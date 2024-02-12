import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import CircleOfNotes from "./CircleOfNotes";

describe("CircleOfNotes component", () => {
  test('renders correctly with circleType', async () => {
    const { container } = render(<CircleOfNotes />);
    const svg = container.querySelector("svg");

    await waitFor(() => {
      const textElements = svg?.querySelectorAll("text");
      expect(textElements?.length).toBe(12);

      if (textElements) {
        const firstTextValue = textElements[0]?.textContent;
        expect(firstTextValue).toBe("C");
      }
    });
  });

  test('renders correctly with circleType="fourths"', async () => {
    const { container } = render(<CircleOfNotes circleType="fourths" />);
    const svg = container.querySelector("svg");

    await waitFor(() => {
      const textElements = svg?.querySelectorAll("text");
      expect(textElements?.length).toBe(12);

      if (textElements) {
        const firstTextValue = textElements[0]?.textContent;
        expect(firstTextValue).toBe("F");
      }
    });
  });
});
