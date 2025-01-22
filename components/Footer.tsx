import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";  


const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-5 py-8">
        <div className="text-center mb-8 grid lg:grid-cols-2 border-b-2 lg:p-10 border-[#FF9F0D] pb-10 ">
          <div className=" text-left">
            <h2 className="text-2xl font-bold text-white">
              <span className="text-[#FF9F0D]">St</span>ill You Need Our
              Support?
            </h2>
            <p className="text-gray-400">
              Don`t wait, make a smart & logical quote here. It`s pretty easy.
            </p>
          </div>


          <div className="mt-4 flex justify-center text-white">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-6 py-2 rounded-l-sm bg-[#FF9F1D] text-white "
            />
            <button className="bg-white text-black px-2 py-2 rounded-r-md text-sm transform transition duration-100 hover:scale-105 hover:bg-transparent hover:border-2 hover:text-white border-white   ">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* AboutSection */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us.</h3>
            <p className="text-gray-400 mb-4">
              Corporate clients and leisure travelers rely on us for dependable,
              safe, and professional chauffeured car service in major cities
              worldwide.
            </p>
            <div className="flex items-center">
              <div className="bg-[#FF9F0D] p-[18px] ">
                <MdOutlineWatchLater className="text-white text-xl" />
              </div>

              <div className="ml-4">
                <p className="text-white">Opening Hours</p>
                <p className="text-white">Mon - Sat: 8:00 - 6:00</p>
                <p className="text-white">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">News</li>
              <li className="cursor-pointer">Partners</li>
              <li className="cursor-pointer">Team</li>
              <li className="cursor-pointer">Menu</li>
              <li className="cursor-pointer">Contacts</li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Help?</h3>
            <ul className="text-gray-500 space-y-2">
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              <li className="items-center">
                <div className="flex mb-2">
                  <Image
                    src="/footer1.png"
                    alt="Post image1"
                    width={100}
                    height={100}
                    className="w-10 h-10 "
                  />
                  <span className="ml-4 text-sm">
                    <p className="text-gray-400">20 Feb 2022</p>
                    <p className="text-white">Keep Your Business</p>
                  </span>
                </div>
              </li>

              <li className="items-center">
                <div className="flex mb-2">
                  <Image
                    src="/footer2.png"
                    alt="Post image2"
                    width={100}
                    height={100}
                    className="w-10 h-10 "
                  />
                  <span className="ml-4 text-sm">
                    <p className="text-gray-400">20 Feb 2022</p>
                    <p className="text-white">Keep Your Business</p>
                  </span>
                </div>
              </li>

              <li className="items-center">
                <div className="flex mb-2">
                  <Image
                    src="/footer3.png"
                    alt="Post image3"
                    width={100}
                    height={100}
                    className="w-10 h-10 "
                  />
                  <span className="ml-4 text-sm">
                    <p className="text-gray-400">20 Feb 2022</p>
                    <p className="text-white">Keep Your Business</p>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}

      <div className="bg-gray-800 bg-opacity-50 py-4">
        <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            Copyright © 2022 by Saboor. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 ">
            <Link href="#" className="text-blue-900 p-1 bg-white border-2">
              <FaFacebookF />
            </Link>

            <Link href="#" className="text-blue-500 p-1 bg-white border-2">
              <FaTwitter />
            </Link>

            <Link href="#" className="text-pink-500 p-1 bg-white border-2">
              <FaInstagram />
            </Link>

            <Link href="#" className="text-red-700 p-1 bg-white border-2">
              <FaYoutube />
            </Link>

            <Link href="#" className="text-red-600 p-1 bg-white border-2">
              <FaPinterest />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
