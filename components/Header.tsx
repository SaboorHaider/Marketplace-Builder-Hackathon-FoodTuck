import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const Header = () => {
  return (
    <div>
      <header className="bg-black text-white">
        <div className="flex justify-between items-center px-6 py-4 md:px-10">
          <div className="font-bold text-xl">
            <Link href="/">
              <span className=" text-white">Food</span>
              <span className="text-[#FF9F0D]">tuck</span>
            </Link>
          </div>

          {/* Navigation */}

          <nav className="hidden md:flex space-x-5">

            <Link
              href="/"
              className="hover:text-[#FF9F0D] hover:underline text-white transform transition duration-100 hover:scale-105 cursor-pointer "
            >
              Home
            </Link>

            <Link
              href="/Menu"
              className="hover:text-[#FF9F0D] hover:underline text-white transform transition duration-100 hover:scale-105 cursor-pointer "
            >
              Menu
            </Link>

            
            <Link
              href="/Blog"
              className="hover:text-[#FF9F0D] hover:underline text-white transform transition duration-100 hover:scale-105 cursor-pointer "
            >
              Blog
            </Link>

            <div className="text-white">
              <Accordion
                type="single"
                collapsible
                className="w-full border-none"
              >
                <AccordionItem value="items">
                  <AccordionTrigger className="hover:text-[#FF9F0D] hover:underline text-white transform transition duration-100 hover:scale-105 cursor-pointer ">
                    Page
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      <li className="">
                        <Link
                          href="/ChefGallery"
                          className="hover:text-yellow-500  text-white transform transition cursor-pointer"
                        >
                          Chef Gallery
                        </Link>
                      </li>
         
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <Link
              href="/About"
              className="hover:text-[#FF9F0D] hover:underline text-white transform transition duration-100 hover:scale-105 cursor-pointer "
            >
              About
            </Link>
            <Link
              href="/Shop"
              className="hover:text-[#FF9F0D] hover:underline text-white transform transition duration-100 hover:scale-105 cursor-pointer "
            >
              Shop
            </Link>
            <Link
              href="/Contact"
              className="hover:text-[#FF9F0D] hover:underline text-white transform transition duration-100 hover:scale-105 cursor-pointer "
            >
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
           <Link href='Erroe404'>
           <FaSearch className="cursor-pointer hover:text-yellow-500" />
           </Link>
            <Link href='/Contact'><FaUser className="cursor-pointer hover:text-yellow-500" /></Link>
            <Link href='AddCart'><FaShoppingCart className="cursor-pointer hover:text-yellow-500" /></Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav className="flex md:hidden flex-wrap justify-center space-x-4 py-4 text-sm">


          <Link href="/" className="hover:text-yellow-500 text-white">
            Home
          </Link>
          
          <Link href="/Menu" className="hover:text-yellow-500 text-white">
            Menu
          </Link>
          <Link href="/Blog" className="hover:text-yellow-500 text-white">
            Blog
          </Link>
          <Link href="/About" className="hover:text-yellow-500 text-white">
            About
          </Link>
          <Link href="/Shop" className="hover:text-yellow-500 text-white">
            Shop
          </Link>
          <Link href="/Contact" className="hover:text-yellow-500 text-white">
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
