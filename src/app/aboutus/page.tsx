import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { LiaQuoteRightSolid } from "react-icons/lia";
import { IoStar } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const FoodPage = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-black">
        <Header />
        <div className="relative">
          <Image
            src="/mainbg.jpg"
            alt="Header Background"
            width={900}
            height={900}
            className="w-full h-[200px] object-cover opacity-40"
          />
          <div className="absolute inset-0 m-8 sm:m-12 lg:m-[70px] text-center text-white">
            <h2 className="text-2xl font-bold">About Us</h2>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <Link href="/" className="cursor-pointer hover:text-yellow-200">
                Home
              </Link>
              <MdKeyboardArrowRight />
              <Link href="/Error404" className="text-[#FF9F0D] cursor-pointer">
                About
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="bg-white text-gray-800">
        <div className="lg:px-[150px] md:px-[100px] p-5 mx-auto md:py-[100px] lg:py-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Image
                  src="/blogimg3.jpg"
                  alt="Tacos with lime"
                  width={900}
                  height={900}
                  className="w-full h-auto object-cover rounded-sm"
                />
              </div>
              <div className="mt-8 sm:mt-0">
                <Image
                  src="/AboutD1.png"
                  alt="Image 1"
                  width={900}
                  height={900}
                  className="w-full h-auto object-fill rounded-sm my-2"
                />
                <Image
                  src="/shopG1.jpg"
                  alt="Image 2"
                  width={900}
                  height={900}
                  className="w-full h-auto object-cover rounded-sm"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center lg:ml-10">
              <span className="text-[#FF9F0D] font-bold text-xl font-flower">
                About us ____
              </span>
              <h1 className="text-3xl font-bold mt-2 text-[#333333]">
                Food is an important part Of a balanced Diet
              </h1>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              </p>

              <button className="bg-gray-100 px-4 py-2 flex text-[14px] lg:text-[15px] transform transition duration-300 hover:scale-105 cursor-pointer items-center justify-center rounded-3xl hover:bg-[#FF9F0D] mt-12">
                <i>
                  <FaPlayCircle className="text-white bg-[#FF9F0D] rounded-full lg:text-xl lg:p-1 md:p-1 mr-[5px]" />
                </i>
                <Link href="/Cinematic_Restaurant.mp4">
                  <div className="flex hover:text-white items-center justify-center text-black text-sm">
                    Play Video
                  </div>
                </Link>
              </button>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold">Why Choose us</h2>
            <p className="text-gray-600 mt-4 lg:px-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum id elementum.
            </p>
            <div className="mt-8">
              <Image
                src="/AboutD2.png"
                alt="Chose Us"
                width={900}
                height={900}
                className="w-full h-[300px] rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-white md:m-10 m-5 ">
            <span className="">
              <h3 className="text-[#FF9F0D] lg:ml-[150px] text-xl font-flower">
                Testimonials
              </h3>
              <p className="text-black font-bold text-2xl lg:ml-[150px]">
                What our clients are saying
              </p>
            </span>
            <div className="relative bg-white text-black rounded-sm shadow-lg shadow-white p-8 min-h-full max-w-2xl mx-auto mt-[100px]">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
                <Image
                  src="/clientimg.png"
                  alt="Client's face"
                  height="100"
                  width="100"
                  className="rounded-full border-1 border-black"
                />
              </div>
              <div className="mt-10">
                <i>
                  <LiaQuoteRightSolid className="text-[#FF9F0D] text-4xl lg:ml-[285px]" />
                </i>
                <p className="mt-5 text-lg text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                  diam pellentesque bibendum non dui volutpat fringilla bibendum.
                </p>
                <div className="flex justify-center items-center mt-4">
                  <IoStar className="text-orange-500 text-3xl" />
                  <IoStar className="text-orange-500 text-3xl" />
                  <IoStar className="text-orange-500 text-3xl" />
                  <IoStar className="text-orange-500 text-3xl" />
                  <IoStar className="text-gray-300 text-3xl" />
                </div>
                <h4 className="mt-4 font-bold text-xl text-center text-[#333333]">
                  Alamin Hasan
                </h4>
                <p className="text-gray-500 text-center">Food Specialist</p>
              </div>
            </div>
            <div className="flex justify-center items-center sm:mb-[100px]">
              <GoDotFill className="text-[#FF9F0D] text-2xl mt-10 opacity-100 " />
              <GoDotFill className="text-[#FF9F0D] text-2xl mt-10 opacity-40 " />
              <GoDotFill className="text-[#FF9F0D] text-2xl mt-10 opacity-40 " />
              <GoDotFill className="text-[#FF9F0D] text-2xl mt-10 opacity-40 " />
            </div>
          </div>

          {/* Menu Section */}
          <div className="container mx-auto px-4 py-8 lg:px-[100px]">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold">Our Food Menu</h1>
              <p className="text-gray-500 lg:px-[350px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
                pharetra dictum neque massa congue.
              </p>
            </div>
            <div className="flex justify-center mb-8">
              <nav className="space-x-4 border-b-2 border-gray-400 pb-1">
                <Link href="/Menu" className="text-gray-500 hover:border-b-2 hover:text-[#FF9F0D] border-orange-500 pb-1">Breakfast</Link>
                <Link href="/Menu" className="text-gray-500 hover:border-b-2 hover:text-[#FF9F0D] border-orange-500 pb-1">Lunch</Link>
                <Link href="/Menu" className="text-gray-500 hover:border-b-2 hover:text-[#FF9F0D] border-orange-500 pb-1">Dinner</Link>
                <Link href="/Menu" className="text-gray-500 hover:border-b-2 hover:text-[#FF9F0D] border-orange-500 pb-1">Dessert</Link>
                <Link href="/Menu" className="text-gray-500 hover:border-b-2 hover:text-[#FF9F0D] border-orange-500 pb-1">Drink</Link>
                <Link href="/Menu" className="text-gray-500 hover:border-b-2 hover:text-[#FF9F0D] border-orange-500 pb-1">Snack</Link>
              </nav>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-200 py-4">
                  <div>
                    <h2 className="text-lg font-bold text-black hover:text-orange-500 cursor-pointer">
                      Alder Grilled Chinook Salmon
                    </h2>
                    <p className="text-gray-500">Toasted French bread topped with romano, cheddar</p>
                    <p className="text-gray-400">560 CAL</p>
                  </div>
                  <div className="text-orange-500 text-lg font-bold">32$</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href='/Menu'>
                <button className="bg-transparent border border-orange-500 text-orange-500 py-2 px-4 rounded hover:bg-orange-500 hover:text-white transition duration-300">
                  View menu
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
