import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurChefs: React.FC = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="text-center mb-12">
        <h2 className="text-[#FF9F0D] text-2xl font-flower font-medium">
          Chefs
        </h2>
        <h1 className="text-4xl font-bold mt-2">
          <span className="text-[#FF9F0D]">Me</span>et Our Chefs
        </h1>
      </div>

      <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-5 lg:ml-[200px] gap-6 ">
        {/* Chef 1 */}
        <div className="bg-white text-black overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer ">
          <Image
            src="/card1.png"
            width={900}
            height={900}
            alt="Chef D. Eatwood in a kitchen"
            className="w-full h-64 object-cover"
          />

          <div className="p-3 ">
            <h3 className="text-xl font-bold">D. Eatwood</h3>
            <p className="text-gray-500">Chief Chef</p>
          </div>
        </div>

        {/* Chef 2 */}
        <div className="bg-white text-black overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
          <Image
            src="/card2.jpg"
            alt="Chef D. Scrienth preparing food"
            width={900}
            height={900}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">D. Scrienth</h3>
            <p className="text-gray-500">Assistant Chef</p>
          </div>
        </div>

        {/* Chef 3 */}
        <div className="bg-white text-black  overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
          <Image
            src="/card3.jpg"
            alt="Chef M. William cooking"
            width={900}
            height={900}
            className="w-full h-64 object-cover"
          />

          <div className="p-4">
            <h3 className="text-xl font-bold">M. William</h3>
            <p className="text-gray-500">Advertising Chef</p>
          </div>
        </div>

        {/* Chef 4 */}
        <div className="bg-white text-black overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
          <Image
            src="/card4.jpg"
            alt="Chef W. Roadfroad in action"
            height={900}
            width={900}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">W. Roadfroad</h3>
            <p className="text-gray-500">Chef</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="bg-transparent border border-[#FF9F0D] text-[#FF9F0D] py-2 px-6 rounded-full hover:bg-[#FF9F0D] hover:text-gray-900 transition duration-300 transform  hover:scale-100 cursor-pointer">
          <Link href="/ChefGallery">See More</Link>
        </button>
      </div>
    </div>
  );
};

export default OurChefs;
