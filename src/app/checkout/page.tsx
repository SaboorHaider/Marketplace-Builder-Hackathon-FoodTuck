"use client";
import Header from "../../components/Header";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { urlFor } from "../../sanity/lib/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}
export default function CheckoutPage() {
async function handleSubmit(event: any) {
  event.preventDefault();
  const formData = new FormData(event.target);
  formData.append("access_key", "ccc7d744-1d5d-44ad-a86c-3995ad6efda6");
  formData.append("userId", generatedUserId);
  formData.append("fullName", `${userDetails.firstName} ${userDetails.lastName}`);
  formData.append("email", userDetails.email);
  formData.append("phone", userDetails.phone);
  formData.append("company", userDetails.company);
  formData.append(
    "address",
    `${userDetails.address1}, ${userDetails.address2}, ${userDetails.city}, ${userDetails.zipCode}, ${userDetails.country}`
  );
  formData.append("orderTotal", calculateTotal());
  const cartDetails = cartItems
    .map(
      (item) =>
        `${item.title} (Qty: ${item.quantity}, Price: $${(item.price * item.quantity).toFixed(2)})`
    )
    .join("\n");
  formData.append("cartItems", cartDetails);
  formData.append("orderStatus", "Order Confirmed");
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",},
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log("Email sent successfully:", result);
    } else {
      console.error("Failed to send email:", result);
    }
    setShowPopup(true);
  } catch (error) {
    console.error("Error during form submission:", error);
    alert("An error occurred. Please try again.");
  }}
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    city: "",
    zipCode: "",
    address1: "",
    address2: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [generatedUserId] = useState("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
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
        className="w-full h-[200px] object-cover "
      />

      <div className="absolute inset-0 lg:m-[70px] justify-center  text-center items-center gap-[15px] sm:gap-[20px] lg:gap-[30px] px-4 text-white">
        <h2 className="text-center text-3xl font-bold ">CheckOut Page</h2>

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


      <div className="grid gap-8 lg:grid-cols-2 container py-8 lg:px-[180px] lg:mx-[40px] px-9 my-[50px]">

        {/* Left Column - Shipping Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <input 
                  name="firstName"
                  type="text"
                  id="firstName"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <input 
                  name="lastName"
                  type="text"
                  id="lastName"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input 
                  name="email"
                  type="email"
                  id="email"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <input 
                  name="phone"
                  type="tel"
                  id="phone"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input 
                  name="company"
                  type="text"
                  id="company"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.company}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.country}
                  onChange={handleInputChange}
                >
<option value="">Choose country</option>
<option value="pk">Pakistan</option>
<option value="ir">Iran</option>
<option value="iq">Iraq</option>
<option value="in">India</option>
<option value="us">United States</option>
<option value="uk">United Kingdom</option>
<option value="ca">Canada</option>
<option value="cn">China</option>
<option value="jp">Japan</option>
<option value="de">Germany</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input 
                  name="city"
                  type="text"
                  id="city"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.city}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Zip code
                </label>
                <input 
                  name="zipCode"
                  type="text"
                  id="zipCode"
                  className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={userDetails.zipCode}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="address1" className="block text-sm font-medium text-gray-700 mb-1">
                Address 1
              </label>
              <input 
                name="address1"
                type="text"
                id="address1"
                className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={userDetails.address1}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
                Address 2
              </label>
              <input 
                name="address2"
                type="text"
                id="address2"
                className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                value={userDetails.address2}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
  type="submit"
  className="px-6 py-3 flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg rounded-lg text-sm font-semibold transition-all transform hover:scale-105 hover:from-orange-600 hover:to-yellow-500 focus:outline-none focus:ring-4 focus:ring-orange-300 active:scale-95 w-fu h-12"
>
  Submit
</button>

          <h1>Order will be delivered in 30 minutes. Only cash on delivery is available for now. Other payment options coming soon.
        </h1>
        </form>
       
        <div className="p-6 rounded-lg border-2 border-gray-300 mx-[40px] h-[520px]">
           <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
           <div className="space-y-4">
             {cartItems.map((item) => (
               <div key={item.id} className="flex items-center space-x-4">
                 <div className="relative h-16 w-16">
                   <Image
                     src={urlFor(item.image).url()}
                     alt={item.title}
                     width={64}
                     height={64}
                     className="rounded-md object-cover"
                   />
                 </div>
                 <div className="flex-1">
                   <h3 className="font-medium">{item.title}</h3>
                   <p className="text-sm text-gray-500">
                     Quantity: {item.quantity}
                   </p>
                   <p className="text-sm text-gray-500">
                     Price: ${(item.price * item.quantity).toFixed(2)}
                   </p>
                 </div>
               </div>
             ))}
           </div>
           <div className="mt-6 space-y-2 border-t pt-4">
             <div className="flex justify-between text-sm">
               <span className="text-gray-600">Subtotal</span>
               <span className="font-medium">${calculateTotal()}</span>
             </div>
             <div className="flex justify-between border-t pt-2">
               <span className="font-semibold">Total</span>
               <span className="font-semibold">${calculateTotal()}</span>
             </div>
             <div className="flex justify-between border-t pt-2">
               <span className="font-semibold">Delivery Charges</span>
               <span className="font-semibold">Free Delivery</span>
             </div>
           </div>
         </div>
       </div>
        {showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-lg font-semibold mb-4">Order Details</h2>
      <p><strong>User ID:</strong> {generatedUserId}</p>
      <p><strong>Full Name:</strong> {userDetails.firstName} {userDetails.lastName}</p>
      <p><strong>Email:</strong> {userDetails.email}</p>
      <p><strong>Phone:</strong> {userDetails.phone}</p>
      <p><strong>Company:</strong> {userDetails.company}</p>
      <p><strong>Address:</strong> {userDetails.address1}, {userDetails.address2}, {userDetails.city}, {userDetails.zipCode}, {userDetails.country}</p>
      <p className="border-b-2 border-orange-500 mb-3"><strong>Order Total:</strong> ${calculateTotal()}</p>
      <h1 className="">Thank you! We have received your order. It will be delivered to you shortly!</h1>
      
      <button
  onClick={() => setShowPopup(false)}
  className="mt-3 px-4 py-2 bg-[#FF9F0D] w-full text-white rounded-[5px] shadow-lg hover:bg-orange-600 focus:ring-orange-300 transition-all duration-200 hover:scale-105"
>
  Close
</button>

    </div>
  </div>
)}

      </div>
  );
}
