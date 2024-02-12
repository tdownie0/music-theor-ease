import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Circles from "./page";

test("renders Circles page", () => {
  if (typeof document !== "undefined") {
    render(<Circles />);

    expect(screen.getByText("Circles")).toBeInTheDocument();
    expect(screen.getByText("Circle of Fifths")).toBeInTheDocument();
    expect(screen.getByText("Circle of Fourths")).toBeInTheDocument();
  }
});
