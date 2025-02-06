import React from "react";
import Image from "next/image";
import { LiaQuoteRightSolid } from "react-icons/lia";
import { IoStar } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const TestimonialCard = () => {
  return (
    <div className="bg-black md:m-10  m-5">
      <span className="">
        <h3
          className="text-[#FF9F0D] lg:ml-[150px] text-xl font-flower   
        "
        >
          Testimonials
        </h3>
        <p className=" text-white font-bold text-2xl lg:ml-[150px]">
          What our client are saying
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
          <p className="mt-5 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          <div className="flex justify-center  items-center mt-4 ">
            <i>
              {" "}
              <IoStar className="text-orange-500 text-3xl" />
            </i>
            <i>
              {" "}
              <IoStar className="text-orange-500 text-3xl" />
            </i>
            <i>
              {" "}
              <IoStar className="text-orange-500 text-3xl" />
            </i>
            <i>
              {" "}
              <IoStar className="text-orange-500 text-3xl" />
            </i>
            <i>
              {" "}
              <IoStar className="text-gray-300 text-3xl" />
            </i>
          </div>
          <h4 className="mt-4 font-bold text-xl text-center text-[#333333]">Alamin Hasan</h4>
          <p className="text-gray-500 text-center">Food Specialist</p>
        </div>
      </div>
      <div className="flex justify-center items-center sm:mb-[100px]">
        <i>
          <GoDotFill className="text-[#FF9F0D] text-2xl mt-10 opacity-100 " />
        </i>
        <i>
          <GoDotFill className="text-[#FF9F0D] text-2xl mt-10 opacity-40 " />
        </i>
        <i>
          <GoDotFill className="text-[#FF9F0D] text-2xl mt-10 opacity-40 " />
        </i>
        <i>
          <GoDotFill className="text-[#FF9F0D] text-2xl mt-10 opacity-40 " />
        </i>
      </div>
    </div>
  );
};

export default TestimonialCard;
