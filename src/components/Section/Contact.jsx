import contactContent from "@/data/contactContent";
import React from "react";

function Contact({ lang }) {
  const content = contactContent[lang];
  return (
    <div className="max-w-[1600px] mx-auto bg-[#202025b6] text-white rounded-2xl mt-10 p-2 sm:p-3 md:p-5 lg:p-10 mb-10">
      <h1 className="text-orange-300 mt-5 round text-2xl sm:text-4xl mb-2 sm:mb-3 lg:mb-5 text-center">
        {content.title}
      </h1>
      <div className="w-full bg-[#b88f557d] p-[0.5px]"></div>

      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8 p-2 sm:p-3 md:p-5">
        {/* Item 1 */}
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <img
            src="weChat.jpg"
            alt=""
            className="size-12 md:size-16 rounded-2xl hover:scale-110 transition duration-500"
          />
          <a className="underline text-xs sm:text-sm md:text-base text-[#fee1ab] hover:text-[#fee1abc1] transition">
            Rayskol365
          </a>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <img
            src="tiktok.webp"
            alt=""
            className="size-12 md:size-16 rounded-2xl hover:scale-110 transition duration-500"
          />
          <a
            href="https://www.douyin.com/user/MS4wLjABAAAADfoIyAjylnJFt372NiDc6U-uoUPwb97i0XkGsDg0UT8?from_tab_name=main&vid=7453474235378453818"
            className="underline text-xs sm:text-sm md:text-base text-[#fee1ab] hover:text-[#fee1abc1] transition"
          >
            雷力士Rays
          </a>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <img
            src="redNote.jpg"
            alt=""
            className="size-12 md:size-16 rounded-2xl hover:scale-110 transition duration-500"
          />
          <a
            href="http://www.xiaohongshu.com/user/profile/5cd500740000000012011aa1?xsec_token=YBmPEX9RkX1gnFpLZuyrFrM5hxYS13PUuSN9_uetcr6n0%3D&xsec_source=app_share&xhsshare=CopyLink&appuid=5cd500740000000012011aa1&apptime=1736932860&share_id=8ed088f6014d4f21a09a7298a5f434d1"
            className="underline text-xs sm:text-sm md:text-base text-[#fee1ab] hover:text-[#fee1abc1] transition"
          >
            雷力士Rays
          </a>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <img
            src="insta.jpg"
            alt=""
            className="size-12 md:size-16 rounded-2xl hover:scale-110 transition duration-500"
          />
          <a
            href="https://instagram.com/iamrays365?igsh=MThzNzd1cjRyZGMyYw=="
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-xs sm:text-sm md:text-base text-[#fee1ab] hover:text-[#fee1abc1] transition"
          >
            iamrays365
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
