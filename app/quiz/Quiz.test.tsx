import React from "react";
import { render, screen } from "@testing-library/react";

import Quiz from "./page";

test("renders Modes page", () => {
  render(<Quiz />);

  expect(screen.getByText("Home")).toBeInTheDocument();
});
