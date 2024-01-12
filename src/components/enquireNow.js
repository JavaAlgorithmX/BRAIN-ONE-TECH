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
      <div class="px-3 w-screen py-3 lg:h-60 bg-gradient-to-r from-red-500 to-orange-500 grid grid-rows-7 lg:grid-rows-2">
        
          <div class=" flex items-center justify-center px-2 w-full">
            <h1 class="text-xl lg:text-3xl text-white font-semibold text-center">
              Are you ready to Transforme your
              <span className="font-bold"> Career? </span>{" "}
            </h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            class="w-full flex justify-center items-center lg:items-start flex-col  lg:flex-row px-2 overflow-auto"
          >
            <input
              class=" h-10 mt-3 pl-4 w-full lg:w-60 rounded-lg"
              type="text"
              placeholder="Your Name"
              {...register("name")}
            ></input>
            <input
              class="my-2 h-10 pl-4  w-full lg:w-60 lg:mx-3 lg:my-0 rounded-lg"
              type="text"
              placeholder="Email"
              {...register("email")}
            ></input>
            <input
              class="mb-3 h-10 pl-4  w-full lg:w-60 lg:mb-0  rounded-lg"
              type="text"
              placeholder="Mobile Number"
              {...register("mobile")}
            ></input>
            <textarea className="w-full rounded-md mb-3 px-4 py-2 h-20 " placeholder="Your Query"></textarea>
            <button class="bg-blue-500 ml-3 h-10 w-36 rounded-lg hover:bg-blue-700 text-white my-2">
              Enquire Now
            </button>
          </form>
        </div>
  );
}

export default EnquireNow;
