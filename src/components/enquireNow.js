import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../css/clipPath.css";

function EnquireNow() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
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
      <div class="relative h-80 lg:h-60 w-full bg-gradient-to-r from-red-500 to-orange-500 grid grid-rows-7 lg:grid-rows-2">
        
          <div class=" flex items-center justify-center">
            <h1 class="text-md lg:text-3xl text-white font-semibold">
              Are you ready to Transforme your
              <span className="font-bold"> career? </span>{" "}
            </h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            class="flex justify-center items-center lg:items-start flex-col  lg:flex-row"
          >
            <input
              class=" h-10 pl-4 w-72 lg:w-60 rounded-lg"
              type="text"
              placeholder="Your Name"
              {...register("name")}
            ></input>
            <input
              class="my-2 h-10 pl-4 w-72 lg:w-60 lg:mx-3 lg:my-0 rounded-lg"
              type="text"
              placeholder="Email"
              {...register("email")}
            ></input>
            <input
              class="mb-3 h-10 pl-4 w-72 lg:w-60 lg:mb-0  rounded-lg"
              type="text"
              placeholder="Mobile Number"
              {...register("mobile")}
            ></input>
            <button class="bg-blue-500 ml-3 h-10 w-36 rounded-lg hover:bg-blue-700 text-white">
              Enquire Now
            </button>
          </form>
        </div>
  );
}

export default EnquireNow;
