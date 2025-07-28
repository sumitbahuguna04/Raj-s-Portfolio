import React from "react";

function Hero() {
  return (
    <div className="w-full mt-10 bg-[#19191d] text-white shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
      
      {/* Left side - User Data (40%) */}
      <div className="md:w-[40%] mb-5 px-4 text-xl sm:text-2xl md:text-4xl">
        <h2 className="text-2xl font-bold mb-3">Mr Rays</h2>
        <p className="text-[#b0b0b0] mb-4">
          A passionate <span className="text-[#8a88f1] font-semibold">Fitness Trainer & Yoga Instructor</span> with 10+ years of experience helping people achieve their health goals.
        </p>
        <p className="text-[#d0d0d0] mt-10">
          I specialize in creating personalized training programs combining strength, flexibility, and mindfulness techniques to improve overall well-being. My mission is to help individuals find balance between body and mind.
        </p>
      </div>

      {/* Right side - User Image (60%) */}
      <div className="md:w-[60%] flex justify-center text-xl md:text-2xl">
        <img
          src="raysimg.jpg"
          alt="User"
          className="rounded-2xl w-full max-w-[500px] h-auto object-cover border-2 border-[#2e2e30]"
        />
      </div>

    </div>
  
    
  );
}

export default Hero;
