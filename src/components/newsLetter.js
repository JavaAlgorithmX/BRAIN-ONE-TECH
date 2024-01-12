import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function NewsLetter() {
  return (
    <div class="h-40 bg-slate-900 grid grid-rows-2 lg:px-20">
      <div class="flex items-center justify-center">
        <p className="lg:mb-5 text-xl lg:text-2xl font-bold text-white font-serif">
          Subscribe Weekly Newsletter
        </p>
      </div>
      <div className="flex justify-center">
        <div className=" h-12 bg-blue-700 rounded-full relative">
          <input
            class="h-12 w-96 rounded-full  pl-4  "
            type="text"
            placeholder="Email"
          ></input>
          <button class="bg-green-500 drop-shadow-md w-28 absolute top-0 right-0 h-12 border-green-600 rounded-full px-3 text-white text-md flex justify-center items-center shadow-inner hover:bg-blue-800">
            SUBSCRIBE
            {/* <FaArrowRight /> */}
          </button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
export default NewsLetter;
