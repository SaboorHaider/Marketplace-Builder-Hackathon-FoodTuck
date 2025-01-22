
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const Process = () => {
  
  
  return (
    <div className="relative my-[10px]">
      <Image
        src="/processBg.png"
        alt="Delicious food with vegetables and meat"
        className="w-full h-auto object-cover opacity-50"
        width={1920}
        height={600}
      />
      <div
        className="absolute inset-0 flex items-right justify-right
          px-[10px] sm:px-[20px] md:px-[40px] lg:pl-[500px] lg:pr-[100px]"
      >
        <div
          className="text-right 
            max-w-[500px] md:max-w-[8000px] lg:max-w-[1200px] mx-auto"
        >
          <h2
            className="text-[12px] md:text-[20px] lg:text-[25px] 
              font-flower text-[#FF9F0D] italic"
          >
            Restaurant Name Process
          </h2>

          <h1
            className="text-[15px] md:text-[25px] lg:text-[40px] 
              font-bold mt-[5px] text-white"
          >
            <span className="text-[15px] md:text-[25px] lg:text-[40px] text-[#FF9F0D]">
              We 
            
            <span className="text-white"> Document Every Food Bean Process until it is saved</span>
            </span>
          </h1>

          <p className="text-[10px] md:text-[13px] lg:text-[18px] mt-[2px] md:mt-[10px] lg:mt-[12px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna.
          </p>

          <div className="mt-[10px] md:mt-[15px] lg:mt-[30px] flex  justify-center md:justify-end lg:justify-end space-x-[10px]">
           
           <Link href='/Error404'>
           <button
              className="border-[#FF9F0D] border-2 shadow-sm text-white hover:bg-[#FF9F0D] hover:text-black px-[10px] py-[1px] rounded-full 
                text-[9px] md:text-[14px] lg:text-[15px] transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              Read More
            </button></Link>


            
            <button className=" text-white px-[10px] py-[5px] flex text-[10px] md:text-[14px] lg:text-[15px] transform transition duration-300 hover:scale-105 cursor-pointer  items-center justify-center rounded-3xl hover:bg-[#FF9F0D] ">
             

              <i>
                <FaPlayCircle className="  text-white bg-[#FF9F0D] rounded-full lg:text-xl lg:p-1 md:p-1 mr-[5px]" />
              </i>
              <Link href="/Cinematic_Restaurant.mp4">
        <div>
          <div className="flex hover:text-black  items-center justify-center  text-white text-sm">
            Play Video
          </div>
        </div>
      </Link>
      
             
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
