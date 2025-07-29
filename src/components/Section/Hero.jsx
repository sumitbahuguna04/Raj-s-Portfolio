import React from "react";

function Hero() {
  return (
   <div className= 'max-w-[1600px] mx-auto bg-[#19191d]   rounded-lg shadow-lg mt-10 p-2 sm:p-3 md:p-5 lg:p-10'>
      <div className="w-full  text-white rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-8">
        
        {/* Left side - User Data */}
        <div className="w-full lg:w-[40%] flex flex-col lg:m-20 lg:gap-4 text-center lg:text-left">
          <h2 className="font-bold mb-4 text-4xl">RAJ</h2>
          <p className="text-[#b0b0b0] text-xl sm:text-2xl md:text-3xl mb-6">
            <span className="text-[#8a88f1] font-semibold">Yoga Master & Celebrity Fitness Coach</span>
          </p>
          <p className="text-[#d0d0d0] text-sm sm:text-base md:text-lg mb-4">
            From the Himalayas, fluent in 4 languages, with 10+ years of global teaching (China, Dubai, Singapore).
            500RYT Certified Yoga Master, trained at Banaras University & London Nutrition Program.
          </p>
        
  
          <p className="text-[#d0d0d0] text-sm sm:text-base md:text-lg">
            Expert in Ashtanga, Power Yoga, Sound Healing, Yoga Nidra & Kama Sutra studies.
          </p>
         
        </div>

        {/* Right side - User Image */}
        <div className="w-full lg:w-[60%] flex justify-center">
          <img
            src="raysimg.jpg"
            alt="Rajash (Rays)"
            className="rounded-2xl w-full max-w-[400px] sm:max-w-[500px] h-auto object-cover border-2 border-[#2e2e30]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
