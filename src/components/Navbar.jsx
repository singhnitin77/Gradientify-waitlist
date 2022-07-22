import React from "react";

const Navbar = () => {
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
        <h3 className="text-[18px] font-Epilogue font-medium text-white">
          Share to Twitter
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
