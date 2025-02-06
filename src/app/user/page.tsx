import Header from '../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const UserProfile = () => {
  return (
   <div className=''>
      <header className='bg-black'>
        <Header />

        <div className="relative">
          <Image
            src="/mainbg.jpg"
            alt="Header Background"
            width={900}
            height={900}
            className="w-full h-[200px] object-cover "
          />

          <div className="absolute inset-0 lg:m-[70px] justify-center  text-center items-center gap-[15px] sm:gap-[20px] lg:gap-[30px] px-4 text-white">
            <h2 className="text-center text-3xl font-bold ">User Page</h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
              <p>
                <Link href="/" className="cursor-pointer hover:text-[#FF9F0D]">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-[#FF9F0D] cursor-pointer">
                <Link href="/Error404">User</Link>
              </p>
            </div>
          </div>
        </div>
      </header>
 
     <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="w-24 h-24 bg-[#FF9F0D] rounded-full flex items-center justify-center">
            <span className="text-4xl text-white font-bold">
              <Image
              src='/blogS1.png'
              alt='Profile'
              width='900'
              height='900'
              className='object-cover rounded-full'
              />
            </span>
          </div>
        </div>
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-2">Saboor</h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Email</span>
            <span className="text-gray-600">SaboorZaidi5@gmail.com</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Phone</span>
            <span className="text-gray-600">+92 318 2482599</span>
          </div>
         
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-gray-700 font-medium">Location</span>
            <span className="text-gray-600">Hyderbad, Pak</span>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="w-full bg-[#FF9F0D] text-white py-2 px-4 rounded-lg shadow hover:bg-orange-500 transition duration-300 ease-in-out">
            Edit Profile
          </button>
         <Link href={"/signup"}>
         <button className="w-full bg-[#FF9F0D] text-white py-2 px-4 rounded-lg shadow hover:bg-orange-500 transition duration-300 ease-in-out">
            SignUp
          </button>
         </Link>
        </div>
      </div>
    </div>
   </div>
   );
};

export default UserProfile;
