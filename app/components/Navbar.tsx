"use client";
import React, { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
const Navlinks = () => {
  return (
    <>
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
      <Link
        href="/blog"
        className="font-semibold transition hover:text-blue-300"
      >
        LOGIN
      </Link>
    </>
  );
};

const Navbar: React.FC = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container mx-auto max-w-6xl py-5 text-1.5xl text-gray-800">
      <div className="hidden md:flex items-center gap-x-8">
        <Navlinks />
      </div>
      <div className="md:hidden ">
        {!isOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}

        {isOpen && (
          <div className="flex flex-col items-center justify-between gap-x-8">
            <Navlinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
