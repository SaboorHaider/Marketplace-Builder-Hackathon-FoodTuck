import Header from '../../components/Header'
import { client } from '../../sanity/lib/client'
import { urlFor } from '../../sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const page =async ({ params }: { params: { category : string } }) => {
    const datas = await client.fetch(`*[_type == "food" && category == "${params.category}"]{
        _id,
        name,
        category,
        price,
        originalPrice,
        image,
        description,
        available,
        tags
      }`)
  return (
    <div className='mb-[50px]'>
       <header className="bg-black">
        <Header />
        <div className="relative">
          <Image
            src="/mainbg.jpg"
            alt="Header Background"
            width={900}
            height={900}
            className="w-full h-[200px] object-cover opacity-40"
          />
          <div className="absolute inset-0 m-8 sm:m-12 lg:m-[70px] text-center text-white">
            <h2 className="text-2xl font-bold">Category</h2>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <Link href="/" className="cursor-pointer hover:text-yellow-200">
                Home
              </Link>
              <MdKeyboardArrowRight />
              <Link href="/Error404" className="text-[#FF9F0D] cursor-pointer">
              Category
              </Link>
            </div>
          </div>
        </div>
      </header>
      
        <h1 className='font-extrabold p-[10px] mt-[30px] text-[40px] text-[#FF9F0D] font-greatVibes flex justify-center '>{params.category}s</h1>
   <div className='px-14 flex gap-[20px]'>
   {datas.map((items:any)=>{
        return(
          <div key={items._id} className="lg:w-1/4 md:w-1/2 p-4 w-full" >
        <a className="block relative h-48 rounded overflow-hidden">
  {items.originalPrice > items.price && (
    <p className="bg-black p-1 font-bold text-white absolute top-[6%] transform -translate-y-1/2 right-0 text-[13px] rotate-0">
      {Math.round(((items.originalPrice - items.price) / items.originalPrice) * 100)}% OFF
    </p>
  )}
  <Image
    alt="Q-Commerce"
    className="object-cover object-center w-full h-full block"
    src={urlFor(items.image).url()}
    width={200}
    height={200}
  />
</a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {items.name}
          </h2>
          <p className='line-clamp-1'>{items.description}</p>
          <div className='flex py-2 justify-between px-[15px]'>
          <p className='text-[17px] text-[#FF9F0D] font-bold'>${items.originalPrice}</p> 
         <div className='flex gap-2'>
         <p className="line-through font-semibold text-red-600">${items.price}</p>
{items.originalPrice > items.price && (
  <p className="text-[15px]">
    {Math.round(((items.originalPrice - items.price) / items.originalPrice) * 100)}% OFF
  </p>
)}</div>
          </div>
          <Link href={`/shop/${items._id}`}><button className='bg-[#FF9F0D] text-whitetext p-2'>View Product</button></Link>
        </div>
      </div>
    )})}
   </div>
    </div>
  )
}

export default page
