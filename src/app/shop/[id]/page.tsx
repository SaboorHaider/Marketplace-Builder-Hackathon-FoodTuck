'use client';

import {
  FaArrowLeft,
  FaFacebook,
  FaLinkedin,
  FaLongArrowAltRight,
  FaStar,
  FaInstagram,
} from "react-icons/fa";
import { IoIosGitCompare, IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import RelatedImages from "../../../components/Relimg";
import Similar from "../../../components/Similarpro";
import AddToCart from "../../../components/Cart";
import Header from "../../../components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";

const WishlistButton = () => {
  const [added, setAdded] = useState(false);
  const Icon = added ? IoMdHeart : IoMdHeartEmpty;
  const text = added ? "Added to Wishlist" : "Add to Wishlist";
  const color = added ? "text-red-500" : "text-gray-700";

  return (
    <button
      onClick={() => setAdded(!added)}
      className="flex items-center gap-2 px-4 py-2 border rounded-md hover:text-red-500 transition"
    >
      <Icon className={color} size={24} />
      {text}
    </button>
  );
};

const Page = ({ params }: { params: { id: string } }) => {
  const [datas, setDatas] = useState<any>(null);
  const [relatedImages, setRelatedImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await client.fetch(
        `*[_type == "food" && _id == "${params.id}"][0]{
          name, category, price, originalPrice, image, description, available, tags
        }`
      );
      setDatas(fetchedData);

      if (fetchedData?.tags?.[0]) {
        const images = await client.fetch(
          `*[_type == "food" && "${fetchedData.tags[0]}" in tags][0...3]{ "url": image.asset->url }`
        );
        setRelatedImages(images);
      }
    };

    fetchData();
  }, [params.id]);

  if (!datas) return <p className="text-center py-10">Loading...</p>;

  return (
    <div>
      <header className="bg-black">
        <Header />
        <div className="relative">
          <Image
            src="/mainbg.jpg"
            alt="Header Background"
            width={900}
            height={900}
            className="w-full h-[200px] object-cover opacity-40"
          />
          <div className="absolute inset-0 lg:m-[70px] text-center text-white">
            <h2 className="text-2xl font-bold">Shop Details</h2>
            <div className="flex justify-center items-center mt-1">
              <Link href="/" className="hover:text-[#FF9F0D]">Home</Link>
              <MdKeyboardArrowRight />
              <Link href="/Error404" className="text-[#FF9F0D]">Product Details</Link>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white">
        <div className="px-4 md:px-8 lg:p-[100px]">
          <div className="flex justify-end text-gray-500">
            <Link href="/" className="hover:text-gray-800 flex items-center mr-1">
              <FaArrowLeft />
              <span className="text-xs pl-1">Prev</span>
            </Link>
            <Link href="/" className="hover:text-gray-800 flex items-center">
              <span className="text-xs pr-1">Next</span>
              <FaLongArrowAltRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-8 gap-1 items-start mt-6">
            <div className="lg:col-span-2 md:col-span-3">
              <RelatedImages images={relatedImages} />
              <Image
                src={urlFor(datas.image).url()}
                alt="Product Image"
                width={900}
                height={900}
                className="rounded-sm lg:w-[300px] w-full h-[436px] object-cover cursor-pointer hover:border-2 border-orange-500 transition hover:scale-105"
              />
            </div>

            <div className="lg:col-span-4 md:col-span-4 ml-12">
              <span className={`bg-orange-400 text-xs text-white px-3 py-1 rounded ${datas.available ? "" : "hidden"}`}>
                {datas.available ? "In Stock" : "Out of Stock"}
              </span>

              <h1 className="text-3xl font-bold mt-2">{datas.name}</h1>
              <p className="text-gray-600 mt-2 border-b-2 pb-3">{datas.description}</p>

              <div className="flex flex-col gap-1 mt-6 items-start pb-5 border-b-2 mb-5">
                <div className="flex justify-between gap-5">
                  <p className="text-[20px] text-black font-bold">${datas.originalPrice}</p>
                  <div className="flex gap-1">
                    <p className="line-through text-[20px] font-semibold text-red-500">${datas.price}</p>
                    {datas.originalPrice > datas.price && (
                      <p className="text-[15px]">
                        {Math.round(((datas.originalPrice - datas.price) / datas.originalPrice) * 100)}% OFF
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex gap-5 text-[13px]">
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <h1>{datas.rating} Rating</h1>
                  <h1>{datas.review} Review</h1>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <AddToCart product={{ id: datas.id, title: datas.name, price: datas.price, image: datas.image }} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-5">
                  <WishlistButton />
                  <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:text-blue-500 transition">
                    <IoIosGitCompare />
                    Compare
                  </button>
                </div>
                <h1>Category: {datas.category}</h1>
                <h1>Tags: {datas.tags?.join(", ")}</h1>
              </div>

              <div className="flex gap-4 pt-3">
                Share:
                <Link href='https://www.instagram.com/sabor_110/'><FaInstagram className="text-[20px] hover:text-red-500" /></Link>
                <Link href='https://www.linkedin.com/in/abdul-saboor-b57043288'><FaLinkedin className="text-[20px] hover:text-blue-800" /></Link>
                <Link href='https://www.facebook.com/SaboorHaider110/'><FaFacebook className="text-[20px] hover:text-blue-500" /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="my-[40px]">
          <h1 className="mx-14 font-bold text-[20px]">Similar Products</h1>
          <Link href={`/${datas.category}`}>
            <Similar images={relatedImages} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
