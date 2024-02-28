import React from "react";
import { render, screen } from "@testing-library/react";

import Quizzes from "./page";

test("renders Modes page", () => {
  render(<Quizzes />);

  expect(screen.getByText("Home")).toBeInTheDocument();
});
