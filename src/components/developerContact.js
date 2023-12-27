import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import '../css/blog-animation.css';


function DevContact({open}){
    if(!open){
        return null;
    }
    return(
        <div className=" h-60 w-2/4 bg-gradient-to-r from-purple-500 to-pink-500 grid grid-cols-3 mx-auto rounded-xl mt-3 mb-3"
       
        >
            
            <div className="col-span-1 rounded-l-lg">
                <img class="blob my-3 mx-3"  src="/dev.jpg" alt="" ></img>
            </div>
            <div className="col-span-2 rounded-r-lg my-5">
                <div>
                    <div class=" px-10 mb-20">
                        <h1 className="text-2xl font-bold text-start bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">MADHAV SHARMA</h1>
                        <h3 className="text-md text-start">Sr Software Enginner at Capgemini</h3>
                    </div>
                    {/* social icons */}
                    <div class="flex text-4xl space-x-3 justify-center px-10">
                        <IoLogoInstagram className=" hover:text-green-700"/>
                        <FaWhatsapp className=" hover:text-green-700"/>
                        <FaTelegramPlane className=" hover:text-green-700"/>
                        <FaXTwitter className=" hover:text-green-700"/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default DevContact;