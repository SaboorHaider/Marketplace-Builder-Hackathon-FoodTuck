"use client";
import React, { useState, useEffect } from "react";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import Header from "../../components/Header";
import SearchableProductList from "../../components/Searchbar";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaSearch, FaStar } from "react-icons/fa";
import { BiRightArrowCircle } from "react-icons/bi";
const ShopPage = () => {
  const [datas, setDatas] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`
          *[_type == "food"]{
          _id, 
          name, 
          category, 
          price, 
          originalPrice, 
          image, 
          description, 
          available, 
          tags}`);
        setDatas(result);
        setFilteredData(result);
      } catch {
        console.error("Error fetching food data");
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredData(datas.filter(item => item.name.toLowerCase().includes(query)));
  };

 

  return (

    <div className="">


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
            <h2 className="text-center text-2xl font-bold ">Our Shop</h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
              <p>
                <Link href="/" className="cursor-pointer hover:text-[#FF9F0D]">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-[#FF9F0D] cursor-pointer">
                <Link href="/Error404">Menu</Link>
              </p>
            </div>
          </div>
        </div>
      </header>





      <main className="">
      
      <div className="bg-gray-100 justify-center items-center">
      <div className="container mx-auto">

      <div className="grid lg:grid-cols-5 md:grid-cols-5 gap-5  lg:py-[60px] md:py-12  ">


{/*Product*/}
      <div className="w-full lg:col-span-4 md:col-span-4 self-start">
     { error ? (
          <div className="text-center text-red-600 text-lg font-semibold">{error}</div>
        ) : filteredData.length === 0 ? (
          <div className="text-center text-lg font-semibold">No products found.</div>
        ) : (
          <>
<div className="container mx-auto  ">
                  
                  <div className="flex flex-wrap m-4 ">
                    {filteredData.map((items: any) => (
                      <div
                        key={items._id}
                        className="lg:w-1/4 md:w-1/4 p-3 w-full gap-12 items-center justify-center"
                      >
                        <p className="block relative h-30 rounded overflow-hidden ">
                          {items.originalPrice > items.price && (
                            <p className="bg-black p-1 font-bold text-white absolute top-[5%] transform -translate-y-1/2 right-0 text-[13px] rotate-0">
                              {Math.round(
                                ((items.originalPrice - items.price) /
                                  items.originalPrice) *
                                  100
                              )}
                              % OFF
                            </p>
                          )}
                          <Image
                            alt="ProductImage"
                            className="object-cover object-center w-full h-full block"
                            src={urlFor(items.image).url()}
                            width={200}
                            height={200}
                          />
                        </p>
                        <div className="mt-2">
                          <h2 className="text-black title-font text-lg font-medium" >
                            {items.name}
                          </h2>

                          <p className="line-clamp-1">{items.description}</p>
                          <div className="flex py-2 justify-between px-[15px]">
                            <p className="text-[17px] text-black font-bold">
                              ${items.originalPrice}
                            </p>
                            <div className="flex">
                              <p className="line-through font-semibold text-red-600">
                                ${items.price}
                              </p>

                              {items.originalPrice > items.price && (
                                <p className="text-[15px]">
                                  {Math.round(
                                    ((items.originalPrice - items.price) /
                                      items.originalPrice) *
                                      100
                                  )}
                                  % OFF
                                </p>
                              )}
                            </div>
                          </div>
                          <div className=" justify-between items-center">
                          <div className="flex justify-between">
                          <Link href={`/shop/${items._id}`}>
                              <button className="bg-[#FF9F0D] text-white hover:bg-[#FF9F0D] hover:text-gray-200 p-1 transform transition duration-200 cursor-pointer hover:scale-105 rounded-[5px]">
                                View Product
                              </button>
                            </Link>

                          </div>
                           
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                </>
              )}
        </div>        
 {/* Sidebar */}
              <div className="lg:col-span-1 md:col-span-1 hidden shadow-md p-1 px-5 lg:block md:block self-end">
               
               
              <div className="mb-4 flex mt-2">
                <SearchableProductList
                  products={filteredData}
                  handleSearch={handleSearch}
                  searchQuery={searchQuery}
                />
                  <FaSearch className="bg-[#FF9F0D] text-white p-2 text-[36px] rounded-r-xl" />
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Category</h3>
                  <ul>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Sandwiches</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Burger</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Chicken Chup</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Drinks</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Pizza</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Thi</label>
                    </li>
                    <li>
                      <input type="checkbox" id="cat1" className="mr-2" />
                      <label>Non Veg</label>
                    </li>
                  </ul>
                </div>

                {/* Featured Product */}
                <div className="mb-4 ">
                  <h3 className="text-lg font-semibold mb-2">
                    Featured Product
                  </h3>

                  <div className="relative">
                    <Image
                      src="/shopS1.jpg"
                      alt="PerFect Taste 15"
                      width={900}
                      height={900}
                      className="w-[248px] h-[286px] object-cover mb-2"
                    />

                    <div className="absolute inset-0  px-4 text-white">
                      <div className=" p-5 mt-1 ">
                        <p className="font-semibold  text-sm">Perfect Taste</p>
                        <h4 className="font-bold text-lg mt-1">
                          Classic Restaurant
                        </h4>
                        <p className="text-[#FF9F0D] mt-2 text-xs font-semibold">
                          45.00${" "}
                        </p>
                      </div>

                      <div className="lg:mt-28 flex w-[165px] transform transition duration-300 hover:scale-105 cursor-pointer hover:text-orange-500 hover:bg-white">
                        <Link href="/error">
                          <p className="flex text-sm ">
                            Shop Now
                            <BiRightArrowCircle className="text-2xl p-1" />
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 ">
                    <h3 className="text-lg font-semibold mb-2">
                      Filter By Price
                    </h3>
                    <input type="range" className="w-full" />
                    <div className="grid grid-cols-2  text-gray-500 text-xs ">
                      <span className="text-left">From $0 to $8000 </span>
                      <span className="text-right">Filter</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4  ">
                  <h3 className="text-lg font-semibold mb-2">
                    Latest Products
                  </h3>

                  <div className="flex items-center mb-4">
                    <Image
                      src="/ShopS2.jpg"
                      alt="Latest Products"
                      width={900}
                      height={900}
                      className="w-16 h-16 mr-4"
                    />

                    <div>
                      <p className="text-gray-800 text-md font-semibold">Pizza</p>

                      <div className="flex justify-center items-center text-sm">
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                      </div>
                      <span className="text-gray-800">$30.00</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src="/shopS2.jpg"
                      alt="Latest Productst"
                      width={900}
                      height={900}
                      className="w-16 h-16 mr-4"
                    />

                    <div>
                      <p className="text-gray-800 text-md font-semibold">Cupcake</p>

                      <div className="flex justify-center items-center text-sm">
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                      </div>
                      <span className="text-gray-800">$30.00</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src="/shopS2.jpg"
                      alt="Latest Products"
                      width={900}
                      height={900}
                      className="w-16 h-16 mr-4"
                    />

                    <div>
                      <p className="text-gray-800 text-md">Cookies</p>

                      <div className="flex justify-center items-center text-sm">
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                      </div>
                      <span className="text-gray-800">$30.00</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src="/shopS2.jpg"
                      alt="Latest Products"
                      width={900}
                      height={900}
                      className="w-16 h-16 mr-4"
                    />

                    <div>
                      <p className="text-gray-800 text-lg">Burger</p>

                      <div className="flex justify-center items-center text-sm">
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-[#FF9F0D]" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                        <FaStar className="text-gray-400" />
                      </div>
                      <span className="text-gray-800">$30.00</span>
                    </div>
                  </div>
                </div>

                <div className=" overflow-hidden mt-2">
                  <div className="p-3">
                    <h3 className="text-xl font-bold mb-4">Popular Tags</h3>

                    <div className="grid grid-cols-2  gap-2  ">
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left">
                        Services
                      </div>
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left">
                        Pizza
                      </div>
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left col-span-2">
                        Our menu
                      </div>
                     
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left">
                        Cupcake
                      </div>
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left">
                        Burger
                      </div>

                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left  col-span-2">
                        Tandoori Chicken
                      </div>
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left">
                        Cookies
                      </div>

                      
                      <div className="text-gray-600  hover:text-[#FF9F0D] hover:underline cursor-pointer text-left">
                        Our Shop
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>


            

              </div>
              </div>
              </div>
      </main>
    </div>
  );
};

export default ShopPage;