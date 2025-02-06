import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { client } from '../../sanity/lib/client';
import { urlFor } from '../../sanity/lib/image';
import Header from '../../components/Header';
import { MdKeyboardArrowRight } from 'react-icons/md';
const page = async () => {
  const datas = await client.fetch(` *[_type == "chef"]{
    _id,
    name,
    position,
    experience,
    specialty,
    image,
    description,
    available}`)
console.log(datas);
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

          <div className="absolute inset-0 lg:m-[70px] justify-center  text-center items-center gap-[15px] sm:gap-[20px] lg:gap-[30px] px-4 text-white">
            <h2 className="text-center text-3xl font-bold ">Our Chef</h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
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

    <div className='bg-white py-8 lg:px-[200px]'>
      <div className="container mx-auto px-4">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">


  {/* Chefs Data from Sanity */}
 
   {
    datas.map((item:any)=>{
      return(
        <div key={item._id} className="text-start rounded-[5px] ">
          <Image
            src={urlFor(item.image).url()}
            alt="Chefs Image"
            width={200}
            height={200}
            className="w-full h-[300px] object-cover rounded-sm object-bottom"
          />
        <div className="mt-1">
         
          <h2 className="mt-1 text-lg font-semibold">
            {item.name}
          </h2>
          <p className="mt-1 line-clamp-1 text-sm text-gray-600">{item.description}</p>

          <Link href={`/ourchef/${item._id}`}>
  <button
    className="inline-flex items-center justify-center text-white w-full bg-gradient-to-r from-[#FF9F0D] via-[#FF5733] to-[#FFC300] border-0 py-2 px-6 focus:outline-none rounded text-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
  >
    View Detail
  </button>
</Link>

      </div>
      </div>
      )
    })
   }
   </div>
  </div>
</div>
</div>


  )
}

export default page
