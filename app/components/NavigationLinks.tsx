import React from 'react'; 
import Link from "next/link";

enum LinkType {
  Circles = "circles",
  Modes = "modes",
  Quiz = "quiz",
}

enum LinkName {
  Home = "Home",
  Circles = "Circles",
  Modes = "Modes",
  Quiz = "Quiz",
}

interface NavigationLinksProps {
  linkType?: LinkType | string;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({ linkType }) => {
  let linkNames: string[] = [];

  switch (linkType) {
    case LinkType.Circles:
      linkNames = [LinkName.Home, LinkName.Modes, LinkName.Quiz];
      break;
    case LinkType.Modes:
      linkNames = [LinkName.Home, LinkName.Circles, LinkName.Quiz];
      break;
    case LinkType.Quiz:
      linkNames = [LinkName.Home, LinkName.Circles, LinkName.Modes];
      break;
    default:
      linkNames = [LinkName.Circles, LinkName.Modes, LinkName.Quiz];
  }

  const renderLink = (linkName: string, index: number): JSX.Element => {
    const isHomePage = linkName === LinkName.Home;
    const linkPath = isHomePage ? "/" : `/${linkName.toLowerCase()}`;
    const hoverColors = ["hover:text-primary", "hover:text-secondary", "hover:text-accent"];
    const hoverColor = hoverColors[index % hoverColors.length];
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
