import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import NavigationLinks from "./NavigationLinks";
import { siteLinks } from "../../utils/enums";

describe("NavigationLinks component", () => {
  test("renders links correctly with different linkTypes", () => {
    Object.values(siteLinks).forEach((link: siteLinks) => {
      render(<NavigationLinks linkType={link} />);

      Object.values(siteLinks).forEach((otherLink) => {
        if (otherLink !== link) {
          expect(screen.getByText(otherLink)).toBeInTheDocument();
        }
      });

      const links = screen.getAllByRole("link");
      expect(links).toHaveLength(3);
      cleanup();
    });
  });

  test("renders links with correct paths and hover colors", () => {
    render(<NavigationLinks />);

    const circlesLink = screen.getByText("Circles");
    expect(circlesLink).toHaveAttribute("href", "/circles");
    expect(circlesLink).toHaveClass("hover:text-primary");

    const modesLink = screen.getByText("Modes");
    expect(modesLink).toHaveAttribute("href", "/modes");
    expect(modesLink).toHaveClass("hover:text-secondary");
  });
});
