import React from "react";
import { FaArrowRight } from "react-icons/fa6";


function NewsLetter(){
    return(
        <div class="h-40 bg-slate-900 grid grid-rows-2 px-20">
            <div class="flex items-center justify-center">
                <p className="mb-5 text-2xl font-bold text-white font-serif">Subscribe Weekly Newsletter</p>
            </div>
            <div className="flex justify-center">
                <div className="border-b-2 h-14">
                <input class="h-12 w-80 rounded-l-md pl-4 bg-slate-900 " type="text" placeholder="Email" ></input>
                <button class="bg-slate-900 h-12 rounded-full border-2 px-3 text-white text-lg hover:bg-blue-800"><FaArrowRight/></button>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}
export default NewsLetter;