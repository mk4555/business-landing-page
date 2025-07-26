import React from "react";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 z-10 w-full bg-white shadow-sm px-2 border-b-2">
      <Navbar />
    </header>
  );
};

export default Header;
