import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import NavigationLinks from "./NavigationLinks";
import { siteLinks } from "../../utils/enums";

describe("NavigationLinks component", () => {
  Object.values(siteLinks).forEach((link: siteLinks) => {
    it(`renders links correctly with linkType=${link}`, () => {
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

  test("renders links with correct hover colors", () => {
    render(<NavigationLinks />);

    const links = screen.getAllByRole("link");
    const hoverColors = [
      "hover:text-primary",
      "hover:text-secondary",
      "hover:text-accent",
    ];
    
    expect(links[0]).toHaveClass(hoverColors[0]);
    expect(links[1]).toHaveClass(hoverColors[1]);
    expect(links[2]).toHaveClass(hoverColors[2]);
  });
});
