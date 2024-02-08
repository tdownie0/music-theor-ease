import Link from "next/link";

const renderLink = (linkName: string): JSX.Element => (
  <li className="mr-4" key={linkName}>
    <Link
      href={"/" + linkName.toLowerCase()}
      className="link hover:text-primary"
    >
      {linkName}
    </Link>
  </li>
);

const Home: React.FC = () => {
  const linkNames: string[] = ["Circles", "Modes", "Quiz"];

  return (
    <div className="primary min-h-screen mt-16 ml-4">
      <ul className="flex">
        {linkNames.map(function renderLinks(linkName) {
          return renderLink(linkName)
        })}
      </ul>
      <h1 className="text-4xl font-bold mt-8">Music Theor-ease</h1>
      <div className="mt-8 text-lg">Introduction to the pillars of music concepts</div>
    </div>
  );
};

export default Home;
