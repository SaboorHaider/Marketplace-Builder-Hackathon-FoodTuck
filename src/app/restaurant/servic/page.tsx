import React from "react";
import Image from "next/image";
import { PiChefHatThin } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import { BiHappyBeaming } from "react-icons/bi";

const Service = () => {
  return (
    <div className="relative">
      <Image
        src="/service-bg.jpeg"
        alt="Delicious food with vegetables and meat"
        className="w-full h-auto object-cover opacity-40"
        width={1920}
        height={600}
      />

      <div className="absolute inset-0 flex flex-row lg:m-[100px] justify-between items-center gap-[15px] sm:gap-[20px] lg:gap-[30px] px-4 text-white">
        {/* Professional Chefs */}
        <div className="flex flex-col items-center text-center">
          <PiChefHatThin className="text-[35px] sm:text-[40px] lg:text-[50px] text-[#FF9F0D]" />
          <p className="lg:mt-[5px] text-[10px] sm:text-[12px] lg:text-[15px]">
            Professional Chefs
          </p>
          <p className="text-[10px]  lg:text-[25px] font-bold ">
            420
          </p>
        </div>

        {/* Items Of Food */}
        <div className="flex flex-col items-center text-center">
          <IoFastFoodOutline className="text-[35px] sm:text-[40px] lg:text-[50px] text-[#FF9F0D]" />
          <p className="lg:mt-[5px] text-[10px] sm:text-[12px] lg:text-[15px]">
            Items Of Food
          </p>
          <p className="text-[10px]  lg:text-[25px] font-bold">
            320
          </p>
        </div>

        {/* Years Of Experience */}
        <div className="flex flex-col items-center text-center">
          <GiKnifeFork className="text-[35px] sm:text-[40px] lg:text-[50px] text-[#FF9F0D]"/>
          <p className="lg:mt-[5px] text-[10px] sm:text-[12px] lg:text-[15px]">
            Years Of Experienced
          </p>
          <p className="text-[10px]  lg:text-[25px] font-bold">
            30+
          </p>
        </div>

        {/* Happy Customers */}
        <div className="flex flex-col items-center text-center">
          <BiHappyBeaming className="text-[35px] sm:text-[40px] lg:text-[50px] text-[#FF9F0D]"/>
          <p className="lg:mt-[5px] text-[10px] sm:text-[12px] lg:text-[15px]">
            Happy Customers
          </p>
          <p className="text-[10px]  lg:text-[25px] font-bold">
            220
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
