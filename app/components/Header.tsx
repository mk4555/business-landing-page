import React from "react";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="w-full absolute top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md">
      <Navbar />
    </header>
  );
};

export default Header;
