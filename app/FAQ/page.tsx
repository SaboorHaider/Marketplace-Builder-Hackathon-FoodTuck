import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Header from '../../components/Header';
import { TiPlus } from "react-icons/ti";

import Footer from '../../components/Footer';



const Faq = () => {
  const faqs = [
    {
      question: "How we serve food?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet delectus libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How can we get in touch with you?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How is our food quality?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "What will be delivered? And When?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How do we give home delivery?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Is this restaurant 24 hours open?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
  ];

  return (
    <div className="bg-gray-100 mb-[50px]">
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
            <h2 className="text-center text-3xl font-bold ">FAQ</h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-yellow-500 cursor-pointer">
                <Link href="/Error404">Faq</Link>
              </p>
            </div>
          </div>
        </div>
      </header>
 
 
      <div className="max-w-4xl mx-auto text-center pt-10">
        <h1 className="text-3xl font-bold mb-4">Questions Looks Here</h1>
        <p className="text-gray-600 mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>
      </div>
      <div className="max-w-4xl mb-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">{faq.question}</h2>
              <p className='text-end'><TiPlus /></p>
            </div>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Faq;
