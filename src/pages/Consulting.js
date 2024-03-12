
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  CiCircleChevDown,
  CiUser,
  CiCircleQuestion,
  CiMail,
  CiMobile2,
} from "react-icons/ci";
import Tilt from "react-parallax-tilt";
import ScrollToTop from "../components/ScrollToTop";

export default function Consulting() {
  // const { register, handleSubmit, errors } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    toast.success("You are registered successfully!")
  };

  const processData = [
    {
      id: "1",
      description:
        "One to One session to look over your skills and understand what you want from us",
    },
    {
      id: "2",
      description:
        "Based on your skills, let you know of possible opportunities",
    },
    {
      id: "3",
      description: "Creating a detailed IT roadmap or action plan",
    },
    {
      id: "4",
      description: "Offering ongoing support and consultation as needed",
    },
    {
      id: "5",
      description: "Suggesting technology solution, upgrades or replacement",
    },
    {
      id: "6",
      description: "Defining clear, achievable goal and objectives",
    },
    {
      id: "7",
      description: "Identifying pain points and area for improvement",
    },
  ];

  function Hero() {
    return (
      <div className="h-screen w-full bg-gradient-to-bl from-stone-900 via-stone-600 to-orange-500 flex justify-center items-center flex-col  relative">
        <img
          src="./consulting-hero.jpg"
          alt=""
          className="h-full w-full absolute mix-blend-overlay object-cover "
        ></img>
        <div className=" h-full flex flex-col justify-evenly relative">
          <p className="flex flex-col text-center text-4xl lg:block lg:text-5xl font-bold text-white drop-shadow-lg">
            Confused about your <span className="text-red-600">CAREER ?</span>
          </p>
          <div className=" text-center">
            <p className="mb-5 text-3xl font-semibold text-white">
              To Unlock your true career potential
            </p>
            <button className="animate-bounce px-5 py-2    rounded-full border-2 border-slate-50 text-slate-50">
              <CiCircleChevDown className="inline text-4xl mr-1" /> SCROLL
              DOWN
            </button>
          </div>
        </div>
      </div>
    );
  }

  function TiltCard({ heading, paragraph }) {
    return (
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#8b5cf6"
        glarePosition="bottom"
        glareBorderRadius="2px"
        className=" 
         hover:text-slate-900 cursor-pointer
          text-white bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]
           from-pink-500 via-red-500 to-yellow-500 
           rounded-md  aspect-square  
           flex justify-center items-center flex-col "
      >
        <div className="h-1/2 w-full text-start ">
          <h1 className="text-9xl font-bold pl-2 ">{heading}</h1>
        </div>
        <div className="h-1/2 px-2">
          <p className="text-3xl lg:text-2xl ">{paragraph}</p>
        </div>
      </Tilt>
    );
  }

  function OurProcess() {
    return (
      <>
        <div className="bg-slate-900  w-full pt-20 flex flex-col items-center justify-center">
          <div className="flex flex-col lg:block text-7xl lg:text-8xl font-bold text-slate-400 text-center w-full">
           <span>HOW WE</span> <span>PROCEED</span>
          </div>

          <div className=" w-full px-5 py-5 lg:px-10  lg:py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {processData.map((data, index) => (
              <TiltCard heading={data.id} paragraph={data.description} />
            ))}
          </div>
        </div>
      </>
    );
  }

  function BookConsulting() {
    return (
      <div
        className=" w-full bg-slate-900 text-center"
        style={{
          backgroundImage: `url("./consulting-wave-flip.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <p className="text-3xl text-white mb-5">
          Register for One to One Career Consultancy Now
        </p>

        <div className={`mx-10 px-10 `}>
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-2 relative">
              <input
                className="pl-8 w-80 h-8 rounded-md"
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                {...register("name", { required: "Name is required" })}
                // ref={register({ required: true })}
              />
              <CiUser className="absolute top-1 left-1 text-xl" />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="mb-2 relative">
              <input
                className="pl-8 w-80 h-8 rounded-md"
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                // ref={register({
                //   required: true,
                //   pattern: /^\S+@\S+\.\S+$/,
                // })}
                {...register("email", { required: "Email is required" })}
              />
              <CiMail className="absolute top-1 left-1 text-xl" />
              {errors.email && (
                <span className="text-red-500">
                  {errors.email.type === "required"
                    ? "Email is required"
                    : "Invalid email address"}
                </span>
              )}
            </div>
            <div className="mb-2 relative">
              <input
                className="pl-8 w-80 h-8 rounded-md"
                type="tel"
                placeholder="Mobile"
                id="mobile"
                name="mobile"
                {...register("mobile", { required: "Mobile is required" })}
                // ref={register({
                //   required: true,
                //   pattern: /^\d{10}$/,
                // })}
              />
              <CiMobile2 className="absolute top-1 left-1 text-xl" />
              {errors.mobile && (
                <span className="text-red-500">
                  {errors.mobile.type === "required"
                    ? "Mobile number is required"
                    : "Invalid mobile number"}
                </span>
              )}
            </div>
            <div className="mb-2 relative">
              <input
                className="pl-8 w-80 h-8 rounded-md"
                type="text"
                placeholder="Query description"
                name="query"
                id="query"
                {...register("query", { required: "Query is required" })}
                // ref={register({ required: true })}
              />
              <CiCircleQuestion className="absolute top-1 left-1 text-xl" />
              {errors.query && (
                <span className="text-red-500">Query description is required</span>
              )}
            </div>
            <button
              type="submit"
              className="px-6 py-2 my-5 rounded-full border-2 border-green-500 text-green-500"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop/>
      <Hero />
      <OurProcess />
      <BookConsulting />
    </>
  );
}

