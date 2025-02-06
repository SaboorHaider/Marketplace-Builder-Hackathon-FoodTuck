"use client";
import { useState } from "react";

interface AddToCartProps {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
  };
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  
    // Create a unique cart entry for the product
    const cartItem = { ...product, quantity };
  
    // Add the new cart item without checking for an existing product
    cart.push(cartItem);
  
    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  
    alert("Product added to cart!");
  };
  
  return (
    <div className="flex items-center gap-4">
      <div className="flex border border-gray-300 rounded">
        <button
          onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
          className="px-2 py-1 text-gray-600 hover:bg-gray-200 justify-center items-center"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(Number(e.target.value), 1))}
          className="w-10 text-center border-l border-r border-gray-300 focus:outline-none"
        />
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="px-2 py-1 text-gray-600 hover:bg-gray-200 justify-center items-center"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="ml-2 px-3 py-1 bg-orange-500 text-white rounded cursor-pointer hover:text-orange-500 hover:bg-gray-200 transition 
"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
