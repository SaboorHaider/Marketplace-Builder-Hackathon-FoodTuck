"use client";
import { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = ["Home", "Menu", "About Us", "Shop", "Our Chef"];

  return (
    <header className="bg-black text-white">
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        {/* Logo */}
        <div className="font-bold text-xl">
          <Link href="/">
            <span className="text-white">Food</span>
            <span className="text-[#FF9F0D]">tuck</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "")}`} // Converts "Home" to "/home"
              className="hover:text-[#FF9F0D] hover:underline transform transition duration-200 ease-in-out hover:scale-105 cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Icons & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-full bg-black border border-[#FF9F0D] text-white focus:outline-none transition duration-200 ease-in-out focus:ring-2 focus:ring-[#FF9F0D]"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer" />
          </div>
          <Link href="/shoppingcart">
            <FaShoppingCart className="cursor-pointer hover:text-[#FF9F0D] transition duration-200 ease-in-out" />
          </Link>
          <Link href="/user">
            <FaUser className="cursor-pointer hover:text-[#FF9F0D] transition duration-200 ease-in-out" />
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none transition duration-200 ease-in-out"
          >
            {isOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black py-4 grid grid-cols-3 gap-4 place-items-center transition-all duration-300 ease-in-out transform ${isOpen ? "scale-y-100" : "scale-y-0 overflow-hidden"}`}
      >
        {navItems.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
            className="text-white hover:text-[#FF9F0D] transition duration-200 ease-in-out"
            onClick={closeMenu}
          >
            {item}
          </Link>
        ))}
        <Link
          href="/faq"
          className="text-white hover:text-[#FF9F0D] transition duration-200 ease-in-out"
          onClick={closeMenu}
        >
          FAQ
        </Link>
      </div>
    </header>
  );
};

export default Header;
