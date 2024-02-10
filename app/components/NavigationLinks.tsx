import React from 'react'; 
import Link from "next/link";
import { siteLinks } from "../utils/enums";

interface NavigationLinksProps {
  linkType?: siteLinks;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ linkType }) => {
  let linkNames: siteLinks[] = [];

  switch (linkType) {
    case siteLinks.Circles:
      linkNames = [siteLinks.Home, siteLinks.Modes, siteLinks.Quiz];
      break;
    case siteLinks.Modes:
      linkNames = [siteLinks.Home, siteLinks.Circles, siteLinks.Quiz];
      break;
    case siteLinks.Quiz:
      linkNames = [siteLinks.Home, siteLinks.Circles, siteLinks.Modes];
      break;
    default:
      linkNames = [siteLinks.Circles, siteLinks.Modes, siteLinks.Quiz];
  }

  const renderLink = (linkName: siteLinks, index: number): JSX.Element => {
    const isHomePage = linkName === siteLinks.Home;
    const linkPath = isHomePage ? "/" : `/${linkName.toLowerCase()}`;
    const hoverColors = ["hover:text-primary", "hover:text-secondary", "hover:text-accent"];
    const hoverColor = hoverColors[index];
    const linkClassName = `link ${hoverColor}`;

    return (
      <li className="mr-4" key={linkName}>
        <Link href={linkPath} className={linkClassName}>
          {linkName}
        </Link>
      </li>
    );
  };

  return (
    <ul className="flex">
      {linkNames.map((linkName, index) => renderLink(linkName, index))}
    </ul>
  );
};

export default NavigationLinks;
