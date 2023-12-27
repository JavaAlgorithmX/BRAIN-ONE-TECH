import React from "react";
import Tilt from "react-parallax-tilt";


export default function TiltCard({ heading, paragraph }) {
    return (
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#8b5cf6"
        glarePosition="bottom"
        glareBorderRadius="2px"
        className=" col-span-8 rounded-md mt-10  h-4/5 w-4/5 mx-auto text-white flex justify-center items-center flex-col text-center"
        style={{
          background: "rgba(255,255,255,.05)",
          boxShadow: "0 25px 45px rgba(0, 0, 0, .2)",
          border: "2px solid rgba(255,255,255,.5)",
          borderRight: "2px solid rgba(255,255,255,.2)",
          borderBottom: "2px solid rgba(255,255,255,.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 className="text-2xl font-bold mb-5 underline   ">{heading}</h1>
        <p className="text-lg font-bold text-white drop-shadow-xl">{paragraph}</p>
      </Tilt>
    );
  }