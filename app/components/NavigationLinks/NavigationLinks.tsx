import React from "react";
import Link from "next/link";
import { siteLink } from "../../utils/enums";

type NavigationLinksProps = {
  linkType?: siteLink;
};

const siteLinksArray = [
  siteLink.Home,
  siteLink.Circles,
  siteLink.Modes,
  siteLink.Quizzes,
];

const linkNames: Record<siteLink, siteLink[]> = {} as Record<
  siteLink,
  siteLink[]
>;

siteLinksArray.forEach(function populateLinkName(link): void {
  linkNames[link] = siteLinksArray.filter((otherLink) => otherLink !== link);
});

const hoverColors: string[] = [
  "hover:text-primary",
  "hover:text-secondary",
  "hover:text-accent",
];

const NavigationLinks: React.FC<NavigationLinksProps> = ({ linkType }) => {
  const linksToRender = linkType
    ? linkNames[linkType]
    : linkNames[siteLink.Home];

  const renderLink = (linkName: siteLink, index: number): React.JSX.Element => {
    const isHomePage: boolean = linkName === siteLink.Home;
    const linkPath: string = isHomePage ? "/" : `/${linkName.toLowerCase()}`;
    const linkClassName: string = `link ${hoverColors[index]}`;

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
