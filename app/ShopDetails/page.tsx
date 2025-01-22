import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CiHeart } from "react-icons/ci";
import { RiExchangeFundsLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import  {FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import  {FaHeart} from "react-icons/fa";
import  {FaArrowLeft } from "react-icons/fa";
import  {FaArrowRight } from "react-icons/fa";
import  {FaStar} from "react-icons/fa";
import  {FaFacebookF} from "react-icons/fa";
import  {FaTwitter} from "react-icons/fa";
import  {FaInstagram} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProductPage = () => {
  return (
    <div>

      {/* Header */}
      <header>
        <Header />
        <div className="relative">
          <Image
            src="/mainbg.jpg"
            alt="Header Background"
            width={900}
            height={900}
            className="w-full h-[200px] object-cover opacity-40  "
          />

          <div className="absolute inset-0 lg:m-[70px] justify-center  text-center items-center gap-[15px] sm:gap-[20px] lg:gap-[30px] px-4 text-white">
            <h2 className="text-center text-2xl font-bold "> Shop Details </h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-orange-500 cursor-pointer">
                <Link href="/Error404">Shop Details</Link>
              </p>
            </div>
          </div>
        </div>
      </header>



<div className="bg-white">
      <div className="bg-white text-gray-800 sm:pt-4 px-4 md:px-8  lg:p-[100px]">
        <div className="flex justify-end text-gray-500">
          <Link href="/" className="hover:text-gray-800 flex items-center mr-1">
          <FaArrowLeft/>
            <span className="text-xs pl-1">Prev</span>
          </Link>
          <Link href="/" className="hover:text-gray-800 flex items-center">
            <span className="text-xs pr-1">Next</span>
            <FaLongArrowAltRight />
          </Link>
        </div>


{/* Section 1 */}
        <div className="grid sm:grid-flow-col-1 md:grid-cols-8  lg:grid-cols-8  gap-1 items-start mt-6">
          {/* Image Gallery */}
          
          
          <div className="lg:col-span-1 md:col-span-1 space-y-2">
            <Image
              src="/shopD1.jpg"
              alt="Image 1"
              className=" rounded-sm lg:w-[100px] md:w-[100px] lg:h-[103px] md:h-[103px] sm:w-full  object-cover mb-2 hover:border-2 cursor-pointer border-orange-500 "
              height="900"
              width="900"
            />
            <Image
              src="/shopD2.jpg"
              alt="Image 2"
              className="rounded-sm lg:w-[100px] md:w-[100px] lg:h-[103px] md:h-[103px] sm:w-full  object-cover mb-2 hover:border-2 cursor-pointer border-orange-500"
              height="900"
              width="900"
            />
            <Image
              src="/shopD3.jpg"
              alt="Image 3"
              className=" rounded-sm lg:w-[100px] md:w-[100px] lg:h-[103px] md:h-[103px] sm:w-full  object-cover mb-2 hover:border-2 cursor-pointer border-orange-500"
              height="900"
              width="900"
            />
            <Image
              src="/shopD4.jpg"
              alt="Image 4"
              className="rounded-sm lg:w-[100px] md:w-[100px] lg:h-[103px] md:h-[103px] sm:w-full  object-cover mb-2 hover:border-2 cursor-pointer border-orange-500"
              height="900"
              width="900"
            />
          </div>

          {/* Main Image */}
          <div className="lg:col-span-2 md:col-span-3  ">
            <Image
              src="/shopDmean.jpg"
              alt="Main image of the dish"
              className="rounded-sm lg:w-[300px] w-full  object-cover h-[436px] cursor-pointer hover:border-2 border-orange-500 transform transition hover:scale-105 "
              height={900}
              width={900}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4 md:col-span-4 ml-12">
            <div className="flex items-center">
              <span className="bg-orange-400 text-xs text-white px-3 py-1 rounded cursor-pointer hover:bg-gray-500 hover:text-white transition">
                In stock
              </span>
            </div>
            <h1 className="text-3xl font-bold mt-2">Yummy Chicken Chup</h1>

            <p className="text-gray-600 mt-2 border-b-2 pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              sint consequatur dolore, doloremque quaerat non eligendi excepturi
              dolorum magni maxime expedita soluta! Autem repellat, blanditiis
              earum esse itaque eligendi explicabo.
            </p>
            <div className="text-2xl font-bold mt-4">$54.00</div>

            <div className="flex items-center mt-4">
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <span className="ml-2 text-gray-400">
                | 5.0 Rating | 22 Review
              </span>
            </div>

            <p className="text-gray-600 mt-4">Dictum/cursus/Risus</p>

            <div className="flex items-center mt-4">
              <span className="border-2 text-lg border-gray-500 px-2 text-gray-700 ">-</span>
              <span className="border-y-2 text-black text-lg border-gray-500 px-2">1</span>
              <span className="border-2 text-lg border-gray-500 text-gray-700 px-2">+</span>


<button className="ml-4 px-6 py-2 bg-orange-500 text-white rounded cursor-pointer hover:text-orange-500 hover:bg-gray-200 transition 
">
                Add to cart
              </button>
            </div>

            <div className="flex space-x-4 mt-4">
              <Link
                href="/"
                className="flex items-center text-gray-800 hover:text-black"
              >
                <CiHeart className="mr-1 text-lg"  />
                Add to Wishlist
              </Link>


              <Link
                href="#"
                className="flex items-center text-gray-800 hover:text-black"
              >
                <RiExchangeFundsLine className="m-1 text-lg" />
                Compare
              </Link>
            </div>

            <div className="text-gray-600 mt-2">
              <p>Category: Pizza</p>
              <p>Tag: Our Shop</p>
            </div>
            <div className="mt-4 flex ">
                <span className="text-md mr-2">Share:</span>
                <ul className="flex space-x-3 text-gray-600  p-1">
                    <li><Link href='/'>  <FaYoutube className=" text-white bg-gray-600 p-1 rounded-full text-lg  cursor-pointer"/></Link></li>
                    <li><Link href='/'><FaFacebookF className="text-white bg-gray-600 p-1 rounded-full text-lg cursor-pointer"/></Link></li>
                    <li><Link href='/'>   
                    <FaTwitter className="text-white bg-gray-600 p-1 rounded-full text-lg cursor-pointer" /></Link></li>
                    <li><Link href='/'> <FaLinkedin className="text-white bg-gray-600 p-1 rounded-full text-lg cursor-pointer"/></Link></li>
                    <li><Link href='/'>
                    <FaInstagram className="text-white bg-gray-600 p-1 rounded-full text-lg cursor-pointer"/></Link></li>
                </ul>           
            </div>
          </div>
        </div>
      </div>

    {/* Section 2 */}
<div className="bg-white lg:px-[100px] text-gray-600">
  {/* Button Group */}
  <div className="mb-6 flex flex-wrap">
    <button className="bg-orange-500 py-1 text-sm text-white px-3 mr-4 mb-2 sm:mb-0 rounded transition-transform transform hover:scale-105">
      Description
    </button>
    <button className="py-1 text-sm text-gray-700 px-3 border border-gray-300 rounded mb-2 sm:mb-0 hover:text-orange-500 hover:border-orange-500 transition-transform transform hover:scale-105">
      Reviews (24)
    </button>
  </div>

  <div className="mb-6">
    <p className="mb-3 text-base lg:text-md">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad repellat nemo quidem, at fugit, quasi deleniti ipsum consequatur, aut optio eos dicta corrupti accusamus pariatur voluptate. Voluptates possimus obcaecati itaque? Molestiae officiis debitis atque. Non ipsa ad distinctio a ipsum nisi, eveniet quo, accusantium in ullam unde quisquam iusto.
    </p>

    <p className="text-base lg:text-lg">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae esse architecto totam asperiores ipsam molestias laboriosam optio cumque, labore aspernatur illo suscipit debitis maiores dignissimos consequuntur officia cupiditate aliquam, quas sunt voluptas quisquam est. Expedita nam aliquam labore a modi quia veniam unde illum libero, saepe mollitia rem consequuntur sit.
    </p>
  </div>

  <div className="mb-6">
    <h3 className="text-bold my-5 text-lg lg:text-xl text-black">
      Key Benefits
    </h3>
    <ul className="list-disc pl-5 space-y-2 text-base lg:text-lg">
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet.</li>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero.</li>
      <li>Lorem ipsum dolor sit amet consectetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
    </ul>
  </div>
</div>

{/* Section 3 */}
<div className="mx-auto py-8 bg-white lg:px-[200px]">
    <div className="flex justify-between mb-6 ">
    <h2 className="text-2xl font-bold ">Similar Products</h2>
    <div className="flex justify-end space-x-2">

      
        <button className="hover:bg-[#FF9F0D] bg-slate-200  text-white p-2 rounded-full">
          <FaArrowLeft />
        </button>
        <button className="hover:bg-[#FF9F0D] bg-slate-200  text-white p-2 rounded-full">
          <FaArrowRight />
        </button>
      </div>
    </div>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 p-1">
        
        
        <div className="relative">
          <Image
            src="/shopG1.jpg"
            alt="A fresh lime salad with various vegetables on a black plate"
           width={900}
           height={900}
            className="h-[219px] w-[312px] rounded-sm object-cover"
            
          />
          <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 hover:opacity-100 transition-opacity">
            <button className="bg-orange-500 text-white p-2 rounded-full">
              <FaSearch />
            </button>
            <button className="bg-orange-500 text-white p-2 rounded-full">
              <FaHeart />
            </button>

             
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">Fresh Lime</h3>
          <p className="text-orange-500">
            $38.00 <span className="line-through text-gray-500">$45.00</span>
          </p>
        </div>

          </div>

         

        <div className="relative">
          <Image
            src="/shopG2.jpg"
            alt="A fresh lime salad with various vegetables on a black plate"
           width={900}
           height={900}
            className="h-[219px] w-[312px] rounded-sm object-cover"
            
          />
          <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 hover:opacity-100 transition-opacity">
            <button className="bg-orange-500 text-white p-2 rounded-full">
              <FaSearch />
            </button>
            <button className="bg-orange-500 text-white p-2 rounded-full">
              <FaHeart />
            </button>

            </div>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">Chocolate Muffin</h3>
          <p className="text-orange-500">$28.00</p>
        </div>

          </div>
        

        <div className="relative">
          <Image
            src="/shopG3.jpg"
            alt="A fresh lime salad with various vegetables on a black plate"
           width={900}
           height={900}
            className="h-[219px] w-[312px] rounded-sm object-cover"
            
          />
           <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 hover:opacity-100 transition-opacity">
            <button className="bg-orange-500 text-white p-2 rounded-full">
              <FaSearch />
            </button>
            <button className="bg-orange-500 text-white p-2 rounded-full">
              <FaHeart />
            </button>

            </div>
          
            <div className="mt-2">
          <h3 className="text-lg font-semibold">Burger</h3>
          <p className="text-orange-500">$21.00</p>
        </div>

        </div>
      
        <div className="relative">
          <Image
            src="/shopG1.jpg"
            alt="A fresh lime salad with various vegetables on a black plate"
           width={900}
           height={900}
            className="h-[219px] w-[312px] rounded-sm object-cover"
            
          />
           <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 hover:opacity-100 transition-opacity">
            <button className="bg-orange-500 text-white p-2 rounded-full">
              <FaSearch />
            </button>
            <button className="bg-orange-500 text-white p-2 rounded-full">
              <FaHeart />
            </button>

            </div>

<div className="mt-2">
          <h3 className="text-lg font-semibold">Fresh Lime</h3>
          <p className="text-orange-500">
            $38.00 <span className="line-through text-gray-500">$45.00</span>
          </p>
        </div>
        </div>
        
      </div>

      
    </div>
    </div>



      <Footer />
    </div>
  );
};

export default ProductPage;
