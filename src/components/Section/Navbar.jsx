import React from "react";

function Navbar() {
  return (
    <div className="sm:mt-10 w-[100%] sm:w-[85%] md:w-[75%] lg:w-[60%] px-4 sm:px-6 md:px-10 bg-[#151517] border border-[#2e2e30] hover:border-[#484374] transition duration-500 text-white mx-auto flex items-center justify-center sm:gap-5 md:gap-8 rounded-3xl py-3 sm:py-4 shadow-lg">
      <div className=" rounded-2xl  sm:px-4  text-center  ease-in-out">
        <a href="" className="px-4 py-1 rounded-4xl hover:bg-[#272a2d] transition-colors duration-300">Home</a>
      </div>
      <div className="px-4 py-1 rounded-4xl hover:bg-[#272a2d] transition-colors duration-300">
        <a href="">About</a>
      </div>
      <div className="px-4 py-1 rounded-4xl hover:bg-[#272a2d] transition-colors duration-300">
        <a href="">Services</a>
      </div>
      <div className="px-4 py-1 rounded-4xl hover:bg-[#272a2d] transition-colors duration-300">
        <a href="">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
