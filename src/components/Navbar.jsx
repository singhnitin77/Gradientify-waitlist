import React, { useState } from "react";
import { Twitter } from "./";

const Navbar = () => {
  return (
    <div className="w-full px-6 py-3 bg-[#080808] flex items-center justify-between">
      <div className="flex justify-start items-center">
        <p className="text-[20px] font-Epilogue font-extrabold text-white">
          Gradientify
        </p>
      </div>
      <div className="lg:flex xl:flex flex-auto items-center justify-center md:space-x-6 hidden">
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
      </div>
      <div className="flex self-end">
        <Twitter />
      </div>
    </div>
  );
};

export default Navbar;
