import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/clipPath.css";
import { SendEmail } from "../services/api-email";
import Spinner from "./spinner";

function EnquireNow() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);


    // console.log(data)
     // Transform the data into the refined format
  const formattedData = {
    formType: "enquiry", // Indicate the type of form
    userData: {
      name: data.name,
      email: data.email, // Move email inside userData
      mobile: data.mobile,
      message: data.message,
    },
  };
  // console.log(formattedData)
    try {
      await SendEmail(formattedData); // Simulate API call
      alert("Enquiry submitted successfully!");
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-3 lg:w-full py-3 lg:px-0 lg:grid-rows-5 lg:gap-2 bg-slate-900 bg-gradient-to-r from-red-500 to-orange-500">
      <div className="flex items-center justify-center px-2 w-full lg:col-span-1 py-2">
        <h1 className="text-xl lg:text-3xl text-white font-semibold text-center">
          Are you ready to Transforme your
          <span className="font-bold"> Career? </span>
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex justify-center items-center lg:items-start flex-col overflow-auto lg:col-span-4"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 w-full">
          <div className="lg:flex flex-col items-end space-y-2 lg:px-2 py-2 w-full">
            <input
              className="drop-shadow-md h-10 mt-3 lg:mt-0 pl-4 w-full lg:w-1/2 rounded-lg"
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required",
                pattern: {
                  value: /^[A-Za-z\s'-]+$/, // Allows letters, spaces, hyphens, and apostrophes
                  message: "Name can only contain letters, spaces, hyphens, and apostrophes",
                },
                minLength: {
                  value: 1,
                  message: "Name cannot be just blank spaces",
                },
                validate: (value) => value.trim().length > 0 || "Name cannot be just blank spaces", // Checks for non-empty, non-space name
               })}
            />
            {errors.name && (
              <span className="text-white text-sm">{errors.name.message}</span>
            )}
            <input
              className="drop-shadow-md my-2 h-10 pl-4 w-full lg:w-1/2 lg:my-0 rounded-lg"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+!/-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                  , // Allows "!" in the username part
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-white text-sm">{errors.email.message}</span>
            )}
            <input
              className="drop-shadow-md mb-3 h-10 pl-4 w-full lg:w-1/2 lg:mb-0 rounded-lg"
              type="text"
              placeholder="Mobile Number"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[7-9][0-9]{9}$/,
                  message: "Mobile number must be 10 digits long and start with 7, 8, or 9",
                },
              })}
            />
            {errors.mobile && (
              <span className="text-white text-sm">{errors.mobile.message}</span>
            )}
          </div>
          <div className="lg:flex flex-col lg:px-2 lg:py-2 w-full">
            <textarea
              className="drop-shadow-md w-full lg:w-1/2 lg:h-full rounded-md mb-3 lg:mb-0 px-4 py-2 h-32"
              placeholder="Your Query"
              {...register("message", { required: "Query is required",
                pattern: {
                  value: /^[A-Za-z0-9\s\.,?!'-]*$/, // Allows letters, numbers, spaces, punctuation, hyphens, apostrophes
                  message: "Query can only contain letters, numbers, spaces, and valid punctuation marks",
                },
                minLength: {
                  value: 1,
                  message: "Query cannot be just blank spaces",
                },
                validate: (value) => value.trim().length > 0 || "Query cannot be just blank spaces", // Checks for non-empty, non-space query
               })}
            ></textarea>
            {errors.message && (
              <span className="text-white text-sm">{errors.message.message}</span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <button
            type="submit"
            disabled={!isValid || isLoading}
            className={`flex items-center justify-center drop-shadow-md ml-3 h-10 w-36 rounded-lg text-white my-2 ${
              isLoading || !isValid ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? (
              <>
                Sending... <Spinner />
              </>
            ) : (
              "Submit Enquiry"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EnquireNow;

