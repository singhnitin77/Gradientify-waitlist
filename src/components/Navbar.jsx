import React from "react";

const Navbar = () => {
  const twtlink =
    "https://twitter.com/intent/tweet?text=Checkout%20gradientify.com%20by%20@thenitinsingh7%0A%0AGradientify%20is%20a%20web-based%20all-in-one%20gradient%20editor,%20that%20consists%20of%20100%20beautiful%20gradients%20for%20your%20next%20projects,%20Copy%20CSS%20Snippets,%20Download%20PNGs,%20Create%20your%20gradient,%20and%20many%20more%20amazing%20features.%20Join%20the%20waitlist%20to%20get%20early%20access%20and%20be%20the%20first%20one%20to%20try%20gradientify.";

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex justify-start items-center">
        <p className="text-[18px] font-Epilogue font-extrabold text-white">
          Gradientify
        </p>
      </div>
      {/* <div className="lg:flex xl:flex flex-auto items-center justify-center md:space-x-6 hidden">
        <p className="text-[18px] font-medium font-Epilogue text-white">
          Gradient Generator
        </p>
        <p className="text-[18px] font-medium font-Epilogue text-white">
          Tints & Shades
        </p>
        <p className="text-[18px] font-medium font-Epilogue text-white">
          Features
        </p>
        <p className="text-[18px] font-medium font-Epilogue text-white">
          About
        </p>
      </div> */}
      <div className="flex self-end">
        <a href={twtlink} target="_blank" rel="noreferrer">
          <h3 className="text-[18px] font-Epilogue font-medium text-white">
            Share to Twitter
          </h3>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
