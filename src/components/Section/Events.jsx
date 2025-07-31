import eventsContent from "@/data/eventsContent";
import React from "react";

function Events({ lang }) {
  const content = eventsContent[lang];
  return (
    <div
      id="events"
      className=" max-w-[1600px] mx-auto bg-[#202025e1]  rounded-2xl  mt-10 p-2 sm:p-3 md:p-5 lg:p-10"
    >
      <h1 className="text-orange-300 mt-5  round text-2xl sm:text-4xl  mb-2 sm:mb-3 lg:mb-5 text-center">
        {content.title}
      </h1>
      <div className="w-full bg-[#b88f557d] p-[0.5px]"></div>
      <div className="mt-10 lg:p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <img
            src="award.jpg"
            className="rounded-2xl w-full h-auto object-cover border-2 border-[#2e2e30]"
          />
        </div>
        <div>
          <img
            src="award1.jpg"
            className="rounded-2xl w-full h-auto object-cover border-2 border-[#2e2e30]"
          />
        </div>
        <div>
          <img
            src="event9.jpg"
            className="rounded-2xl w-full h-auto object-cover border-2 border-[#2e2e30]"
          />
        </div>
        <div>
          <img
            src="event6.jpg"
            className="rounded-2xl w-full h-auto object-cover border-2 border-[#2e2e30]"
          />
        </div>
        <div>
          <img
            src="event7.jpg"
            className="rounded-2xl w-full h-auto object-cover border-2 border-[#2e2e30]"
          />
        </div>
        <div>
          <img
            src="event8.jpg"
            className="rounded-2xl w-full h-auto object-cover border-2 border-[#2e2e30]"
          />
        </div>
        <div className="">
          <img
            src="event9.jpg"
            className="rounded-2xl w-full h-auto object-cover border-2 border-[#2e2e30]"
          />
        </div>
        <div className="">
          <img
            src="event10.jpg"
            className="rounded-2xl w-full h-auto object-cover border-2 border-[#2e2e30]"
          />
        </div>
      </div>
    </div>
  );
}

export default Events;
