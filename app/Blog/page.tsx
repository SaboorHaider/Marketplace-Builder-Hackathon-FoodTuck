import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { RiAdminFill } from "react-icons/ri";
import {  FaArrowRight, FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaStar } from "react-icons/fa";
import { client } from "../../sanity/lib/client";
import Footer from "../../components/Footer";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  date: string;
  imageUrl: string;
  description: string;
  commentsCount: number;
  author: string;
}

export default async function DatafetechBlog() {
  const query: BlogPost[] = await client.fetch(
    `*[_type == "blogPost"] {
      _id,
      title,
      slug,
      date,
      "imageUrl": image.asset->url,
      description,
      commentsCount,
      author
    }`
  );

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
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute inset-0 lg:m-[70px] justify-center text-center items-center gap-[15px] sm:gap-[20px] lg:gap-[30px] px-4 text-white">
            <h2 className="text-center text-3xl font-bold">Blog List</h2>
            <div className="text-center justify-center items-center flex mt-1">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">Home</Link>
              </p>
              <MdKeyboardArrowRight />
              <p className="text-yellow-500 cursor-pointer">
                <Link href="/Error404">Blog</Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="bg-white py-5 lg:p-20 lg:mx-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Post */}
              <div className="lg:col-span-2">
                {query.map((blogPost) => (
                  <div key={blogPost._id}>
                    <div className="bg-white overflow-hidden">
                      <Image
                        src={blogPost.imageUrl}
                        alt={blogPost.title}
                        width={900}
                        height={900}
                        className="w-full h-64 object-cover object-center"
                      />
                      <div className="py-2">
                        <div className="flex items-center mb-4">
                          <div className="text-orange-500 text-md mr-1">
                            <PiCalendarDotsDuotone />
                          </div>
                          <div className="text-gray-500 text-xs">{blogPost.date}</div>
                          <div className="text-gray-500 text-sm ml-2">|</div>
                          <div className="text-orange-500 text-md mx-2">
                            <TiMessages />
                          </div>
                          <div className="text-gray-500 text-xs">{blogPost.commentsCount}</div>
                          <div className="text-gray-500 text-sm ml-2">|</div>
                          <div className="text-orange-500 text-sm mx-2">
                            <RiAdminFill />
                          </div>
                          <div className="text-gray-500 text-xs">{blogPost.author}</div>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{blogPost.title}</h2>
                        <p className="text-gray-700 mb-4">{blogPost.description}</p>
                        <div className="flex">
                          <Link href="/BlogDetails" className="flex orange-500 mb-5 text-orange-500 p-1 rounded-md hover:text-white hover:bg-orange-600 border-2 border-orange-500">
                            Read More
                            <FaArrowRight className="ml-1 mt-2 text-xs" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Profile */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
                  <div className="p-6">
                    <div className="text-center">
                      <Image
                        src="/blogS1.png"
                        alt="Profile"
                        width={900}
                        height={900}
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold">Saboor Haider</h3>
                      <p className="text-gray-500">Blogger/Photographer</p>
                      <div className="flex justify-center items-center text-yellow-500 my-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <span className="text-gray-500 text-sm ml-2">(1 Review)</span>
                      </div>
                      <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <div className="flex justify-center space-x-4">
                        <a href="#" className="text-gray-500 hover:text-gray-700"><FaFacebookF /></a>
                        <a href="#" className="text-gray-500 hover:text-gray-700"><FaTwitter /></a>
                        <a href="#" className="text-gray-500 hover:text-gray-700"><FaInstagram /></a>
                        <a href="#" className="text-gray-500 hover:text-gray-700"><FaPinterest /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Recent Post</h3>
                    {/* Add Recent Post items */}
                  </div>
                </div>

                {/* Sidebar Filter & Tags */}
                <div className="bg-white shadow-md rounded-sm overflow-hidden mt-2">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Filter By Menu</h3>
                    {/* Add Filter items */}
                  </div>
                </div>

                <div className="bg-white shadow-md rounded-sm overflow-hidden mt-2">
                  <div className="p-3">
                    <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                    {/* Add Tags */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
