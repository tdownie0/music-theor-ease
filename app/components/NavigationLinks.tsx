import React from 'react'; 
import Link from "next/link";
import { siteLinks } from "../utils/enums";

interface NavigationLinksProps {
  linkType?: siteLinks;
}

const linkNames: Record<siteLinks, siteLinks[]> = {
  [siteLinks.Home]: [siteLinks.Circles, siteLinks.Modes, siteLinks.Quiz],
  [siteLinks.Circles]: [siteLinks.Home, siteLinks.Modes, siteLinks.Quiz],
  [siteLinks.Modes]: [siteLinks.Home, siteLinks.Circles, siteLinks.Quiz],
  [siteLinks.Quiz]: [siteLinks.Home, siteLinks.Circles, siteLinks.Modes],
};

const NavigationLinks: React.FC<NavigationLinksProps> = ({ linkType }) => {
  const linksToRender = linkType ? linkNames[linkType] : linkNames[siteLinks.Home];

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
      {linksToRender.map((linkName, index) => renderLink(linkName, index))}
    </ul>
  );
};

export default NavigationLinks;
