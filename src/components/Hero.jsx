import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Navbar } from "./";

const Hero = () => {
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Please enter email");
    }
    try {
      const { data } = await axios.post("/api/email", { email });
      toast.success("Subscribed successfully");
    } catch (err) {
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };

  return (
    <>
      <div className="bg-herobg bg-cover bg-no-repeat bg-center min-h-[100vh] ">
        <div className="px-[40px] py-[30px]">
          <Navbar />
          <div className="lg:w-[70%] mx-auto">
            <Toaster />
            <h1 className="text-white mt-[110px] lg:text-[60px] md:text-[54px] text-[36px] leading-[1.1] tracking-normal font-Epilogue font-extrabold text-center mb-[24px]">
              Find the Perfect gradient for your next projects
            </h1>
            <p className="md:text-[20px] text-[18px] font-Epilogue font-regular text-center text-[#B5C0CC] leading-[1.2]">
              Gradientify is an all-in-one tool that gives you access to 100+
              carefully crafted gradients, generates gradients from an image,
              creates your own gradient, and easily makes tints and shades of a
              single color.
            </p>
            <form
              action=""
              onSubmit={submitHandler}
              className="flex flex-col md:flex-row mt-[44px] w-[90%] md:w-[80%] mx-auto items-center justify-between gap-4"
            >
              {/* <label htmlFor="">Email</label> */}
              <input
                type="email"
                className="w-full flex-1 rounded-md border border-dark-900/70 bg-light-100 p-3 text-lg outline-none transition duration-300 focus:border-blue text-Epilogue text-[20px] font-medium placeholder:text-Epilogue"
                placeholder="hello@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative font-Epilogue text-[20px] font-bold w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Join Waitlist
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
