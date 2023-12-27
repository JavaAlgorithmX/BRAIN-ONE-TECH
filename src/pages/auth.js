import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../../src/css/GsapCard.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { UserRegistration } from "../services/api-auth";
import { useNavigate } from "react-router-dom";


export default function Auth({ updateLoggedInStatus }) {
  const [isSignUpClicked, SignUpToggler] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  function handleShowPassword() {
    setIsShowPassword(!isShowPassword);
  }

  let userData;
  const navigate = useNavigate(); 

  const onSubmit = (data) => {
    
    console.log(data);
    userData = data;
    if (isSignUpClicked) {
      console.log("inside sign Up");
      try {
        const registeredUser = UserRegistration(userData);
        console.log('User registered successfully:', registeredUser);
        updateLoggedInStatus(true);
        navigate('/user');
      } catch (error) {
        console.error('Registration failed:', error);
       
      }
    } else {
      console.log("inside sign in");
      UserSignIn();
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  function UserSignIn() {
    axios
      .post("http://localhost:4000/api/users/login", userData)
      .then(function (response) {
        console.log(`response :`, response.data);
        alert(
          `Hi ${userData.name}, Congratulations you have successfully joined us`
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleTogglerClick() {
    SignUpToggler(!isSignUpClicked);
  }

  function LoginForm() {
    const {
      register,
      handleSubmit,
      // watch,
      // formState: { errors },
    } = useForm();
    return (
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex justify-center items-center flex-col mt-3"
      >
        <input
          className=" h-10 w-80 mb-5 md:w-60 bg-fuchsia-100 rounded-md px-3"
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "Email is mandatory field",
          })}
        ></input>
        <div className="flex items-center mb-5">
          <input
            className=" h-10 w-80  md:w-60 mr-5  bg-fuchsia-100 rounded-md px-3"
            type={isShowPassword ? "text" : "password"}
            placeholder="password"
            {...register("password", {
              required: "Password is required to log in.",
            })}
          />
          {isShowPassword && (
            <FaRegEye onClick={handleShowPassword} className="-ml-10 " />
          )}
          {!isShowPassword && (
            <FaRegEyeSlash onClick={handleShowPassword} className="-ml-10" />
          )}
        </div>

        <p className="text-md md:text-sm text-fuchsia-900 mb-5">
          Forget your password?
        </p>
        <button
          type="submit"
          className="h-12 bg-fuchsia-900 w-60 md:w-40 rounded-full text-fuchsia-50"
        >
          Sign In
        </button>
      </form>
    );
  }

  function SignUpForm() {
    const {
      register,
      handleSubmit,
      // watch,
      // formState: { errors },
    } = useForm();
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center flex-col"
      >
        <input
          className=" h-10 w-80 mb-3 md:w-60 bg-fuchsia-100 rounded-md px-3"
          type="text"
          placeholder="Name"
          {...register("name")}
        ></input>

        <input
          className=" h-10 w-80 mb-3 md:w-60 bg-fuchsia-100 rounded-md px-3"
          type="text"
          placeholder="Email"
          {...register("email")}
        ></input>

        <input
          className=" h-10 w-80 mb-3 md:w-60 bg-fuchsia-100 rounded-md px-3"
          type="password"
          placeholder="Password"
          {...register("password")}
        ></input>
        <input
          className=" h-10 w-80 mb-5 md:w-60 bg-fuchsia-100 rounded-md px-3"
          type="text"
          placeholder="Mobile"
          {...register("mobile")}
        ></input>

        <button
          type="submit"
          className="h-10 md:h-12 bg-fuchsia-900 w-40 rounded-full text-fuchsia-50"
        >
          Sign Up
        </button>
      </form>
    );
  }

  return (
    <div
      className="h-screen  bg-orange-600 flex items-center justify-center px-4 py-4"
      style={{
        backgroundImage: `url(./login-back.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className=" h-full w-full md:w-72  bg-green-600 rounded-lg flex flex-col items-center justify-center"
        style={{
          background: "rgba(255,255,255,.05)",
          boxShadow: "0 25px 45px rgba(0, 0, 0, .2)",
          border: "2px solid rgba(255,255,255,.5)",
          borderRight: "2px solid rgba(255,255,255,.2)",
          borderBottom: "2px solid rgba(255,255,255,.2)",
          backdropFilter: "blur(6px)",
        }}
      >
        <h1 className="text-3xl md:text-2xl font-bold text-fuchsia-900 mb-10">
          {`${isSignUpClicked ? "Create Account" : "Sign In to BrainOne"}`}
        </h1>
        <div className="flex space-x-5 mb-5">
          <div className="bg-fuchsia-100 p-2 rounded-full">
            <FaFacebookF className="text-blue-600" />
          </div>
          <div className="bg-fuchsia-100 p-2 rounded-full">
            <FcGoogle />
          </div>
          <div className="bg-fuchsia-100 p-2 rounded-full">
            <FaLinkedinIn className="text-indigo-700" />
          </div>
        </div>
        <p className="text-md md:text-sm text-fuchsia-900 mb-5">
          Or Use your Email for registration
        </p>
        {isSignUpClicked && <SignUpForm />}
        {!isSignUpClicked && <LoginForm />}

        <p className="mt-10 text-white">
          {`${
            isSignUpClicked
              ? "Already have an Account ?"
              : `Don't have an Account ?`
          }`}
          <span
            onClick={handleTogglerClick}
            className="text-green-400 font-medium cursor-pointer"
          >{`${isSignUpClicked ? " Log In" : " Join Us"}`}</span>
        </p>
      </div>
    </div>
  );
}
