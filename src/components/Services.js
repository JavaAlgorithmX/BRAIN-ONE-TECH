import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles.css";
// import { Pagination } from "swiper/modules";
import servicesData from "../staticUiData/servicesData";
// import TiltCard from "./TiltCard";


function ServiceCard({heading,paragraph}){
  return(
    <div className="bg-gradient-to-tr from-violet-600 to-indigo-600 
    rounded-md shadow-md
     shadow-slate-400 flex flex-col items-center justify-top px-5 py-10
     hover:border-2 hover:border-slate-200">
      <h1 className="text-xl mb-5 font-bold font-serif bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">{heading}</h1>
      <p className="text-lg text-slate-50">{paragraph}</p>
    </div>
  );
}



export default function Services() {

  return (
    <div className=" bg-slate-900 flex items-center justify-center relative">
      {/* <div className="hidden lg:absolute ">
        <h1
          className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-700  tracking-widest drop-shadow-xl"
          style={{
            fontSize: "200px",
            fontWeight: "900",
          }}
        >
          SERVICES
        </h1>
      </div> */}

      <div className=" w-full h-full px-5 md:px-10 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 ">
        {/* <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {servicesData.map((data, index) => (
            <SwiperSlide key={index}>
              <TiltCard heading={data.heading} paragraph={data.paragraph} />
            </SwiperSlide>
          ))}
        </Swiper> */}
        {servicesData.map((data, index) => (
            <ServiceCard 
               heading={data.heading} paragraph={data.paragraph} 
            />
          ))}

      </div>
    </div>
  );
}
