import React from "react";
import { render, screen } from "@testing-library/react";

import Modes from "./page";

test("renders Modes page", () => {
  render(<Modes />);

  expect(screen.getByText("Modes")).toBeInTheDocument();
  expect(screen.getByText("Dorian")).toBeInTheDocument();
  expect(screen.getByText("Locrian")).toBeInTheDocument();
});
