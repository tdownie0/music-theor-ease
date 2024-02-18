import React from "react";
import { render, screen } from "@testing-library/react";

import Circles from "./page";

test("renders Circles page", () => {
  render(<Circles />);

  expect(screen.getByText("Circles")).toBeInTheDocument();
  expect(screen.getByText("Circle of Fifths")).toBeInTheDocument();
  expect(screen.getByText("Circle of Fourths")).toBeInTheDocument();
});
