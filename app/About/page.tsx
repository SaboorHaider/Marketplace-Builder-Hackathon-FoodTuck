import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components//Footer";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { LiaQuoteRightSolid } from "react-icons/lia";
import { IoStar } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";



const FoodPage = () => {
  return (
<div className="">


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
            <h2 className="text-center text-2xl font-bold "> About Us </h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-[#FF9F0D] cursor-pointer">
                <Link href="/Error404">About</Link>
              </p>
            </div>
          </div>
        </div>
      </header>


{/* Main */}
    <div className="bg-white text-gray-800">

      <div className="lg:px-[150px] md:px-[100px] p-5 mx-auto md:py-[100px] lg:py-[100px]">




        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-8">
          {/* Image Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4">
            
            <div>
              <Image
              src="/blogimg3.jpg"
              alt="Tacos with lime"
              width={900}
              height={900}
            className="w-full h-full lg:w-[336px] lg:h-[420px] md:w-[336px] md:h-[520px]  object-cover rounded-sm"
            />
            </div>

            <div className="mt-[100px]">
            <Image
              src="/AboutD1.png"
              alt="Image 1"
              width={900}
              height={900}
              className="w-full h-auto lg:w-[309px] md:w-[309px] lg:h-[201px] :h-[200px] object-fill rounded-sm my-2"
            />
            <Image
              src="/shopG1.jpg"
              alt="Image 2"
              width={900}
              height={900}
              className="w-full h-auto lg:w-[309px] lg:h-[300px] md:w-[309px] md:h-[300px] object-cover rounded-sm col-span-2"
            />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center lg:ml-10">
            <span className="text-[#FF9F0D] font-bold text-xl font-flower">About us ____</span>
            <h1 className="text-3xl font-bold mt-2 text-[#333333]">
              Food is an important part Of a balanced Diet
            </h1>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            </p>

            <button className=" bg-gray-100 px-[10px] py-[5px] flex text-[10px] md:text-[14px] lg:text-[15px] transform transition duration-300 hover:scale-105 cursor-pointer items-center justify-center rounded-3xl hover:bg-[#FF9F0D] mt-12 ">
             

             <i>
               <FaPlayCircle className="  text-white bg-[#FF9F0D] rounded-full lg:text-xl lg:p-1 md:p-1 mr-[5px]" />
             </i>
             <Link href="/Cinematic_Restaurant.mp4">
       <div>
         <div className="flex hover:text-white  items-center justify-center  text-black text-sm">
           Play Video
         </div>
       </div>
     </Link>
     
            
           </button>
          </div>
        </div>




      
        {/* Why Choose Us*/}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold">Why Choose us</h2>
          <p className="text-gray-600 mt-4 lg:px-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum id elementum.
          </p>
          <div className="mt-8">
            <Image
              src="/AboutD2.png"
              alt="Chose Us"
              width={900}
              height={900}
              className="w-full h-[300px] rounded-lg"
            />
          </div>
        </div>

        <div>
        </div>


<div className="">
<div className=" my-5">
    

      {/* Team Member Section */}
      <div className="h-[700px]">
      <section className="relative  bg-opacity-80 py-10 my-[50px] bg-[#FF9F0DD9] h-[500px]">
        <div className="container mx-auto text-center text-white ">
          <h2 className="text-3xl font-bold lg:mt-10">Team Member</h2>
          <p className=" mb-5 lg:mx-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
          <div className="flex justify-center space-x-4 mb-8">

            <Link className="text-white" href="#">
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link className="text-white" href="#">
              <i className="fab fa-twitter"></i>
            </Link>

            <Link className="text-white" href="#">
              <i className="fab fa-instagram"></i>
            </Link>

            <div/>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            {["Mark Henry", "Lucky Helen", "Tom Morrow"].map(
              (name, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-4">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <Image
                      alt={`Chef ${name}`}
                      className="w-full"
                      height={900}
                      width={900}
                      src="/ChefGalleryimg3.jpg"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold">{name}</h3>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
      </div>
    </div>


    
</div>


    <div className="bg-white md:m-10  m-5">
      <span className="">
        <h3
          className="text-[#FF9F0D] lg:ml-[150px] text-xl font-flower   
        "
        >
          Testimonials
        </h3>
        <p className=" text-black font-bold text-2xl lg:ml-[150px]">
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
          <p className="mt-5 text-lg text-center">
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

      </div>


 <div className="container mx-auto px-4 py-8 lg:px-[100px]" >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Our Food Menu</h1>
        <p className="text-gray-500 lg:px-[350px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue.
        </p>
      </div>
      <div className="flex justify-center mb-8 ">
        <nav className="space-x-4 border-b-2 border-gray-400 pb-1">
          <Link href="/Menu" className="text-gray-500 hover:border-b-2 hover:text-[#FF9F0D] border-orange-500 pb-1"> Breakfast</Link>
          <Link href="/Menu" className="text-gray-500 hover:border-b-2 hover:text-[#FF9F0D] border-orange-500 pb-1">Lunch     </Link>
          <Link href="/Menu" className="text-gray-500 hover:border-b-2 hover:text-[#FF9F0D] border-orange-500 pb-1">Dinner    </Link>
          <Link href="/Menu" className="text-gray-500 hover:border-b-2 hover:text-[#FF9F0D] border-orange-500 pb-1">Dessert   </Link>
          <Link href="/Menu" className="text-gray-500 hover:border-b-2 hover:text-[#FF9F0D] border-orange-500 pb-1">Drink     </Link>
          <Link href="/Menu" className="text-gray-500 hover:border-b-2 hover:text-[#FF9F0D] border-orange-500 pb-1">Snack     </Link>
        </nav>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex justify-between items-center border-b border-gray-200 py-4">
            <div>
              <h2 className="text-lg font-bold text-black hover:text-orange-500 cursor-pointer">
                Alder Grilled Chinook Salmon
              </h2>
              <p className="text-gray-500">Toasted French bread topped with romano, cheddar</p>
              <p className="text-gray-400">560 CAL</p>
            </div>
            <div className="text-orange-500 text-lg font-bold">32$</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href='/Menu'>
        <button className="bg-transparent border border-orange-500 text-orange-500 py-2 px-4 rounded hover:bg-orange-500 hover:text-white transition duration-300">
          View menu
        </button>
        </Link>
      </div>
    </div>



    </div>
    <footer>
      <Footer/>
    </footer>

    </div>
  );
};

export default FoodPage;
