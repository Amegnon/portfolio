import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-[#1e293b] text-white sticky top-0 z-50 shadow-md">
      <div className="text-xl font-bold text-[#0ea5e9]">SOGAM</div>
      <ul className="flex space-x-6">
        <li><a href="#hero" className="hover:text-[#14b8a6] transition">Home</a></li>
        <li><a href="#about" className="hover:text-[#14b8a6] transition">About</a></li>
        <li><a href="#projects" className="hover:text-[#14b8a6] transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-[#14b8a6] transition">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
