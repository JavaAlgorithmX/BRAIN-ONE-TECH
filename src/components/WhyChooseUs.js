import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function WhyChooseUs() {
  return (
    <div className="relative ">
      <div className="lg:h-screen w-full bg-slate-900  ">
        {/* 4 reasons to CHOOSE  */}

        <div className="lg:h-2/6 flex justify-center lg:justify-end py-8">
          <div className=" h-full lg:w-1/2 px-2 flex ">
            <div className="flex items-center">
              <div>
                <p className="text-8xl font-extrabold text-yellow-400 mr-2">
                  4
                </p>
              </div>
              <div>
                <p className="text-xl text-slate-500 leading-3 ">REASONS</p>
                <p className="text-5xl pt-3 text-slate-500 font-extrabold mt-2 leading-3">
                  TO CHOOSE
                </p>
              </div>
            </div>
          </div>
        </div>

      {/* pointers  */}
        <div className="h-3/6 bg-gradient-to-r from-red-500 to-orange-500 flex justify-center lg:justify-end">
          <div className="h-full px-10 lg:w-1/2 py-4 flex flex-col space-y-5 justify-center lg:justify-around text-slate-100">
            <div>
              <h3 className="text-xl font-bold font-serif">
                Expert Instructors
              </h3>
              <p className="lg:text-sm text-slate-300">
                Learn from industry professionals with a passion for teaching.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-serif">
                Hands-On Approach
              </h3>
              <p className="lg:text-sm text-slate-300">
                Practical experience that goes beyond theory.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-serif">
                Comprehensive Curriculum
              </h3>
              <p className="lg:text-sm text-slate-300">
                Stay ahead with the latest in IT trends and technologies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold font-serif">Career Support</h3>
              <p className="lg:text-sm text-slate-300">
                Your success is our success. We provide guidance and support
                beyond the classroom
              </p>
            </div>
          </div>
        </div>

        {/* get in touch  */}
        <div className=" h-1/6 flex justify-center items-center lg:justify-end py-5 w-full">
          <div className="w-full lg:w-1/2">
            <button
              className="mx-auto lg:mt-3 border-2 border-red-500 flex h-16 w-60
                items-center rounded-full px-2 text-white "
              style={{
                letterSpacing: "0.2em",
              }}
            >
              <IoIosArrowDroprightCircle className="text-5xl mr-4 text-white" />{" "}
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>


      {/* image  */}
      <div className="hidden h-full w-1/2 absolute top-0 left-0  pl-10">
        <img
          src="./why.png"
          alt=""
          className=""
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </div>

    </div>
  );
}
