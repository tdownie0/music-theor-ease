import Link from "next/link";

export default function Home() {
  return (
    <main className="primary min-h-screen mt-16 ml-4">
      <ul className="flex">
        <li className="mr-4">
          <Link href="/circles" className="link hover:text-primary">
            Circles
          </Link>
        </li>
        <li>
          <Link href="/modes" className="link hover:text-accent">
            Modes
          </Link>
        </li>
      </ul>
      <h1 className="text-4xl font-bold mt-8">Music Theor-ease</h1>

      <div className="mt-8 text-lg">
        Introduction to the pillars of music concepts
      </div>
    </main>
  );
}
