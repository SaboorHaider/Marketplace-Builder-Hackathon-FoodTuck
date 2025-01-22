'use client'

import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaPlus, FaMinus, FaCaretRight } from 'react-icons/fa'; // Import icons from react-icons

interface CartItem {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string;
  image: string;
  description: string;
  available: boolean;
  quantity: number;
}

export default function Page() {
  const [CartItems, setCartItems] = useState<CartItem[]>([]);

  const incrementCartItem = (index: number) => {
    const updatedCart = CartItems.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decrementCartItem = (index: number) => {
    const updatedCart = CartItems.map((item, i) =>
      i === index && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const removeCartItem = (index: number) => {
    const updatedCart = CartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  // Simulate initial cart data (replace this with actual data fetching)
  useEffect(() => {
    const initialCart: CartItem[] = [
      // Add some mock cart items for testing
      {
        _id: '1',
        name: 'Product 1',
        category: 'Category 1',
        price: 20,
        originalPrice: 25,
        tags: 'Tag1',
        image: '',
        description: 'Description 1',
        available: true,
        quantity: 2,
      },
      {
        _id: '2',
        name: 'Product 2',
        category: 'Category 2',
        price: 15,
        originalPrice: 18,
        tags: 'Tag2',
        image: '',
        description: 'Description 2',
        available: true,
        quantity: 1,
      },
    ];
    setCartItems(initialCart);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-hero-image bg-cover bg-center h-80 w-full flex justify-center items-center mt-[30px]">
        <div className="">
          <h1 className="text-white font-sans text-5xl font-bold">Shopping Cart</h1>
          <div className="flex justify-center items-center">
            <h2 className="text-white leading-[56px] text-inter"> Home </h2>
            <FaCaretRight className="text-white" /> 
            <h2 className="text-primary">Shopping cart</h2>
          </div>
        </div>
      </div>

      {CartItems.length === 0 ? (
        <h1 className="text-2xl text-center font-sans mt-36">Sorry! your cart is empty...</h1>
      ) : null}
      <div className="lg:mx-[150px]">
        <div>
          {CartItems.length !== 0 ? (
            <div className="grid grid-cols-5 place-items-center font-bold mt-14">
              <h1 className="mr-32">Product</h1>
              <h1 className="hidden md:flex">Price</h1>
              <h1>Quantity</h1>
              <h1>Total</h1>
              <h1>Remove</h1>
            </div>
          ) : null}

          {CartItems.map((item, index) => (
            <div key={item._id}>
              <div className="grid grid-cols-5 place-items-center mt-10">
                <div className="flex justify-start gap-3 w-[200px]">
                  <div className="w-[100px] h-[100px] bg-gray-300 rounded-md flex justify-center items-center">
                    {/* Placeholder for image */}
                    <span className="text-xl text-white">{item.name[0]}</span>
                  </div>
                  <h3 className="font-bold">{item.name}</h3>
                </div>
                <h3>${item.price}</h3>
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center border gap-5 w-30 h-10 px-8 rounded-full">
                    <button onClick={() => decrementCartItem(index)}>
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>

                    <button onClick={() => incrementCartItem(index)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <h2 className="font-bold">${item.price * item.quantity}</h2>
                <div className="hover:opacity-30 cursor-pointer">
                  <FaTrashAlt onClick={() => removeCartItem(index)} />
                </div>
              </div>
              <div className="border mt-5"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
