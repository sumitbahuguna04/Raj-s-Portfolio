import contactContent from "@/data/contactContent";
import React from "react";

function Contact({ lang }) {
  const content = contactContent[lang];
  return (
    <>
      <div className="max-w-[1600px] mx-auto bg-[#19191d] text-white rounded-2xl  mt-10 p-2 sm:p-3 md:p-5 lg:p-10 mb-10">
        <h1 className="text-orange-300 mt-5  round text-2xl sm:text-4xl  mb-2 sm:mb-3 lg:mb-5 text-center">
          {content.title}
        </h1>
        <div className="w-full bg-[#b88f557d] p-[0.5px]"></div>{" "}
        <div className="flex  justify-evenly items-center mt-3 sm:mt-5 md:mt-10 p-2 sm:p-3 md:p-5 ">
          <div className="flex flex-col  gap-3 sm:gap-4">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src="weChat.jpg"
                alt=""
                className="size-12 hover:scale-110 transition duration-500 md:size-14 rounded-2xl "
              />
            </a>
            <h1>{content.icon1}</h1>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src="tiktok.webp"
                alt="TikTok"
                className="size-13 hover:scale-110 transition duration-500 md:size-15 rounded-2xl"
              />
            </a>

            <h1>{content.icon2}</h1>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3">
            <a
              href="http://xhslink.com/m/8XlntkXFhBx "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="redNote.jpg"
                alt=""
                className="size-13 hover:scale-110 transition duration-500  md:size-15 rounded-2xl"
              />
            </a>
            <h1>{content.icon3}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
