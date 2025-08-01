import React from "react";

function Travel() {
  return (
    <>
      <div className="max-w-[1600px] mx-auto bg-[#202025e1] rounded-lg shadow-lg mt-3 sm:mt-5 md:mt-10 p-2 sm:p-3 md:p-5 lg:p-10">
        <div className="p-2 ">
          <h1 className="text-orange-300  round text-2xl sm:text-4xl  mb-2 sm:mb-3 lg:mb-5 text-center">
            Plan Your Next Adventure
          </h1>
          <div className="w-full bg-[#b88f557d] p-[0.5px]"></div>
          <h1 className="text-orange-200 mt-3 sm:mt-5 md:mt-7 bg-[#2c2c349e] p-5 text-[14px] sm:text-[15px] md:text-[18px] rounded-2xl tracking-wider">
            I organize customized trips to some of the most beautiful Himalayan
            destinations. Whether you’re looking for spiritual peace at Tungnath
            or an adventurous trek to Rudranath, I make sure your journey is
            safe, memorable, and affordable.
          </h1>
          <div className="flex mt-5 sm:mt-7 md:mt-10 flex-col md:flex-row gap-5 text-white">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-5  bg-[#2c2c348c] rounded-2xl py-3 px-1 sm:px-2 md:px-3 lg:px-4">
              <img
                src="semMukhem.png"
                className="rounded-2xl w-full h-auto object-cover border-2 border-[#2e2e30]"
              />
              <p className="text-[16px] sm:text-[18px] md:text-[23px] font-semibold">
                Sem Mukhem
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-5  bg-[#2c2c348c] rounded-2xl py-3 px-1 sm:px-2 md:px-3 lg:px-4">
              <img
                src="CHOPTA.jpg"
                className="rounded-2xl w-full h-auto object-cover border-2 border-[#2e2e30]"
              />
              <p className="text-[16px] sm:text-[18px] md:text-[23px] font-semibold">
                Chopta
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Travel;
