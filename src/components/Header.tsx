import { useState } from "react";
import { FaSearch, FaUser, FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Menu", path: "/ourmenu" },
    { name: "About Us", path: "/aboutus" },
    { name: "Shop", path: "/shop" },
    { name: "Our Chef", path: "/ourchef" },
  ];

  return (
    <header className="bg-black text-white">
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        <div className="font-bold text-xl">
          <Link href="/" className="text-white">
            Food<span className="text-[#FF9F0D]">tuck</span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="hover:text-[#FF9F0D] hover:underline transition duration-200 hover:scale-105"
            >
              {item.name}
            </Link>
          ))}
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
        <Link href="/ourmenu">
            <FaUser className="cursor-pointer hover:text-[#FF9F0D]" />
          </Link>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black py-4 grid grid-cols-1 gap-4 text-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-white hover:text-[#FF9F0D] transition duration-200"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/faq"
            className="text-white hover:text-[#FF9F0D] transition duration-200"
            onClick={closeMenu}
          >
            FAQ
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
