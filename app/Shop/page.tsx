"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import { client } from "../../sanity/lib/client";
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/Search";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { BiRightArrowCircle } from "react-icons/bi";
import Footer from "../../components/Footer";

// Define food type
type Food = {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];
  imageUrl: string;
  description: string;
  available: boolean;
};

const Datafetchfood: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("Newest");
  const [showCount, setShowCount] = useState<number>(10);
  const [categories, setCategories] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(8000); // Default max value

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query: Food[] = await client.fetch(
          `*[_type == "food"] {
          _id,
          name,
          category,
          price,
          originalPrice,
          tags,
          "imageUrl": image.asset->url,
          description,
          available
        }`
        );

        setFoods(query);
        setFilteredFoods(query);

        const uniqueCategories = [
          ...new Set(query.map((food: Food) => food.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Sorting handler
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortOrder(value);

    const sortedFoods: Food[] = [...filteredFoods];

    if (value === "Newest") {
      sortedFoods.sort((a, b) => b._id.localeCompare(a._id));
    } else if (value === "Price: Low to High") {
      sortedFoods.sort((a, b) => a.price - b.price);
    } else if (value === "Price: High to Low") {
      sortedFoods.sort((a, b) => b.price - a.price);
    }

    setFilteredFoods(sortedFoods);
  };

  // Show count handler
  const handleShowChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setShowCount(Number(event.target.value));
  };

  // Search handler
  const handleSearch = (query: string) => {
    if (query.trim()) {
      const filteredResults = foods.filter((food) =>
        food.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFoods(filteredResults);
    } else {
      setFilteredFoods(foods);
    }
  };

  // Category filter handler
  const handleCategoryChange = (category: string) => {
    let filtered = foods;

    if (category !== "All") {
      filtered = foods.filter((food) => food.category === category);
    }

    setFilteredFoods(filtered);
  };

  // Price range filter handler
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  // Apply price filter
  const handleFilter = () => {
    const filtered = foods.filter((food) => food.price <= price);
    setFilteredFoods(filtered);
  };

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
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute inset-0 lg:m-[70px] justify-center text-center items-center gap-[15px] sm:gap-[20px] lg:gap-[30px] px-4 text-white">
            <h2 className="text-center text-2xl font-bold">Our Shop</h2>
            <div className="text-center justify-center items-center flex mt-1">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
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

      <main>
        <div className="bg-gray-100">
          <div className="container mx-auto lg:p-[70px] p-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-3/4 p-4">
                <div className="flex lg:justify-start justify-between items-center mb-10">
                  {/* Sort by price */}
                  <div className="filter-sort">
                    <select value={sortOrder} onChange={handleSortChange}>
                      <option value="Newest">Newest</option>
                      <option value="Price: Low to High">
                        Price: Low to High
                      </option>
                      <option value="Price: High to Low">
                        Price: High to Low
                      </option>
                    </select>

                    <select
                      value={showCount}
                      onChange={handleShowChange}
                      className="ml-2"
                    >
                      <option value={10}>Show 10</option>
                      <option value={20}>Show 20</option>
                      <option value={30}>Show 30</option>
                    </select>
                  </div>
                </div>

                {/* Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                  {filteredFoods.slice(0, showCount).map((food) => (
                    <div
                      key={food._id}
                      className="p-4 transform bg-gray-200 rounded-md transition duration-300 hover:scale-105 cursor-pointer"
                    >
                      <div>
                        <Link href="/ShopDetails">
                          <Image
                            src={food.imageUrl}
                            alt={food.name}
                            height={900}
                            width={900}
                            className="w-full h-40 object-cover mb-2"
                          />
                          <h3 className="text-lg font-semibold text-gray-800">
                            {food.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Category: {food.category}
                          </p>
                          <p className="text-sm text-gray-800">
                            Price:{" "}
                            <span className="text-[#FF9F0D]">
                              ${food.price}
                            </span>
                            {food.originalPrice && (
                              <span className="text-gray-400 line-through ml-2">
                                ${food.originalPrice}
                              </span>
                            )}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            Tags: {food.tags?.join(", ") || "No Tags"}
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            {food.description}
                          </p>
                          <p
                            className={`text-sm font-medium mt-3 ${
                              food.available ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {food.available ? "Available" : "Not Available"}
                          </p>
                          <button className="mt-4 bg-[#FF9F0D] text-white w-full text-sm px-4 py-2 rounded-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
                            View More
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}

              <div className="w-full lg:w-1/4 shadow-md">
                <div className="mb-4 flex">
                  <SearchBar onSearch={handleSearch} />
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Category</h3>
                  <ul className="grid grid-cols-2 gap-2 ">
                    <li className="text-gray-600 my-2 border-2 p-1 hover:text-[#FF9F0D] hover:underline cursor-pointer text-center">
                      <button onClick={() => handleCategoryChange("All")}>
                        All
                      </button>
                    </li>
                    {categories.map((category) => (
                      <li
                        key={category}
                        className="text-gray-600 text-center my-2 border-2  hover:text-[#FF9F0D] hover:underline cursor-pointer"
                      >
                        <button onClick={() => handleCategoryChange(category)}>
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured Product */}
                <div className="my-4 ">
                  <h3 className="text-lg font-semibold">Featured Product</h3>
                  <div className="relative">
                    <Image
                      src="/shopS1.jpg"
                      alt="PerFect Taste 15"
                      width={900}
                      height={900}
                      className="w-[full] h-[286px] object-cover"
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
                      <div className="lg:mt-28 flex w-[215px] transform transition duration-300 hover:scale-105 cursor-pointer hover:text-orange-500 hover:bg-white">
                        <Link href="/Error404">
                          <p className="flex text-sm ">
                            Shop Now
                            <BiRightArrowCircle className="text-2xl p-1" />
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filter By Price*/}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold ">Filter By Price</h3>
                  <input
                    type="range"
                    min="0"
                    max="8000"
                    value={price}
                    onChange={handlePriceChange}
                    className="w-full"
                  />
                  <div className="grid grid-cols-2 text-gray-500 text-sm">
                    <span className="text-left">From $0 to ${price}</span>
                    <span
                      className="text-right cursor-pointer text-blue-600"
                      onClick={handleFilter}
                    >
                      Filter
                    </span>
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
                      <p className="text-gray-800 text-lg">Pizza</p>

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
                      alt="Latest Productst"
                      width={900}
                      height={900}
                      className="w-16 h-16 mr-4"
                    />

                    <div>
                      <p className="text-gray-800 text-lg">Cupcake</p>

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
                      <p className="text-gray-800 text-lg">Cookies</p>

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

            <div>
              <ul className="flex justify-center ">
                <li>
                  <RxDoubleArrowLeft className="m-1 cursor-pointer text-orange-500 px-2 border-2 text-4xl" />
                </li>
                <li className="px-2 border-2 text-2xl cursor-pointer text-orange-500 m-1">
                  1
                </li>
                <li className="px-2 border-2 text-2xl cursor-pointer bg-orange-500 m-1 text-white">
                  2
                </li>
                <li className="px-2 border-2 text-2xl cursor-pointer text-orange-500 m-1">
                  3
                </li>
                <li>
                  <RxDoubleArrowRight className="m-1 px-2 border-2 cursor-pointer  text-orange-500 text-4xl " />
                </li>
              </ul>
            </div>

            <div></div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Datafetchfood;
