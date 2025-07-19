import Link from "next/link";

const Navbar: React.FC = ({}) => {
  return (
    <nav className="container mx-auto flex max-w-6xl items-center justify-between py-5 text-2xl text-gray-800">
      <div className="flex items-center gap-x-8">
        <Link href="/" className="font-semibold transition hover:text-blue-300">
          HOME
        </Link>
        <Link
          href="/about"
          className="font-semibold transition hover:text-blue-300"
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className="font-semibold transition hover:text-blue-300"
        >
          CONTACT
        </Link>
      </div>
      <Link
        href="/blog"
        className="font-semibold transition hover:text-blue-300"
      >
        LOGIN
      </Link>
    </nav>
  );
};

export default Navbar;
