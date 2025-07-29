import React from "react";

function Contact() {
  return (
    <>
      <div className="max-w-[1600px] mx-auto bg-[#19191d] rounded-2xl  mt-10 p-2 sm:p-3 md:p-5 lg:p-10">
        <h1 className="text-orange-300 mt-5  round text-2xl sm:text-4xl  mb-2 sm:mb-3 lg:mb-5 text-center">
          Contact
        </h1>
        <div className="w-full bg-[#b88f557d] p-[0.5px]"></div>{" "}
        <div className="flex mt-3 sm:mt-5 md:mt-10 p-2 sm:p-3 md:p-5 gap-3 sm:gap-5 md:gap-7 lg:gap-10">
          <div>
            <img
              src="weChat.jpg"
              alt=""
              className="size-12 hover:scale-110 transition duration-500 md:size-14 rounded-2xl"
            />
          </div>
           <div>
            <img
              src="tiktok.webp"
              alt=""
              className="size-13 hover:scale-110 transition duration-500  md:size-15 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
