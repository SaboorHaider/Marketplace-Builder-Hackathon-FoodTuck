import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";
import { BsCupHot } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import Service from "../restaurant/servic/page";
import Footer from "../../components/Footer";

const Menu = () => {
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
            <h2 className="text-center text-2xl font-bold ">Our Menu</h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
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
        {/* First Section*/}
        <div className="bg-white text-gray-800">
          <div className="container mx-auto lg:p-[70px] p-4">
            {/* Starter Menu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 ">
              <div className="flex flex-col items-center lg:items-start">
                <Image
                  src="/Menuimg1.png"
                  alt=""
                  width={300}
                  height={300}
                  className="mb-4 lg:ml-10 "
                />
              </div>

              <div className="">
                <h2 className="text-4xl font-bold text-black mb-2">
                  <i>
                    <BsCupHot className="text-xl text-[#FF9F0D]" />
                  </i>
                  Starter Menu
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold hover:text-[#FF9F0D] cursor-pointer">
                        Alder Grilled Chinook Salmon
                      </h3>
                      <p className="text-md text-gray-600">
                        Toasted French bread topped with romano, cheddar
                      </p>
                      <p className="text-sm text-gray-400">560 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-[#FF9F0D]">32$</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold hover:text-[#FF9F0D] cursor-pointer">
                        Berries and creme tart
                      </h3>
                      <p className="text-md text-gray-600">
                        Gorgonzola, ricotta, mozzarella, taleggio
                      </p>
                      <p className="text-sm text-gray-400">700 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-[#FF9F0D]">43$</p>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold hover:text-[#FF9F0D] cursor-pointer">
                        Tormentoso Bush Pizza Pintoage
                      </h3>
                      <p className="text-sm text-gray-600">
                        Ground cumin, avocados, peeled and cubed
                      </p>
                      <p className="text-xs text-gray-400">1000 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-[#FF9F0D]">14$</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold hover:text-[#FF9F0D] cursor-pointer">
                        Spicy Vegan Potato Curry
                      </h3>
                      <p className="text-sm text-gray-600">
                        Spreadable cream cheese, crumbled blue cheese
                      </p>
                      <p className="text-xs text-gray-400">560 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-[#FF9F0D]">35$</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Course */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:border-none border-t-2 border-[#FF9F0D]  p-4">
              <div className="lg:ml-10">
                <h2 className="text-3xl font-bold text-black mb-2">
                  <i>
                    <BsCupHot className="text-xl text-[#FF9F0D]" />
                  </i>
                  Main Course
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold hover:text-[#FF9F0D] cursor-pointer">
                        Optic Big Breakfast Combo Menu
                      </h3>
                      <p className="text-md text-gray-600">
                        Toasted French bread topped with romano, cheddar
                      </p>
                      <p className="text-sm text-gray-400">560 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-orange-500">32$</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold hover:text-[#FF9F0D] cursor-pointer">
                        Cashew Chicken With Stir-Fry
                      </h3>
                      <p className="text-md text-gray-600">
                        Gorgonzola, ricotta, mozzarella, taleggio
                      </p>
                      <p className="text-sm text-gray-400">700 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-orange-500">43$</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold hover:text-[#FF9F0D] cursor-pointer">
                        Vegetables & Green Salad
                      </h3>
                      <p className="text-sm text-gray-600">
                        Ground cumin, avocados, peeled and cubed
                      </p>
                      <p className="text-xs text-gray-400">1000 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-orange-500">14$</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold hover:text-[#FF9F0D] cursor-pointer">
                        Spicy Vegan Potato Curry
                      </h3>
                      <p className="text-sm text-gray-600">
                        Spreadable cream cheese, crumbled blue cheese
                      </p>
                      <p className="text-xs text-gray-400">560 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-orange-500">35$</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-end">
                <Image
                  src="/menuimg2.png"
                  alt="mainCourse"
                  width={300}
                  height={300}
                  className="mb-4  md:items-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Section*/}
        <Service />

        {/* Third Section*/}
        <div className="bg-white text-gray-800">
          <div className="container mx-auto lg:p-[70px] p-4">
            {/* Starter Menu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 ">
              <div className="flex flex-col items-center lg:items-start">
                <Image
                  src="/menuimg3.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="mb-4 lg:ml-10 "
                />
              </div>

              <div className="">
                <h2 className="text-3xl font-bold text-black mb-2">
                  <i>
                    <BsCupHot className="text-xl text-[#FF9F0D] " />
                  </i>{" "}
                  Dessert
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold hover:text-[#FF9F0D] cursor-pointer">Fig and lemon cake</h3>
                      <p className="text-md text-gray-600">
                        Toasted French bread topped with romano, cheddar
                      </p>
                      <p className="text-sm text-gray-400">560 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-[#FF9F0D] ">32$</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold hover:text-[#FF9F0D] cursor-pointer">
                        Creamy mascarpone cake
                      </h3>
                      <p className="text-md text-gray-600">
                        Gorgonzola, ricotta, mozzarella, taleggio
                      </p>
                      <p className="text-sm text-gray-400">700 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-[#FF9F0D] ">43$</p>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold hover:text-[#FF9F0D] cursor-pointer">
                        Pastry, blueberries, lemon juice
                      </h3>
                      <p className="text-sm text-gray-600">
                        Ground cumin, avocados, peeled and cubed
                      </p>
                      <p className="text-xs text-gray-400">1000 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-[#FF9F0D] ">14$</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold hover:text-[#FF9F0D] cursor-pointer">Pain au chocolat</h3>
                      <p className="text-sm text-gray-600">
                        Spreadable cream cheese, crumbled blue cheese
                      </p>
                      <p className="text-xs text-gray-400">560 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-[#FF9F0D] ">35$</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Course */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:border-none border-t-2 border-orange-300  p-4">
              <div className="lg:ml-10">
                <h2 className="text-3xl font-bold text-black mb-2">
                  <i>
                    <BsCupHot className="text-xl text-[#FF9F0D] " />
                  </i>{" "}
                  Drinks
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold hover:text-[#FF9F0D] cursor-pointer">Caffè macchiato</h3>
                      <p className="text-md text-gray-600">
                        Toasted French bread topped with romano, cheddar
                      </p>
                      <p className="text-sm text-gray-400">560 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-[#FF9F0D] ">32$</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold hover:text-[#FF9F0D] cursor-pointer ">
                        Aperol Spritz Capacianno
                      </h3>
                      <p className="text-md text-gray-600">
                        Gorgonzola, ricotta, mozzarella, taleggio
                      </p>
                      <p className="text-sm text-gray-400">700 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-[#FF9F0D] ">43$</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold hover:text-[#FF9F0D] cursor-pointer">Caffe Latte Campuri</h3>
                      <p className="text-sm text-gray-600">
                        Ground cumin, avocados, peeled and cubed
                      </p>
                      <p className="text-xs text-gray-400">1000 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-[#FF9F0D] ">14$</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold hover:text-[#FF9F0D] cursor-pointer" >
                        Tormentoso BushTea Pintoage
                      </h3>
                      <p className="text-sm text-gray-600">
                        Spreadable cream cheese, crumbled blue cheese
                      </p>
                      <p className="text-xs text-gray-400">560 CAL</p>
                    </div>
                    <p className="text-lg font-bold text-[#FF9F0D] ">35$</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-end">
                <Image
                  src="/menuimg4.jpg"
                  alt=""
                  width={300}
                  height={300}
                  className="mb-4  md:items-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/*Fourth Section */}

        <div className="bg-white flex items-center justify-center pb-10 ">
          <div className="text-center">
            <p className="text-gray-500">Partners &amp; Clients</p>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              We work with the best people
            </h1>
            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6   justify-center space-x-8 ">
              <Image
                src="/menuimg5.png"
                alt="Restaurant logo with a cloche and cutlery"
                width={100}
                height={100}
                className="h-16"
              />
              <Image
                alt="Bakery logo with a rolling pin and wheat"
                src="/menuimg6.png"
                width={100}
                height={100}
                className="h-16"
              />
              <Image
                alt="Fork & Spoon logo with a fork and spoon crossed"
                src="/menuimg7.png"
                width={100}
                height={100}
                className="h-16"
              />
              <Image
                alt="Wolf Coffee logo with a wolf and coffee cup"
                src="/menuimg8.png"
                width={100}
                height={100}
                className="h-16"
              />
              <Image
                alt="Bistro logo with a cloche"
                src="/menuimg9.png"
                width={100}
                height={100}
                className="h-16"
              />
              <Image
                alt="Bakery logo with a cupcake"
                src="/menuimg10.png"
                width={100}
                height={100}
                className="h-16"
              />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Menu;
