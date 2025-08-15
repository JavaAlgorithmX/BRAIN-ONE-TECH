import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
// import { useModal } from "../store/modelContext";

function Footer() {
  
  // const { openModal } = useModal();


  return (
    <div className="flex items-center justify-start flex-col py-10 px-5 bg-slate-900 text-white">
      <div>
        <p>&copy; Copyright 2025 BrainOneTech</p>
      </div>
      <div>
        <p >Developed with <span><BsFillHeartFill className="inline text-red-600" /></span> <span className="" 
        // onClick={openModal}
        > By Madhav Sharma</span></p>
      </div>
    </div>
  );
}

export default Footer;
