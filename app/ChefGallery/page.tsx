import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import { client } from "../../sanity/lib/client";
import Footer from "../../components/Footer";

type Chef = {
  name: string;
  position: string;
  experience: string;
  specialty: string;
  imageUrl: string;
  description: string;
  available: boolean;
};

export default async function Datafetchchef() {
  const query: Chef[] = await client.fetch(
    `*[_type == "chef"]{
      name,
      position,
      experience,
      specialty,
      "imageUrl": image.asset->url,
      description,
      available
    }`
  );

  return (
    <div>
      <header>
        <Header />

        <div className="relative">
          <Image
            src="/mainbg.jpg"
            alt="Header Background"
            width={900}
            height={900}
            className="w-full h-[200px] object-cover "
          />

          <div className="absolute inset-0 lg:m-[70px] justify-center text-center items-center gap-[15px] sm:gap-[20px] lg:gap-[30px] px-4 text-white">
            <h2 className="text-center text-3xl font-bold ">Our Chef</h2>

            <div className="text-center justify-center items-center flex mt-1">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-yellow-500 cursor-pointer">
                <Link href="/Error404">Chef</Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white py-8 lg:px-[200px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Chefs Data from Sanity */}
            {query.map((chef: Chef, index: number) => (
              <div key={`${chef.name}-${index}`} className="text-start">
                <Image
                  src={chef.imageUrl}
                  alt={chef.name}
                  height={900}
                  width={900}
                  className="w-full h-[300px] object-cover rounded-sm object-bottom"
                />
                <h2 className="mt-1 text-lg font-semibold">{chef.name}</h2>
                <p className="text-sm text-gray-500">Position: {chef.position}</p>
                <p className="text-sm text-gray-700 font-medium">
                  Experience: {chef.experience}
                </p>
                <p className="text-sm text-gray-600 mt-2">{chef.description}</p>
                <p
                  className={`text-sm font-medium mt-3 ${
                    chef.available ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {chef.available ? "Available" : "Not Available"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
