"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";
import { useState, useEffect } from "react";
import Header from '@/components/Header';
import { urlFor } from '@/sanity/lib/image';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaArrowRightToBracket } from 'react-icons/fa6';
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}
const Page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
    setCartItems(cart);
    calculateTotal(cart);
  }, []);

  const calculateTotal = (items: CartItem[]) => {
    const totalPrice = items.reduce(
      (acc: number, item: CartItem) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  };

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleIncreaseQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleDecreaseQuantity = (id: number) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  return (
    <div className="mb-[100px]">
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
            <h2 className="text-center text-3xl font-bold ">Shopping Cart</h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
              <p>
                <Link href="/" className="cursor-pointer hover:text-[#FF9F0D]">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-[#FF9F0D] cursor-pointer">
                <Link href="/Error404">Shopping Cart</Link>
              </p>
            </div>
          </div>
        </div>
      </header>

       <div className="mt-12 px-4 md:px-[150px]  lg:block hidden">
  <ul className="flex flex-col md:flex-row justify-between font-bold text-lg text-gray-800 border-b pb-4  ">
    <li className="w-full md:w-2/5 mb-4 md:mb-0">Product</li>
    <li className="w-1/5 text-center">Price</li>
    <li className="w-1/5 text-center">Quantity</li>
    <li className="w-1/5 text-center">Total</li>
    <li className="w-1/5 text-center">Remove</li>
  </ul>
</div>
      <div className="mt-8 px-4 md:px-[150px] justify-center">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between text-gray-700 py-4 border-b"
            >
              <div className="flex items-center gap-4 w-full md:w-2/5">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={""}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                <div>
                  <h1 className="font-semibold">{item.title}</h1>
                  <div className="flex text-[#FF9F0D] text-sm">
                    {[...Array(5)].map((_, i) => (
                      <IoIosStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <h1 className="w-full md:w-1/5 text-center mt-2 md:mt-0">${item.price}</h1>
              <h1 className="w-full md:w-1/5 text-center mt-2 md:mt-0">
                ${item.price * item.quantity}
              </h1>
              <div className="flex justify-center items-center gap-2 border border-gray-200 w-[100px] h-[30px] text-[16px] font-medium text-center rounded-2xl mt-2 md:mt-0">
                <button
                  className="px-2 py-1 rounded"
                  onClick={() => handleDecreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="text-lg font-medium">{item.quantity}</span>
                <button
                  className="px-2 py-1 rounded"
                  onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="w-full md:w-1/5 text-center text-red-500 hover:text-red-800 font-bold mt-2 md:mt-0">X</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
       <div className="flex flex-col md:flex-row px-4 md:px-[150px] justify-between items-start md:items-center mt-12">
   <div className="w-full md:w-1/2">
     <h2 className="text-lg font-bold mb-4">Total Bill</h2>
     <div className="border rounded-md p-4">
       <div className="flex justify-between mb-2 text-[15.5px]">
         <span>Cart Subtotal</span>
         <span>$120.00</span>
       </div>
       <div className="flex justify-between mb-2 text-[15.5px]">
         <span>Shipping Charge</span>
         <span>$0.00</span>
       </div>
       <div className="flex justify-between font-bold text-[15.5px]">
         <span>Total Amount</span>
         <span>{total}</span>
       </div>
     </div>
     <button className="mt-3 w-full flex justify-center bg-[#FF9F0D] text-white py-2 rounded-[5px] hover:bg-yellow-600 transition-colors duration-300">
       <Link href={"/checkout"} className='flex items-center text-center'>
       
         Proceed to Checkout
         <FaArrowRightToBracket  className="text-white text-[15px] items-center ml-1"/>
       </Link>
     </button>
   </div>
 </div>
    </div>
  );
};

export default Page;
