import Link from "next/link";

const Navbar: React.FC = ({}) => {
  return (
    <nav className="flex flex-row ">
      <div className="flex justify-start w-2/3 ">
        <Link
          href="/"
          className="text-3xl basis-32 font-semibold text-gray-800 hover:text-blue-600 transition"
        >
          HOME
        </Link>
        <Link
          href="/about"
          className="text-3xl basis-32 font-semibold text-gray-800 hover:text-blue-600 transition"
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className="text-3xl basis-32 font-semibold text-gray-800 hover:text-blue-600 transition"
        >
          CONTACT
        </Link>
      </div>
      <div className="flex justify-end ml-auto w-1/3">
        <Link
          href="/blog"
          className="text-3xl basis-32 font-semibold text-gray-800 hover:text-blue-600 transition"
        >
          LOGIN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
