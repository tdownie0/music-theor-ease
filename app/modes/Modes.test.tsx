import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Modes from "./page";

test("renders Modes page", async () => {
  render(<Modes />);

  expect(screen.getByText("Modes")).toBeInTheDocument();
  expect(screen.getByText("Dorian")).toBeInTheDocument();
  expect(screen.getByText("Locrian")).toBeInTheDocument();
});
