import React from "react";
import "../css/background-overlay.css";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const imageUrl = "/hero.jpg";
  const overlayStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="h-screen w-full bg-slate-800">
      {/* <div class=" bgImage" 
      style={overlayStyle}
      >

      </div> */}
      <div class="grid grid-rows-2 h-80 z-40 content">
        <div class="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent pt-10">
          <h2 class="text-3xl font-bold text-fuchsia-700">Elevate <span className = " text-green-600">Success</span> Through Innovative Solutions</h2>
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
            style={{ fontSize: "3em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
