import contactContent from "@/data/contactContent";
import React from "react";

function Contact({ lang }) {
  const content = contactContent[lang];
  return (
    <>
      <div className="max-w-[1600px] mx-auto bg-[#202025b6] text-white rounded-2xl  mt-10 p-2 sm:p-3 md:p-5 lg:p-10 mb-10">
        <h1 className="text-orange-300 mt-5  round text-2xl sm:text-4xl  mb-2 sm:mb-3 lg:mb-5 text-center">
          {content.title}
        </h1>
        <div className="w-full bg-[#b88f557d] p-[0.5px]"></div>
        <div className="flex  justify-evenly items-center mt-3 sm:mt-5 md:mt-7 p-2 gap-5 sm:p-3 md:p-5 ">
          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-full flex justify-center">
              <img
                src="weChat.jpg"
                alt=""
                className="size-12 md:size-14 rounded-2xl hover:scale-110 transition duration-500"
              />
            </div>
            <div className="text-center space-y-1">
              <h1>{content.icon1} :</h1>
              <a className="underline text-xs  sm:text-[15px]   text-[#fee1ab] hover:text-[#fee1abc1] cursor-pointer transition ">
                Rayskol365
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-full flex justify-center">
              <img
                src="tiktok.webp"
                alt=""
                className="size-12 md:size-14 rounded-2xl hover:scale-110 transition duration-500"
              />
            </div>
            <div className="text-center space-y-1">
              <h1>{content.icon2} :</h1>
              <a className="underline text-xs  sm:text-[15px] text-[#fee1ab] hover:text-[#fee1abc1] cursor-pointer transition ">
                Rayskol365
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <div className="w-full flex justify-center">
              <img
                src="redNote.jpg"
                alt=""
                className="size-12 md:size-14 rounded-2xl hover:scale-110 transition duration-500"
              />
            </div>
            <div className="text-center space-y-1">
              <h1>{content.icon3} :</h1>
              <a className="underline text-xs  sm:text-[15px]  text-[#fee1ab] hover:text-[#fee1abc1] cursor-pointer transition duration-300">
                Rayskol365
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
