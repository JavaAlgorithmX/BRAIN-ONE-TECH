import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles.css";
import { Pagination } from "swiper/modules";
import servicesData from "../staticUiData/servicesData";
import TiltCard from "./TiltCard";



export default function Services() {

  return (
    <div className="w-full h-screen bg-slate-900 flex items-center justify-center relative">
      <div className="absolute ">
        <h1
          className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-700  tracking-widest drop-shadow-xl"
          style={{
            fontSize: "200px",
            fontWeight: "900",
          }}
        >
          SERVICES
        </h1>
      </div>

      <div className=" w-full h-full px-20 py-14 ">
        <Swiper
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
        </Swiper>
      </div>
    </div>
  );
}
