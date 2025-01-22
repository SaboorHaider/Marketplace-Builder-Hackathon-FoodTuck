"use client";
import Header from "../../components/Header";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const countries = [
  "Australia",
  "Canada",
  "India",
  "Pakistan",
  "United Kingdom",
  "United States",
  "Germany",
  "France",
  "Italy",
  "Spain",
];


export default function CheckoutPage() {
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
  const [generatedUserId, setGeneratedUserId] = useState("");

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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Generate User ID
    const userId = `USER-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedUserId(userId);

    const formData = {
      userId,
      fullName: `${userDetails.firstName} ${userDetails.lastName}`,
      email: userDetails.email,
      phone: userDetails.phone,
      company: userDetails.company,
      address: `${userDetails.address1}, ${userDetails.address2}, ${userDetails.city}, ${userDetails.zipCode}, ${userDetails.country}`,
      orderTotal: calculateTotal(),
      cartItems: cartItems
        .map(
          (item) =>
            `${item.title} (Qty: ${item.quantity}, Price: $${(
              item.price * item.quantity
            ).toFixed(2)})`
        )
        .join("\n"),
      orderStatus: "Order Confirmed",
    };

    console.log("Order Details:", formData);
    setShowPopup(true);
  };

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-2 bg-white container py-8 lg:px-[180px] lg:mx-[40px] px-9 my-[50px]">
        {/* Shipping Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField label="First Name" id="firstName" value={userDetails.firstName} handleChange={handleInputChange} />
              <InputField label="Last Name" id="lastName" value={userDetails.lastName} handleChange={handleInputChange} />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField label="Email" id="email" type="email" value={userDetails.email} handleChange={handleInputChange} />
              <InputField label="Phone" id="phone" type="tel" value={userDetails.phone} handleChange={handleInputChange} />
            </div>
            <InputField label="Company" id="company" value={userDetails.company} handleChange={handleInputChange} />
            
            {/* Country Dropdown */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select
                id="country"
                name="country"
                value={userDetails.country}
                onChange={handleInputChange}
                className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>

            <InputField label="City" id="city" value={userDetails.city} handleChange={handleInputChange} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField label="Zip Code" id="zipCode" value={userDetails.zipCode} handleChange={handleInputChange} />
              <InputField label="Address 1" id="address1" value={userDetails.address1} handleChange={handleInputChange} />
            </div>
            <InputField label="Address 2" id="address2" value={userDetails.address2} handleChange={handleInputChange} />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600 focus:outline-none"
          >
            Submit
          </button>
        </form>

        {/* Order Summary */}
        <div className="p-6 rounded-lg border-2 border-gray-300 mx-[40px] h-[520px]">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="rounded-md object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-sm text-gray-500">Price: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2 border-t pt-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${calculateTotal()}</span>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">Order Details</h2>
            <p><strong>User ID:</strong> {generatedUserId}</p>
            <p><strong>Full Name:</strong> {userDetails.firstName} {userDetails.lastName}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Order Total:</strong> ${calculateTotal()}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function InputField({ label, id, type = "text", value, handleChange }: any) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={handleChange}
        className="lg:w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
}
