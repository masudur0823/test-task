import React from "react";
import appleIcon from "../assets/images/appleIcon.svg";
import facebookIcon from "../assets/images/facebookIcon.svg";
import googleIcon from "../assets/images/googleIcon.svg";
import whiteLogo from "../assets/images/logo-white.png";

function HeroSection() {
  return (
    <div className="container m-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-0 mx-0 lg-mx-8 xl:mx-16 pt-8 pb-28 md:pt-24 md:pb-24 ">
        <div className="px-5 xl:px-10">
          <p className="uppercase font-medium bg-primary text-[#DCFCE7] inline-block px-2 py-0.5 text-xs rounded-3xl">
            Header
          </p>
          <h1 className="mt-6 text-5xl xl:text-6xl font-bold text-[#2A3342] leading-[3.2rem] lg:leading-[4.2rem]">
            A small business is only as good as its tools.
          </h1>
          <p className="text-paragraph-one text-lg xl:text-xl my-6">
            Lorem ipsum dolor sit amet, consectetur adipisng.
          </p>
          <ul className="pl-3 text-paragraph-one text-lg xl:text-xl [&>*]:mb-2  [&>*]:before:content-checkIcon  [&>*]:before:relative [&>*]:before:top-1.5 [&>*]:before:right-3">
            <li>Mauris pellentesque congue libero nec</li>
            <li>Suspendisse mollis tincidunt</li>
            <li>Praesent varius justo vel justo pulvinar </li>
          </ul>
        </div>
        <div className="w-full">
          <div className="bg-white relative  py-10 lg:py-16 px-10 lg:px-20 w-[95%] m-auto md:w-full shadow-[0px 32px 64px -12px rgba(85, 105, 135, 0.08)] rounded-xl">
            <div className="w-16 h-16 bg-primary rounded flex justify-center items-center absolute -top-8 left-1/2 -translate-x-1/2">
              <img src={whiteLogo} alt="" />
            </div>
            <h2 className="text-3xl font-bold text-center">
              Join our community
            </h2>
            <p className="text-lg font-medium text-paragraph-one text-center my-3">
              Start your free trial
            </p>
            <div>
              <label
                htmlFor="email"
                className="text-[#333F51] font-medium block mb-1.5"
              >
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email address"
                className="border border-[#0000000D] rounded py-2 px-3 w-full"
              />
            </div>
            <button className="mt-5 py-2 w-full bg-primary rounded text-white">
              Get Started
            </button>

            <div className="py-5 relative text-[#8896AB] text-center text-xs after:content-[''] after:w-full after:h-[1px] after:bg-[#EEF0F3] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:z-1">
              <span className="relative z-20 bg-white px-4">OR</span>
            </div>

            <div className="flex flex-col gap-4">
              <button className="border rounded text-paragraph-one font-medium py-2 w-full flex gap-2 justify-center">
                <img src={googleIcon} alt="" />
                Sign in with Google
              </button>
              <button className="border rounded text-paragraph-one font-medium py-2 w-full flex gap-2 justify-center">
                <img src={facebookIcon} alt="" />
                Sign in with Facebook
              </button>
              <button className="border rounded text-paragraph-one font-medium py-2 w-full flex gap-2 justify-center">
                <img src={appleIcon} alt="" />
                Sign in with Apple
              </button>
            </div>
            <p className="text-[#333F51] font-medium text-center mt-5">
              Already have an account?{" "}
              <a href="#!" className="text-primary font-medium">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
