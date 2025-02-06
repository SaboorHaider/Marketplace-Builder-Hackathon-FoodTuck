import Header from '@/components/Header';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
const page = async ({ params }: { params: { id: string } }) => {
  const datas = await client.fetch(`
    *[_type == "chef" && _id == "${params.id}"]{
      _id,
      name,
      position,
      experience,
      specialty,
      image,
      description,
      available
    }
  `);

  const chef = datas[0]; // Assuming the result is an array

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
            <h2 className="text-center text-3xl font-bold ">Chef Details</h2>

            <div className="text-center justify-center items-center flex mt-1">
              <p>
                <Link href="/" className="cursor-pointer hover:text-[#FF9F0D]">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-[#FF9F0D] cursor-pointer">
                <Link href="/Error404">Chef</Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 pb-24 pt-10 items-center justify-center flex-col">
        <h2 className="text-[30px] pb-4 text-black font-extrabold">{chef.position}</h2>
          {chef.image && (
            <Image
              alt={chef.name}
              className="object-cover object-center rounded"
              src={urlFor(chef.image).url()}
              width={350}
              height={350}
            />
          )}
          <div className="text-center lg:w-2/3 w-full mt-6">
            <h1 className="title-font sm:text-3xl text-2xl mb-2 font-bold text-black">
              {chef.name}
            </h1>
            <p className="mt-2 leading-relaxed">{chef.description}</p>
            <p className="mt-2 text-black italic">Experience: {chef.experience} years</p>
            
            <p className="mt-2 text-black italic">Specialty: {chef.specialty}</p>
            
            <p
                  className={`text-sm font-medium mt-3 ${
                    chef.available ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {chef.available ? "Available" : "Not Available"}
                </p>

                <div className="flex justify-center mt-5 space-x-4">
  <Link href="/error">
    <button className="inline-flex items-center justify-center text-white bg-gradient-to-r from-[#FF9F0D] via-[#FF5733] to-[#FFC300] border-0 py-2 px-6 focus:outline-none rounded text-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      Contact Chef
    </button>
  </Link>

  <Link href="/ourchef">
    <button className="inline-flex items-center justify-center text-white bg-[#FF5733] border-0 py-2 px-6 focus:outline-none rounded text-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      Back to List
    </button>
  </Link>
</div>


          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
