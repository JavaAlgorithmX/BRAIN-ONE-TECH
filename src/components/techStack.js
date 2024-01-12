import React from "react";
import ScrollCarousel from "scroll-carousel-react";
import techData from "../staticUiData/techStackData";

export default function TechStack() {
  return (
    <div className="bg-slate-900 w-full pt-5 lg:pt-20 ">
      <div className="bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-slate-400
       text-start text-xl lg:text-4xl pl-5 lg:pl-10 lg:mb-5 font-bold">
        Tech Stack
      </div>

      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        className="py-2 lg:py-5"
      >
        {techData.map((item) => (
          <div
            key={item.id}
            className="rounded h-24 w-24 lg:h-40 lg:w-40 flex items-center justify-center "
          >
            <img className="h-full w-full object-cover" src={item.stackImage} alt=""></img>
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
}
