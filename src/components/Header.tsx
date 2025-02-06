"use client";
import { useState } from "react";
import { FaSearch, FaUser, FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white">
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        <div className="font-bold text-xl">
          <Link href="/" className="text-white">
            Food<span className="text-[#FF9F0D]">tuck</span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-5">
          <Link href="/" className="hover:text-[#FF9F0D] hover:underline transition duration-200 hover:scale-105">
            Home
          </Link>
          <Link href="/ourmenu" className="hover:text-[#FF9F0D] hover:underline transition duration-200 hover:scale-105">
            Our Menu
          </Link>
          <Link href="/aboutus" className="hover:text-[#FF9F0D] hover:underline transition duration-200 hover:scale-105">
            About Us
          </Link>
          <Link href="/shop" className="hover:text-[#FF9F0D] hover:underline transition duration-200 hover:scale-105">
            Shop
          </Link>
          <Link href="/ourchef" className="hover:text-[#FF9F0D] hover:underline transition duration-200 hover:scale-105">
            Our Chef
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-full bg-black border border-[#FF9F0D] text-white focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" />
          </div>
          <Link href="/shoppingcart">
            <FaShoppingCart className="cursor-pointer hover:text-[#FF9F0D]" />
          </Link>
          <Link href="/user">
            <FaUser className="cursor-pointer hover:text-[#FF9F0D]" />
          </Link>
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black py-4 grid grid-cols-1 gap-4 text-center"
          >
            {[
              { href: "/", label: "Home" },
              { href: "/ourmenu", label: "Our Menu" },
              { href: "/aboutus", label: "About Us" },
              { href: "/shop", label: "Shop" },
              { href: "/ourchef", label: "Our Chef" },
              { href: "/faq", label: "Faq" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#FF9F0D] transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
