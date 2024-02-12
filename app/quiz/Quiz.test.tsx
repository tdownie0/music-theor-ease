import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Quiz from "./page";

test("renders Modes page", async () => {
  render(<Quiz />);

  expect(screen.getByText("Home")).toBeInTheDocument();
});
