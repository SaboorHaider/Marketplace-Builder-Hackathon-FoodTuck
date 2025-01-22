import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Footer from '../../components/Footer';


const CheckoutPage = () => {
  return (

    <div className='bg-white' >

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
            <h2 className="text-center text-3xl font-bold ">Cheekout Page</h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-[#FF9F0D] cursor-pointer">
                <Link href="/Error404">Cheekout</Link>
              </p>
            </div>
          </div>
        </div>
      </header>

    <div className="container mx-auto p-4 mt-10"  >
      <div className="flex flex-col lg:flex-row justify-between">


        {/* Shipping Address Form */}
        <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First name</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md p-2" type="text" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last name</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md p-2" type="text" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md p-2" type="email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone number</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md p-2" type="text" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md p-2" type="text" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                <option>Choose country</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                <option>Choose city</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Zip code</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md p-2" type="text" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address 1</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md p-2" type="text" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address 2</label>
              <input className="mt-1 block w-full border border-gray-300 rounded-md p-2" type="text" />
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Billing Address</h2>
            <div className="flex items-center mb-4">
              <input className="h-4 w-4 text-orange-600 border-gray-300 rounded" type="checkbox" />
              <label className="ml-2 block text-sm font-medium text-gray-700">Same as shipping address</label>
            </div>
            <div className="flex justify-between">
             <Link href='/AddCart'>
             <button className="flex items-center text-orange-600 border border-orange-600 hover:bg-orange-500 hover:text-white rounded-md px-4 py-2">
                <i className="fas fa-arrow-left mr-2" />
                Back to cart
              </button></Link>
              <Link href='/Error404'>
              <button className="bg-orange-600 text-white rounded-md px-4 py-2">
                Proceed to shipping
                <i className="fas fa-arrow-right ml-2" />
              </button></Link>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-white p-8 rounded-lg shadow-md mt-8 lg:mt-0">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center">
                <Image alt="Chicken Tikka Kabab" height={900} width={900} className="w-16 h-16 rounded-md" src="/checkoutimg.jpg" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Chicken Tikka Kabab</h3>
                  <p className="text-sm text-gray-500">150 gm net</p>
                  <p className="text-sm text-gray-500">50$</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-gray-200 pt-4">
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>Sub-total</span>
              <span>130$</span>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>Discount</span>
              <span>26%</span>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>Tax</span>
              <span>54.76$</span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-900 mt-4">
              <span>Total</span>
              <span>432.65$</span>
            </div>
            <button className="w-full bg-orange-600   text-white rounded-md px-4 py-2 mt-6">
              Place an order
              <i className="fas fa-arrow-right ml-2" />
            </button>
          </div>
        </div>
      </div>
      </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default CheckoutPage;
