"use client"
import React, { useState } from "react";
import { FaStar,} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from "../../components/Footer";


type Product = {
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
};

const ShoppingCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { name: "Burger", price: 25, quantity: 1, total: 25, image: "/about-3.png" },
    { name: "Fresh Lime", price: 30, quantity: 1, total: 30, image: "/shopD2.jpg" },
    { name: "Pizza", price: 35, quantity: 1, total: 35, image: "/shopG3.jpg" },
    { name: "Chocolate Muffin", price: 40, quantity: 1, total: 40, image: "/shopG4.jpg" },
    ]);

  const updateQuantity = (index: number, change: number) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity = Math.max(1, updatedProducts[index].quantity + change);
    updatedProducts[index].total = updatedProducts[index].quantity * updatedProducts[index].price;
    setProducts(updatedProducts);
  };

  const calculateTotal = () => {
    const subtotal = products.reduce((acc, product) => acc + product.total, 0);
    const shippingCharge = 20;
    const totalAmount = subtotal + shippingCharge;
    return { subtotal, shippingCharge, totalAmount };
  };

  const { subtotal, shippingCharge, totalAmount } = calculateTotal();

  return (
    <div className="bg-white">


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
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
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
      


    <div className="bg-white min-h-screen mt-10">
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Product</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Total</th>
                <th className="py-2 px-4 border-b">Remove</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="py-4 px-4 border-b flex items-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={900}
                      height={900}
                      className="w-12 h-12 rounded-full mr-4"
                    />


                    <div>
                      <p>{product.name}</p>
                      <div className="text-yellow-500 flex">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <span className="text-gray-400"><FaStar /></span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 border-b">${product.price}</td>
                  <td className="py-4 px-4 border-b">
                    <div className="flex items-center">
                      <button
                        className="px-2 py-1 border"
                        onClick={() => updateQuantity(index, -1)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={product.quantity}
                        className="w-12 text-center border mx-2"
                        readOnly
                      />
                      <button
                        className="px-2 py-1 border"
                        onClick={() => updateQuantity(index, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4 border-b">${product.total}</td>
                  <td className="py-4 px-4 border-b text-red-500 cursor-pointer">X</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-8">
          <div className="bg-white p-4 shadow-md rounded-lg w-full md:w-1/2 mr-0 md:mr-4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Coupon Code</h2>
            <textarea
              className="w-full p-2 border rounded mb-4"
              placeholder="Enter your coupon code here"
              rows={3}
            ></textarea>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter code"
                className="w-full p-2 border rounded-l"
              />
              <button className="bg-[#FF9F0D] text-white px-4 py-2 rounded-r">
                Apply
              </button>
            </div>
          </div>

          <div className="bg-white p-4 shadow-md rounded-lg w-full md:w-1/2">
            <h2 className="text-lg font-semibold mb-4">Total Bill</h2>
            <div className="flex justify-between mb-2">
              <span>Cart Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping Charge</span>
              <span>${shippingCharge}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mb-4">
              <span>Total Amount</span>
              <span>${totalAmount}</span>
            </div>
           <Link href='/CheckOut'>
           <button className="bg-[#FF9F0D] text-white w-full py-2 rounded">
              Proceed to Checkout
            </button>
           </Link>
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

export default ShoppingCart;
