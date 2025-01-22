import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from "../../components/Footer";

const NotFound = () => {
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
            <h2 className="text-center text-3xl font-bold ">404 Error</h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
              <p>
                <Link href="/" className="cursor-pointer hover:text-yellow-200">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-yellow-500 cursor-pointer">
                <Link href="/Error404">404</Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-orange-500">404</h1>
          <p className="mt-4 text-xl text-black font-bold">
            Oops! Look likes something going wrong
          </p>
          <p className="mt-2 text-gray-600">
            Page Cannot be found! We`ll have it figured out in no time.
          </p>
          <p className=" text-gray-600">
            Menwhile, cheek out these fresh ideas:
          </p>
          <Link href="/">
            <button className="mt-6 px-6 py-2 text-white bg-orange-500 rounded hover:bg-orange-600">
              Go to Home
            </button>
          </Link>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default NotFound;
