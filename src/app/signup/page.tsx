import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { MdKeyboardArrowRight } from "react-icons/md";

const SignUp = () => {
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
            <h2 className="text-center text-2xl font-bold ">Sign Up</h2>

            <div className=" text-center justify-center items-center flex mt-1 ">
              <p>
                <Link href="/" className="cursor-pointer hover:text-[#FF9F0D]">
                  Home
                </Link>
              </p>
              <MdKeyboardArrowRight />

              <p className="text-[#FF9F0D] cursor-pointer">
                <Link href="/Error404">SignUp</Link>
              </p>
            </div>
          </div>
        </div>
      </header>

      
<div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 lg:p-20 ">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold mb-5">Sign Up</h2>
        <form>
          <div className="mb-3">
            <label className="block relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Name"

                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Email"

                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </label>
          </div>

          <div className="mb-3">
            <label className="block relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Password"

                className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </label>

          </div>
          <div className="flex items-center mb-3">
           
            <input
              type="checkbox"
              id="remember"
              className="mr-2 cursor-pointer"
            />
            <label htmlFor="remember" className="text-xs">
              Remember me?
            </label>
          </div>

          <Link href="/error">
          <button
            type="submit"
            className="w-full bg-[#FF9F0D] text-white py-2 hover:bg-[#FF7F0c] transition duration-200"
          >
            Sign Up
          </button>
          </Link>

          <div className="text-right mt-1">
            <a href="/error" className="text-xs text-gray-500 hover:underline">
              Forgot password?
            </a>
          </div>
         
        </form>
        <div className="flex items-center my-1">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-grow border-t border-gray-300"/>
        </div>

       <Link href='/error'>
       <button
          className="w-full flex items-center justify-center border border-gray-300 py-2 mb-1 hover:bg-gray-100 transition duration-200"
        >
          <Image
            src="/googlelogo.png"
            alt="Google logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign up with Google
        </button>
       </Link>
        

<Link href='/error'>

<button
          className="w-full flex items-center justify-center border border-gray-300 py-2 mb-1 hover:bg-gray-100 transition duration-200"
        >
          <Image
            src="/applelogo.png"
            alt="Apple logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Sign up with Apple
          
        </button>

</Link>




        <div className="text-black text-center text-xs">Already have an account? <Link href='/SignIn' className="hover:font-semibold hover:underline">Sign In</Link></div>
      
      </div>
    </div>

    </div>
  );
};

export default SignUp;
