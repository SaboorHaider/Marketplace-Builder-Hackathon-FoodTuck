import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

function Hero() {
  return (
    
    <div className="relative bg-black h-[620px]">
      <Image
        src="/HeroBg.jpg"
        alt="HeroBg"
        className="h-full w-full object-cover opacity-10 "
        width={920}
        height={500}
      />

    
    <div className="absolute  inset-0 px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">






    <div className="items-center justify-center mr-10 hidden sm:block md:block">
      <div className="flex flex-col items-center text-white space-y-8 ">
        <div className="border-r border-gray-600 h-32"></div>
        <Link href="/Error" className="text-white hover:text-yellow-500">
          <FaFacebookF />
        </Link>
        <Link href="/Error" className="text-white hover:text-yellow-500">
          <FaTwitter />
        </Link>
        <Link href="/Error" className="text-white hover:text-yellow-500">
          <FaPinterestP />
        </Link>
        <div className="border-r border-gray-600 h-32"></div>
      </div>
    </div>

      {/* Heading */}
      <div className="text-white w-full md:w-[50%]">
        <h1 className="text-[20px] md:text-[28px] lg:text-[32px] font-normal font-flower text-[#FF9F0D] whitespace-nowrap text-center md:text-left">
          Its Quick & Amusing!
        </h1>

        <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold whitespace-normal mt-3 text-center md:text-left">
          <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
        </h1>

        <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
          <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800 transform transition duration-300 hover:scale-105 cursor-pointer">
            <Link href='/menu'>See More</Link>
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="mt-[30px] md:mt-0 md:w-[50%] flex justify-center">
        <Image
          src='/Hero.png'
          alt="Hero Image"
          width={877}
          height={670}
          className="w-[90%] md:w-auto max-w-[300px] md:max-w-full"
        />
      </div>
    </div>
    </div>
  );
}

export default Hero;