import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  // const imageUrl = "/hero.jpg";

  return (
    <div className="h-screen w-full 
    bg-gradient-to-b from-slate-900 via-slate-700 to-orange-400
    lg:bg-gradient-to-r relative">
      <img
        src="./hero.jpg"
        alt=""
        className="h-full w-full absolute object-cover mix-blend-overlay"
      ></img>

      <div class="px-4 lg:px-20 h-full w-full text-white flex flex-col justify-center relative">
        <h2 class="sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 drop-shadow-lg">
          Elevate <span className=" text-purple-500">Success</span> Through
          Innovative Solutions
        </h2>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Your Partner in IT Excellencee",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "Your Partner in Training and Certification",
            2000,
            "Your Partner in Digital Transformation",
            2000,
          ]}
          wrapper="span"
          speed={10}
          // style={{ fontSize: "3em", display: "inline-block" }}
          className="md:text-3xl lg:text-5xl font-bold md:pt-2 lg:pt-3"
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default Hero;
