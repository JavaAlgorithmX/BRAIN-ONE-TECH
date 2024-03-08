import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../css/clipPath.css";

function EnquireNow() {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  let enquiryData = "";

  const onSubmit = (data) => {
    console.log(data);
    enquiryData = data;
    console.log("Enquiry Data ", enquiryData);
    submitEnquireNowData();
  };

  function submitEnquireNowData() {
    axios
      .post("http://localhost:4000/api/createenquiry", enquiryData)
      .then(function (response) {
        console.log(`response : ${response}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    // <>
    <div class="px-3 lg:w-full py-3 lg:px-0    lg:grid-rows-5 lg:gap-2 bg-slate-900 bg-gradient-to-r from-red-500 to-orange-500">
      <div class=" flex items-center justify-center px-2 w-full  lg:col-span-1  py-2">
        <h1 class="text-xl lg:text-3xl text-white  font-semibold text-center">
          Are you ready to Transforme your
          <span className="font-bold"> Career? </span>{" "}
        </h1>
      </div>

      <form
        //  lg:grid  grid-rows-2
        //  lg:flex-row px-2
        onSubmit={handleSubmit(onSubmit)}
        class=" w-full flex justify-center items-center lg:items-start flex-col  overflow-auto   lg:col-span-4"
      >
        <div className=" flex space-x-4 w-full">
          <div className="lg:flex flex-col items-end space-y-2 lg:px-2 py-2 w-full">
            <input
              class="drop-shadow-md h-10 mt-3 lg:mt-0 pl-4 w-full lg:w-1/2 rounded-lg"
              type="text"
              placeholder="Your Name"
              {...register("name")}
            ></input>
            <input
              class="drop-shadow-md my-2 h-10 pl-4   w-full lg:w-1/2  lg:my-0 rounded-lg"
              type="text"
              placeholder="Email"
              {...register("email")}
            ></input>
            <input
              class="drop-shadow-md mb-3 h-10 pl-4  w-full lg:w-1/2 lg:mb-0  rounded-lg"
              type="text"
              placeholder="Mobile Number"
              {...register("mobile")}
            ></input>
          </div>
          <div className="  row-span-2 col-span-1 px-2 py-2 w-full">
            <textarea
              className="drop-shadow-md w-1/2 lg:h-full rounded-md mb-3 lg:mb-0 px-4 py-2 h-20 "
              placeholder="Your Query"
            ></textarea>
          </div>
        </div>
        <div className="  flex items-center justify-center w-full">
          <button class="drop-shadow-md ml-3 h-10 w-36 rounded-lg hover:bg-blue-700 text-white my-2 bg-blue-600">
            Enquire Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default EnquireNow;
