import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

function Footer({onShowDevContact}) {

  return (
    <div className="flex items-center justify-start flex-col py-10 px-5 bg-slate-900 text-white">
      <div>
        <p>&copy; Copyright 2023 BrainOneTech</p>
      </div>
      <div>
        <p >Developed with <span><BsFillHeartFill className="inline text-red-600" /></span> <span onClick={onShowDevContact}> By Madhav Sharma</span></p>
      </div>
      <div className="flex justify-between">
        <p>Privacy</p>
        <p className="mx-3">Terms</p>
        <p>Sitemap</p>
      </div>
    </div>
  );
}

export default Footer;
