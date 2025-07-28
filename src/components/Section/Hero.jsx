import React from "react";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-12 mt-10">
      <div className="w-full bg-[#19191d] text-white rounded-3xl shadow-lg p-6 sm:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        
        {/* Left side - User Data */}
        <div className="w-full lg:w-[40%] flex flex-col lg:m-20 lg:gap-4 text-center lg:text-left">
          <h2 className="font-bold mb-4 text-4xl">Mr Rays</h2>
          <p className="text-[#b0b0b0] text-xl sm:text-2xl md:text-3xl mb-6">
            <span className="text-[#8a88f1] font-semibold">Fitness Trainer & Yoga Instructor</span> with 10+ years of experience.
          </p>
          <p className="text-[#d0d0d0] text-sm sm:text-base md:text-lg">
            I create simple, effective training plans to help you stay strong, flexible, and balanced.
          </p>
        </div>

        {/* Right side - User Image */}
        <div className="w-full lg:w-[60%] flex justify-center">
          <img
            src="raysimg.jpg"
            alt="User"
            className="rounded-2xl w-full max-w-[400px] sm:max-w-[500px] h-auto object-cover border-2 border-[#2e2e30]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
