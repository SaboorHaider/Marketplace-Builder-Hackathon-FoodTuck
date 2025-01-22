import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import pic1 from "../../../public/about-1.png";
import pic2 from "../../../public/about-2.png";
import pic3 from "../../../public/about-3.png";

function AboutUs() {
  return (
    <section className="bg-black px-3 container lg:px-[100px] grid lg:grid-cols-2 gird-cols-1  md:items-center py-[50px]">
      <div className="text-white w-full">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-flower whitespace-nowrap font-greatVibes">
          About us
        </h1>

        <h1 className="text-[10px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">We</span> Create the best foody
          product
        </h1>

        <p className="text-[10px] md:text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        <ul>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>{" "}
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>{" "}
            Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
          </li>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
        </ul>

        <div className="flex flex-col md:flex-row items-center md:items-start">
         <Link href='/About'>
         <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
            See More
          </button>
          </Link>
        </div>
      </div>

      <div className="mt-[50px] md:mt-0 ">
        <Image src={pic1} alt="Hero Image" />

        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[0]">
          <Image src={pic2} alt="Hero Image" className="mr-[16px] pt-[20px] lg:w-[260px] lg:h-[300px] object-cover  " />

          <Image src={pic3} alt="Hero Image" className="pt-[20px] lg:w-[260px] lg:h-[300px] object-cover" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
