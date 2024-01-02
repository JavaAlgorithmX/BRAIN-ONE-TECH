import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FeatureCard from "./FeatureCard";
import featuresData from "../staticUiData/featureData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function DummyCaresol() {
  return (
    <div className="relative h-screen w-full bg-slate-800">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen w-full"
      >
        {featuresData.map((data, index) => (
          <SwiperSlide key={index} className="pt-14">
            <FeatureCard heading={data.heading} paragraph={data.paragraph} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
