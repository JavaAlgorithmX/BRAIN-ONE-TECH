import React from "react";
import { useState } from "react";
import "../../src/css/GsapCard.css";

export default function GsapCard() {
  const [isSignUpClicked, setIsSignUpClicked] = useState(true);

  const handleSwapClick = () => {
    setIsSignUpClicked(!isSignUpClicked);
  };

  return (
    <>
      <button onClick={handleSwapClick}>{`sign up ${isSignUpClicked}`}</button>

      <div className="bg-red-500 h-screen flex items-center justify-center">
        <div className="bg-purple-600 h-96 w-4/5 flex ">
          <div
            className={`box ${
              isSignUpClicked ? "box-left-swaped" : ""
            }  bg-white w-1/3 z-20 flex items-center flex-col justify-around`}
          >
            <h1 className={`text-3xl`}>{`${isSignUpClicked? "Sign In" : "Sign Up"}`}</h1>
            <button onClick={handleSwapClick} className="border-2 border-slate-600 rounded-full px-4 pb-1">{`${isSignUpClicked? "Sign In" : "Sign UP"}`}</button>
          </div>
          <div
            className={`box ${
              isSignUpClicked ? "box-right-swaped" : ""
            }   bg-slate-500 w-2/3 z-10 flex items-center justify-center`}
          >
           <h1 className="text-3xl">{`${isSignUpClicked? "Sign Up" : "Sign In"}`}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
