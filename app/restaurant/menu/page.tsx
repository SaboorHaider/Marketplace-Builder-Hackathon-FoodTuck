import React from 'react';
import Image from "next/image";

const menuItems = [
  { name: 'Lettuce Leaf', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Menuitem-1.png' },
  { name: 'Fresh Breakfast', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/Menuitem2.png' },
  { name: 'Mild Butter', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Menuitem3.png' },
  { name: 'Fresh Bread', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Menuitem4.png' },
  { name: 'Glow Cheese', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Menuitem5.png' },
  { name: 'Italian Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '14.5$', image: '/Menuitem6.png' },
  { name: 'Slice Beef', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Menuitem7.png' },
  { name: 'Mushroom Pizza', description: 'Lacus nisl, et ac dapibus velit in consequat.', price: '12.5$', image: '/Menuitem8.png' },
];

const MenuCom = () => {
  return (
    <section className='bg-black px-8 sm:px-16 lg:px-[135px] text-white py-12'>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold font-flower text-center mb-2 text-[#FF9F0D]">Choose & Pick</h2>
        <h1 className="text-3xl font-bold text-center mb-8"><span className="text-[#FF9F0D]">Fr</span>om Our Menu</h1>

        <div className="flex justify-center mb-8">
          <ul className="flex flex-wrap justify-evenly space-x-2 sm:space-x-4 ">
            <li className="cursor-pointer hover:text-[#FF9F0D]  transform transition hover:scale-105">Breakfast</li>
            <li className="cursor-pointer hover:text-[#FF9F0D]  transform transition hover:scale-105">Lunch</li>
            <li className="cursor-pointer hover:text-[#FF9F0D]  transform transition hover:scale-105">Dinner</li>
            <li className="cursor-pointer hover:text-[#FF9F0D]  transform transition hover:scale-105">Dessert</li>
            <li className="cursor-pointer hover:text-[#FF9F0D]  transform transition hover:scale-105">Drink</li>
            <li className="cursor-pointer hover:text-[#FF9F0D]  transform transition hover:scale-105">Snack</li>
            <li className="cursor-pointer hover:text-[#FF9F0D]  transform transition hover:scale-105">Soups</li>
          </ul>
        </div>

        <div className='flex flex-col lg:flex-row'>
          <div className="hidden lg:block w-1/3 md:w-[50%]">
            <Image 
            src='/platemean.png'
             alt="Menu Decor" 
             width={900}
             height={900}
              />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 flex-grow">
            {menuItems.map((item, index) => (
              <div key={index} className="flex 00 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 shadow-lg">
                <div className="w-1/3 ">
                  <Image 
                  src={item.image} 
                  alt={item.name} 
                  width={100} 
                  height={100} 
                  className="object-cover" />
                </div>
                <div className="p-4 w-2/3">
                  <h1 className="text-lg font-semibold ">{item.name}</h1>
                  <p className="text-[11px] text-gray-400 mb-2 ">{item.description}</p>
                  <h2 className="text-[#FF9F0D] font-bold">{item.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCom;