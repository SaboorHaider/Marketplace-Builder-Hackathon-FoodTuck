import React from 'react'
import {databloglistindivi} from "../../../../Data/data"
import Image from 'next/image'
import { FaInstagram ,FaLinkedin  } from "react-icons/fa6";
import Link from 'next/link';
import Header from "../../../components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { RiAdminFill } from "react-icons/ri";
import { FaCalendarAlt, FaFacebookF, FaGithub, FaReply, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { QuoteIcon } from 'lucide-react';






interface Paramsin {
  params: {
      id : string
  }
}
const page = ({params} : Paramsin) => {
  const paramid = Number(params.id)
    const filterd = databloglistindivi.find((item:any) => item.id === paramid )
  return (
    <div className='bg-white'>
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
            <h2 className="text-center text-3xl font-bold ">Blog List</h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-[#FF9F0D] cursor-pointer">
                <Link href="/Error404">Blog</Link>
              </p>
            </div>
          </div>
        </div>
</header>

<main>
      <div className='bg-white py-5 lg:p-20 lg:mx-20'>
      <div className='container mx-auto px-4 '>
        
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                 
                   {/*First*/}
                   <div className="lg:col-span-2">
                    <div className="bg-white  overflow-hidden">
                   <Image src={filterd?.image || "/fallback-image.jpg"}
                    alt='blogs'
                     width={400}
                    height={400} 
                    className='w-full h-64 object-cover'
                    />
                                <div className="py-2">
                    <div className="flex items-center mb-4">
                      <div className="text-orange-500  text-md mr-1">
                        <PiCalendarDotsDuotone />
                      </div>
                      <div className="text-gray-500 text-xs ">Feb 14, 2022</div>
                      <div className="text-gray-500 text-sm ml-2">|</div>
                      <div className="text-orange-500  text-md mx-2 ">
                        <TiMessages />
                      </div>

                      <div className="text-gray-500 text-xs">3 Comments</div>
                      <div className="text-gray-500 text-sm ml-2">|</div>
                      <div className="text-orange-500  text-sm mx-2">
                        <RiAdminFill />
                      </div>
                      <div className="text-gray-500 text-xs">Admin</div>
                    </div>




                    <h2 className="text-2xl font-bold mb-2">
                      {filterd?.title}
                    </h2>

                    <p className="text-gray-700 mb-4">
                    {filterd?.para}
                    </p>

                    <p className="my-3">
                    Ac haca ullamcorper donec ante habi tasse donec {filterd?.para}</p>

                  
                  <div className=" bg-[#FF9F0D] lg:p-5  text-start my-5 font-bold text-white">
                    <span><QuoteIcon/></span>

                    <p className="">{filterd?.para}</p>
                  </div>



<div>
    <p className="">{filterd?.para}</p>

<div className="grid lg:grid-cols-3 my-5  ">
    <div className="lg:col-span-2 items-center justify-center " ><p className="my-2 text-sm">{filterd?.para}</p>

    <p className="text-sm">{filterd?.para}</p>
    
    </div>

    <div className="lg:col-span-1 items-start">
        <Image src={filterd?.img2|| "/fallback-image.jpg"}
        alt="BlogDetials"
        width={900}
        height={900}
        className="w-full h-[180px] object-cover"/>
        
    </div>
    
</div>

<p >{filterd?.para}</p>

<p className="my-5">{filterd?.para}</p>
</div>

                  </div>

                  <div className="">

      <div className="max-w-4xl mx-auto bg-white">
       
        {/* Tags and Share */}
        <div className="flex justify-between items-center mb-4 border-2 p-5">
          <div className="text-sm text-gray-600">
            <span className="font-bold text-black">Tags:</span> <span className="text-gray-800">Restaurant, Dinner, Pizza, Yummy</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 mr-5">Share:</span>
            <Link className="text-gray-600 hover:text-blue-700" href="https://www.facebook.com/SaboorHaider110/"><FaFacebookF /></Link>
            <Link className="text-gray-600 hover:text-blue-500" href="https://www.linkedin.com/in/abdul-saboor-b57043288/"><FaLinkedin /></Link>
            <Link className="text-gray-600 hover:text-red-500" href="https://www.instagram.com/sabor_110/#"><FaInstagram /></Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Comments -3</h2>

        <div className="space-y-6">

          {/* Comment 1 */}
          <div className="flex space-x-4">
            <Image src="/ShopDC1.jpg" alt="Profile" width={900} height={900} className="w-12 h-12 rounded-full" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold">Anonymous</span>
                <Link href="/" className="text-sm text-gray-500 flex items-center space-x-1 hover:text-[#FF9F0D]">
                  <FaReply /> Reply
                </Link>
              </div>
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <FaCalendarAlt className="text-[#FF9F0D]" />
                <span>June 22, 2020</span>
              </div>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed.
              </p>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="flex space-x-4 ml-12">
            <Image src="/ShopDC2.jpg" alt="Profile" width={900} height={900} className="w-12 h-12 rounded-full" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold">Anonymous</span>
                <Link href="/" className="text-sm text-gray-500 flex items-center space-x-1 hover:text-[#FF9F0D]">
                  <FaReply /> Reply
                </Link>
              </div>
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <FaCalendarAlt className="text-[#FF9F0D]" />
                <span>June 22, 2020</span>
              </div>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed.
              </p>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="flex space-x-4">
            <Image src="/ShopDC3.jpg" alt="Profile" width={900} height={900} className="w-12 h-12 rounded-full" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold">Anonymous</span>
                <Link href="#" className="text-sm text-gray-500 flex items-center space-x-1 hover:text-[#FF9F0D]">
                  <FaReply  /> Reply
                </Link>
              </div>
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <FaCalendarAlt className="text-[#FF9F0D]" />
                <span>June 22, 2020</span>
              </div>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci tellus, fermentum nec imperdiet sed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center lg:my-[50px]">
      <div className="w-full max-w-2xl p-4 shadow-md">
        <h2 className="text-xl font-bold mb-4">Post a comment</h2>
        <form>


          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Write a comment"
              className="w-full p-2 border border-gray-300 rounded h-32"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#FF9F0D] text-white hover:bg-gray-50 hover:text-[#FF9F0D] px-4 py-2 rounded"
            >
              Post a comment
            </button>
          </div>
        </form>
      </div>
    </div>
    
    </div>
                </div>
            
              </div>

     
  
{/* Sidebar */}
<div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
                  
                  <div className="p-6">
                    
                    <div className="text-center">
                      <Image
                        src="/blogS1.png"
                        alt="Profile"
                        width={900}
                        height={900}
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold">Saboor Haider</h3>
                      <p className="text-gray-500">Blogger/Photographer</p>
                      <div className="flex justify-center items-center text-orange-500 my-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <span className="text-gray-500 text-sm ml-2">
                          (1 Review)
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Veritatis distinctio, odio eligendi suscipit
                        reprehenderit atque
                      </p>
                      <div className="flex justify-center space-x-4">
                        
                        <a
                          href="https://www.facebook.com/SaboorHaider110/"
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <FaFacebookF />
                        </a>
                       
                        <a
                          href="https://github.com/SaboorHaider"
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <FaGithub />
                        </a>
                        
                        <a
                          href="https://www.instagram.com/sabor_110/profilecard/?igsh=bnFqMTg4MHAzOGp1"
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <FaInstagram />
                        </a>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar Recent Post  */}

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Recent Post</h3>
                    <div className="flex items-center mb-4">
                      <Image
                        src="/blogS2.jpg"
                        alt="Recent Post"
                        width={900}
                        height={900}
                        className="w-20 h-16 rounded-lg mr-4"
                      />
                      <div>
                        <p className="text-gray-500 text-sm">June 22, 2020</p>
                        <p className="text-gray-700">
                          Lorem ipsum dolor sit cing elit, sed do.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <Image
                        src="/blogS3.jpg"
                        alt="Recent Post"
                        width={900}
                        height={900}
                        className="w-[82px] h-16 rounded-lg mr-4"
                      />
                      <div>
                        <p className="text-gray-500 text-sm">June 22, 2020</p>
                        <p className="text-gray-700">
                          Lorem ipsum dolor sit cing elit, sed do.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <Image
                        src="/blogS4.jpg"
                        alt="Recent Post"
                        width={900}
                        height={900}
                        className="w-20 h-16 rounded-lg mr-4"
                      />
                      <div>
                        <p className="text-gray-500 text-sm">June 22, 2020</p>
                        <p className="text-gray-700">
                          Lorem ipsum dolor sit cing elit, sed do.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <Image
                        src="/blogS5.jpg"
                        alt="Recent Post"
                        width={900}
                        height={900}
                        className="w-[82px] h-16 rounded-lg mr-4"
                      />
                      <div>
                        <p className="text-gray-500 text-sm">June 22, 2020</p>
                        <p className="text-gray-700">
                          Lorem ipsum dolor sit cing elit, sed do.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar Filter by Menu  */}

                <div className="bg-white shadow-md rounded-sm overflow-hidden mt-2">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Filter By Menu</h3>

                    <div className="flex items-center mb-4">
                      <Image
                        src="/blogS6.jpg"
                        alt="Recent Post"
                        width={900}
                        height={900}
                        className="w-16 h-16 rounded-lg mr-4"
                      />

                      <div className="grid grid-cols-2 justify-between text-black font-semibold text-sm">
                        <p className="">Chicken Fry</p>

                        <p className="ml-10">26</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <Image
                        src="/blogS7.jpg"
                        alt="Recent Post"
                        width={900}
                        height={900}
                        className="w-16 h-16 rounded-lg mr-4"
                      />

                      <div className="grid grid-cols-2 justify-between text-black font-semibold text-sm">
                        <p className="">Burger Food</p>

                        <p className="ml-10">26</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <Image
                        src="/blogS8.jpg"
                        alt="Recent Post"
                        width={900}
                        height={900}
                        className="w-16 h-16 rounded-lg mr-4"
                      />

                      <div className="grid grid-cols-2 justify-between text-black font-semibold text-sm">
                        <p className="">Pizza</p>

                        <p className="ml-[50px]">26</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <Image
                        src="/blogS9.jpg"
                        alt="Recent Post"
                        width={900}
                        height={900}
                        className="w-16 h-16 rounded-lg mr-4"
                      />

                      <div className="grid grid-cols-2 justify-between text-black font-semibold text-sm">
                        <p className="">Fresh Fruits</p>

                        <p className="ml-12">26</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar Tags */}

                <div className="bg-white shadow-md rounded-sm overflow-hidden mt-2">
                  <div className="p-3">
                    <h3 className="text-xl font-bold mb-4">Popular Tags</h3>

                    <div className="grid lg:grid-cols-2 gap-4 ">
                      <div className="border p-1 text-center hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">Sandwich</div>
                      <div className="border p-1 text-center hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">Tikka</div>
                      <div className="border p-1 text-center hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">Bbq</div>
                      <div className="border p-1 text-center hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">Restaurant</div>
                      <div className="border p-1 text-center hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">Chicken Sharma</div>
                      <div className="border p-1 text-center hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">Health</div>
                      <div className="border p-1 text-center hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">Fastfood</div>
                      <div className="border p-1 text-center hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">Pizza</div>
                      <div className="border p-1 text-center hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">Burger</div>
                      <div className="border p-1 text-center hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">Chicken</div>
                    </div>
                  </div>
                </div>

                {/* Sidebar Gallery */}

                <div className="bg-white shadow-md rounded-sm overflow-hidden mt-2">
                  <div className="p-3">
                    <h3 className="text-xl font-bold mb-4">Photo Gallery</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <Image
                        src="/blogS11.jpg"
                        alt="Delicious Pizza"
                        width={900}
                        height={900}
                        className="w-full h-[105px] rounded-sm shadow-md"
                      />
                      <Image
                        src="/blogS12.jpg"
                        alt="Gourmet Dish"
                        width={900}
                        height={900}
                        className="w-full h-[105px] rounded-sm shadow-md"
                      />
                      <Image
                        src="/blogS13.jpg"
                        alt="Salmon Dish"
                        width={900}
                        height={900}
                        className="w-full h-[105px] rounded-sm shadow-md"
                      />
                      <Image
                        src="/blogS14.jpg"
                        alt="Grilled Meats"
                        width={900}
                        height={900}
                        className="w-full h-[105px] rounded-sm shadow-md"
                      />

                      <Image
                        src="/blogS15.jpg"
                        alt="Hearty Breakfast"
                        width={900}
                        height={900}
                        className="w-full h-[105px] rounded-sm shadow-md"
                      />
                      <Image
                        src="/blogS16.jpg"
                        alt="Pancakes"
                        width={900}
                        height={900}
                        className="w-full h-[105px] rounded-sm shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-md rounded-sm overflow-hidden mt-2">
                  <div className="p-3">
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>

                    <div className="flex space-x-4 justify-center items-center ">
                      <div className="p-2 bg-gray-100 rounded hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">   <i className=" text-xl cursor-pointer"><FaTwitter />{" "}</i></div>
                      <div className="p-2 bg-gray-100 rounded hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">   <i className=" text-xl cursor-pointer"> <FaYoutube /> </i></div>
                      <div className="p-2 bg-gray-100 rounded hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">   <i className=" text-xl cursor-pointer"><FaPinterest /></i></div>
                      <div className="p-2 bg-gray-100 rounded hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">   <i className=" text-xl cursor-pointer"><FaInstagram /></i></div>
                      <div className="p-2 bg-gray-100 rounded hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out">   <i className=" text-xl cursor-pointer"> <FaFacebookF /></i></div>
                    </div>
                  </div>
                </div>
</div>
</div>
</div>
</div>
</main>
</div>
  )
}

export default page
