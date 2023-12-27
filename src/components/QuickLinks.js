import React from "react";
import { FaFacebookF,FaLinkedinIn,FaInstagram ,FaTwitter} from "react-icons/fa";


export default function QuickLinks(){
    return(
        <div className="bg-slate-900  text-white text-sm ">
            <div className="grid grid-cols-9 px-20 py-10 gap-4">
                <div    className="md:col-span-2 col-span-9 ">
                    <div className="h-36 w-36">
                        <img className="object-cover" src="./logo1.png" alt=""></img>

                    </div>
                    <div className="flex text-2xl space-x-3 text-orange-500">
                        <FaFacebookF/>
                        <FaLinkedinIn/>
                        <FaInstagram/>
                        <FaTwitter/>

                    </div>

                </div>

                <div className="md:col-span-1 col-span-9 space-y-2" >
                    <h2 className="mb-5 text-xl">LINKS</h2>
                    <h3>HOME</h3>
                    <h3>ABOUT US</h3>
                    <h3>PRODUCTS</h3>
                    <h3>CAREER</h3>
                    <h3>CONTACT</h3>

                </div>

                <div className="col-span-9 md:col-span-2 space-y-2">
                    <h2 className="mb-5 text-xl">COURSES</h2>
                    <h3>WEB AUTOMATION</h3>
                    <h3>MOBILE AUTOMATION</h3>
                    <h3>API AUTOMATION</h3>
                    <h3>PERFORMANCE TESTING</h3>
                    <h3>PERSONAL DEVELOPMENT</h3>

                </div>

                <div className="col-span-9 md:col-span-2 space-y-2">
                <h2 className="mb-5 text-xl">SERVICES</h2>
                <h3>PRODUCT ENGINEERING</h3>
                    <h3>ENTERPRISE WEB SOLUTIONS</h3>
                    <h3>QA SERVICES</h3>
                    <h3>MOBILE DEVELOPMENT</h3>
                    <h3>OUTSOURCING</h3>
                    <h3>STAFF AUGMENTATION</h3>

                </div>

                <div className="col-span-9 md:col-span-2 space-y-2">
                <h2 className="mb-5 text-xl">CONTACT</h2>
                <h3>OFFICE 201, MONT VERT ZENITH, BANER RD, RIVIRESA SOCIETY, BANER, PUNE, MAHARASHTRA 411045</h3>
                <h3>IN : 9898765487</h3>
                <h3>IN : 9898765487</h3>
                <h3>IN : 9898765487</h3>
                

                </div>
            </div>

        </div>
    );
}