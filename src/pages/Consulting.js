import React, { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";
// import Dummy from "../components/Dummy";
import {
  CiUser,
  CiFileOn,
  CiCircleQuestion,
  CiMail,
  CiMobile2,
} from "react-icons/ci";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "../styles.css";
import { Pagination } from "swiper/modules";
import Tilt from "react-parallax-tilt";

export default function Consulting() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [selectedValue, setSelectedValue] = useState("NO");
  //   const [isResumeInputShown , setIsResumeInputShown] = useState(false);

  const processData = [
    {
      id: "1",
      description:
        "One to One session to look over your skills and understand what you want from us",
    },
    {
      id: "2",
      description:
        "Based on your skills, let you know of possible opportunities",
    },
    {
      id: "3",
      description: "Creating a detailed IT roadmap or action plan",
    },
    {
      id: "4",
      description: "Offering ongoing support and consultation as needed",
    },
    {
      id: "5",
      description: "Suggesting technology solution, upgrades or replacement",
    },
    {
      id: "6",
      description: "Defining clear, achievable goal and objectives",
    },
    {
      id: "7   ",
      description: "Identifying pain points and area for improvement",
    },
  ];

  function handleShowForm() {
    setIsFormShown(true);
  }

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  function Hero() {
    return (
      <div
        className="h-screen w-full bg-gradient-to-bl from-stone-900 via-stone-600 to-orange-500 flex justify-center items-center flex-col  relative"
      >
        <img src="./consulting-hero.jpg" alt="" className="h-full w-full absolute mix-blend-overlay object-cover "></img>
        <div className=" h-full flex flex-col justify-evenly relative">
          <p className="text-5xl font-bold text-white drop-shadow-lg">
            Confused about your <span className="text-red-600">CAREER ?</span>
          </p>
          <div className=" text-center">
            <p className="mb-5 text-3xl font-semibold text-white">
              To Unlock your true career potential
            </p>
            <button className="animate-bounce px-5 py-2    rounded-full border-2 border-slate-50 text-slate-50">
              <CiCircleChevDown className="inline text-4xl mr-1" /> SCROLL DOWN
            </button>
          </div>
        </div>
      </div>
    );
  }

  function TiltCard({ heading, paragraph }) {
    return (
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#8b5cf6"
        glarePosition="bottom"
        glareBorderRadius="2px"
        className=" bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 rounded-md mt-5  h-4/5 aspect-square  flex justify-center items-center flex-col ">
        <div className="h-1/2 w-full text-start ">
          <h1 className="text-9xl font-bold pl-2 text-white">{heading}</h1>
        </div>
        <div className="h-1/2">
          <p className="text-lg text-black">{paragraph}</p>
        </div>
      </Tilt>
    );
  }

  function OurProcess() {
    return (
      <>
        <div className="bg-fuchsia-600 h-screen w-full relative flex flex-col items-center justify-center">
          <div className="text-8xl font-bold absolute top-2 text-slate-400 text-center w-full">
            HOW WE PROCEED
          </div>

          <div className=" w-full h-4/5 px-10 py-14">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className=" w-full h-1/2 "
            >
              {processData.map((data, index) => (
                <SwiperSlide key={index} className=" h-60 w-full">
                  <TiltCard heading={data.id} paragraph={data.description} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </>
    );
  }

  function BookConsulting() {
    return (
      <div
        className=" w-full bg-fuchsia-900 text-center"
        style={{
          backgroundImage: `url("./consulting-wave-flip.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <p className="text-3xl mb-5">
          Register for One to One Career Consultancy Now
        </p>
        <button
          onClick={handleShowForm}
          className="text-center px-5 py-2 rounded-full border-2 border-state-50 text-slate-50 mb-10"
        >
          REGISTER
        </button>
        <div className={` ${isFormShown ? "" : "hidden"} mx-10 px-10 `}>
          <p className="mb-3 text-lg">Fill below form to register </p>
          <form className="flex flex-col justify-center items-center">
            <div className="mb-2 relative">
              <input
                className="pl-8 w-80 h-8 rounded-md"
                type="text"
                placeholder="Name"
              ></input>
              <CiUser className="absolute top-1 left-1 text-xl" />
            </div>
            <div className="mb-2 relative">
              <input
                className="pl-8 w-80 h-8 rounded-md"
                type="text"
                placeholder="Email"
              ></input>
              <CiMail className="absolute top-1 left-1 text-xl" />
            </div>
            <div className="mb-2 relative">
              <input
                className="pl-8 w-80 h-8 rounded-md"
                type="text"
                placeholder="Mobile"
              ></input>
              <CiMobile2 className="absolute top-1 left-1 text-xl" />
            </div>
            <div className="mb-2 relative">
              <input
                className="pl-8 w-80 h-8 rounded-md"
                type="text"
                placeholder="Query description"
              ></input>
              <CiCircleQuestion className="absolute top-1 left-1 text-xl" />
            </div>
            <div className="mb-2 relative h-8 w-80 flex justify-between border rounded-md">
              <label className="mr-2 pl-2 text-slate-50" for="cars">
                Do you have a Resume ready ?
              </label>
              <select
                className="rounded-md h-8 w-20 px-3"
                id="resume"
                name="resume-value"
                value={selectedValue}
                onChange={handleChange}
              >
                <option value="NO">NO</option>
                <option value="YES">YES</option>
              </select>
            </div>

            {selectedValue === "YES" && (
              <div className={`mb-2 relative`}>
                <input
                  className="pl-8 w-80 h-8 rounded-md"
                  type="text"
                  placeholder="Resume "
                ></input>
                <CiFileOn className="absolute top-1 left-1 text-xl" />
              </div>
            )}
            <button className="px-6 py-2 my-5 rounded-full border-2 border-green-500 text-green-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <OurProcess />
      <BookConsulting />
    </>
  );
}
