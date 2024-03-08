import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { ImOffice } from "react-icons/im";


export default function QuickLinks() {
  return (
    <div className="bg-slate-900  text-white text-sm px-10 ">
      <div className="grid grid-cols-4 px-20 py-10 gap-4">
        <div className="">
          <div className="h-36 w-36">
            <img className="object-cover" src="./logo1.png" alt=""></img>
          </div>
          <div className="flex text-2xl space-x-3 text-orange-500">
            <a
              href="https://www.facebook.com/brainonetech?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/brainone-tech-solutionsindia-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-white"  />
            </a>
            <a
              href="https://www.instagram.com/brainonetech_solutions?utm_source=qr&igsh=MW90dXA2NzM0OHhwcA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-white" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-white" />
            </a>
          </div>
        </div>

        <div className=" space-y-2">
          <h2 className="mb-5 text-xl">LINKS</h2>
          <div className="space-y-2">
            <div>
              <NavLink to={"/"}>
                <h3>HOME</h3>
              </NavLink>
            </div>
            <div>
              <NavLink to={"/courses"}>
                <h3>TRAININGS</h3>
              </NavLink>
            </div>
            <div>
              <NavLink to={"/consulting"}>
                <h3>CONSULTING</h3>
              </NavLink>
            </div>
            <div>
              <NavLink to={"/aboutUs"}>
                <h3>ABOUT US</h3>
              </NavLink>
            </div>
            <div>
              <NavLink to={"/blog"}>
                <h3>BLOGS</h3>
              </NavLink>
            </div>
          </div>
        </div>

        <div className=" space-y-2">
          <h2 className="mb-5 text-xl">SERVICES</h2>
          <h3>PRODUCT ENGINEERING</h3>
          <h3>ENTERPRISE WEB SOLUTIONS</h3>
          <h3>QA SERVICES</h3>
          <h3>MOBILE DEVELOPMENT</h3>
          <h3>OUTSOURCING</h3>
        </div>

        <div className=" space-y-2">
          <h2 className="mb-5 text-xl">CONTACT</h2>
          <div className="flex space-x-2 items-center ">
            <ImOffice className="self-start  mt-2 text-fuchsia-500"/><span>
            RRG Green Phase 1<br /> Shivraj Nagar Rahatani
            <br /> Pune 411017</span>
            </div>
          <div className="flex space-x-2 items-center ">
            <FaWhatsapp className="text-green-500" />
            <IoIosCall className="text-blue-500"/>
            <span>+91 9209440305</span>
          </div>
          <div className="flex space-x-2 items-center ">
            <IoMdMail />
            <span>info@brainonetech.com</span>
          </div>
          <div className="flex space-x-2 items-center ">
            <FaGlobeAmericas className="text-blue-500" />
            <span>www.brainonetech.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
