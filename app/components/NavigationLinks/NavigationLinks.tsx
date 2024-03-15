import React from "react";
import Link from "next/link";
import { siteLink } from "../../utils/enums";

const siteLinksArray = [
  siteLink.Home,
  siteLink.Circles,
  siteLink.Modes,
  siteLink.Quizzes,
];

const linkNames = {};

siteLinksArray.forEach(function populateLinkName(link) {
  linkNames[link] = siteLinksArray.filter((otherLink) => otherLink !== link);
});

const hoverColors = [
  "hover:text-primary",
  "hover:text-secondary",
  "hover:text-accent",
];

const NavigationLinks = ({ linkType }) => {
  const linksToRender = linkType
    ? linkNames[linkType]
    : linkNames[siteLink.Home];

  const renderLink = (linkName, index) => {
    const isHomePage = linkName === siteLink.Home;
    const linkPath = isHomePage ? "/" : `/${linkName.toLowerCase()}`;
    const linkClassName = `link ${hoverColors[index]}`;

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
