import React, { useState } from "react";

import { useForm } from "react-hook-form";
import "../../src/css/GsapCard.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { UserRegistration, UserLogIn } from "../services/api-auth";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../store/authContext";

export default function Auth() {
// { updateLoggedInStatus }
  const [isSignUpClicked, SignUpToggler] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  function handleShowPassword() {
    setIsShowPassword(!isShowPassword);
  }

  let userData;
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const onSubmit = async (data) => {
    userData = data;
    if (isSignUpClicked) {
      try {
        const registeredUser = await UserRegistration(userData);
        storeTokenInLS(registeredUser.token);
        console.log("User registered successfully:", registeredUser);
        navigate("/");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    } else {
      UserSignIn();
    }
  };

  const onError = (error) => {
    console.log(error);
  };

  async function UserSignIn() {
    const loggedInUser = await UserLogIn(userData);
    storeTokenInLS(loggedInUser.token);
    console.log("logged in user token", loggedInUser.token);
    if (loggedInUser) {
      navigate("/");
    }

    // if(loggedInUser){
    //   navigateToHomePage();
    // }
  }

  function handleTogglerClick() {
    SignUpToggler(!isSignUpClicked);
  }

  function LoginForm() {
    const { register, handleSubmit } = useForm();
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
    const { register, handleSubmit } = useForm();
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center flex-col"
      >
        <input
          className=" h-10 w-80 mb-2 md:w-60 bg-fuchsia-100 rounded-md px-3"
          type="text"
          placeholder="Name"
          {...register("name")}
        ></input>

        <input
          className=" h-10 w-80 mb-2 md:w-60 bg-fuchsia-100 rounded-md px-3"
          type="text"
          placeholder="Email"
          {...register("email")}
        ></input>

        <input
          className=" h-10 w-80 mb-2 md:w-60 bg-fuchsia-100 rounded-md px-3"
          type="password"
          placeholder="Password"
          {...register("password")}
        ></input>
        <input
          className=" h-10 w-80 mb-3 md:w-60 bg-fuchsia-100 rounded-md px-3"
          type="text"
          placeholder="Mobile"
          {...register("mobile")}
        ></input>

        <button
          type="submit"
          className="h-12 md:h-12 bg-fuchsia-900 w-60 rounded-full text-fuchsia-50"
        >
          Sign Up
        </button>
      </form>
    );
  }

  return (
    <div
      className="h-screen bg-orange-600 flex items-center justify-center px-4 py-4"
      style={{
        backgroundImage: `url(./login-back.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className=" h-4/5 w-full md:w-72 rounded-lg flex flex-col items-center justify-center"
        style={{
          background: "rgba(255,255,255,.05)",
          boxShadow: "0 25px 45px rgba(0, 0, 0, .2)",
          border: "2px solid rgba(255,255,255,.5)",
          borderRight: "2px solid rgba(255,255,255,.2)",
          borderBottom: "2px solid rgba(255,255,255,.2)",
          backdropFilter: "blur(6px)",
        }}
      >
        {/* <Spinner /> */}

        <h1 className="text-3xl md:text-2xl font-bold text-fuchsia-900 mb-5 mt-5">
          {`${isSignUpClicked ? "Create Account" : "Sign In to BrainOne"}`}
        </h1>

        <p className="text-md md:text-sm text-fuchsia-900 mb-2">
          Use your Email for registration
        </p>
        {isSignUpClicked && <SignUpForm />}
        {!isSignUpClicked && <LoginForm />}

        <p className="mt-5 mb-5 text-white">
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
