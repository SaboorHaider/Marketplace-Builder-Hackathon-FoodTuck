"use client"
import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex flex-col items-center p-4 bg-black">
      <div className="flex items-center justify-between w-full">
        <span className="text-[#FF9F0D] font-bold text-[24px] flex-grow text-center">
          Food<span className="text-white">tuck</span>
        </span>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row items-center justify-around w-full p-2 transition-all duration-300 ease-in-out">
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:text-[#FF9F0D] text-white hover:underline transform transition duration-100 hover:scale-105 cursor-pointer">
            Home
          </Link>
          <Link href="/ourmenu" className="hover:text-[#FF9F0D] text-white transform transition duration-100 hover:scale-105 cursor-pointer">
            Menu
          </Link>
          <Link href="/blog" className="hover:text-[#FF9F0D] text-white transform transition duration-100 hover:scale-105 cursor-pointer">
            Blog
          </Link>
          <Link href="/aboutus" className="hover:text-[#FF9F0D] text-white transform transition duration-100 hover:scale-105 cursor-pointer">
            About
          </Link>
          <Link href="/shop" className="hover:text-[#FF9F0D] text-white transform transition duration-100 hover:scale-105 cursor-pointer">
            Shop
          </Link>
          <Link href="/faq" className="hover:text-[#FF9F0D] text-white transform transition duration-100 hover:scale-105 cursor-pointer">
            FAQ
          </Link>
        </div>

        <div className="flex items-center mt-4 md:mt-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-full bg-black border border-[#FF9F0D] text-white focus:outline-none"
            />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
          <Link href="/shoppingcart">
            <FaShoppingBag className="ml-4 text-white hover:text-[#FF9F0D]" />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden w-full text-center mt-3 grid grid-cols-3 transition-all duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"} z-50`}
      >
        <Link href="/" className="block text-white py-2 hover:text-[#FF9F0D]" onClick={toggleMenu}>Home</Link>
        <Link href="/ourmenu" className="block text-white py-2 hover:text-[#FF9F0D]" onClick={toggleMenu}>Menu</Link>
        <Link href="/aboutus" className="block text-white py-2 hover:text-[#FF9F0D]" onClick={toggleMenu}>About</Link>
        <Link href="/shop" className="block text-white py-2 hover:text-[#FF9F0D]" onClick={toggleMenu}>Shop</Link>
        <Link href="/blog" className="block text-white py-2 hover:text-[#FF9F0D]" onClick={toggleMenu}>Blog</Link>
        <Link href="/faq" className="block text-white py-2 hover:text-[#FF9F0D]" onClick={toggleMenu}>FAQ</Link>
      </div>
    </nav>
  );
};

export default Navbar;
