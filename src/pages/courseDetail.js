import React, { useState } from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function CourseDetail(){
    const [rating, setRating] = useState(4); // Initial value





return(
    <div className="w-full ">
        <div className="W-full h-56" style={{
            backgroundImage :`url("./selenium.jpg")`,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize:"cover"
        }}></div>
        <div>
            <h1 className="text-2xl font-bold">Web Automation using Selenium Webdriver</h1>
            <div className="rating flex space-x-2 font-bold">
            <p className="text-yellow-600 text-xl">{rating}</p>
            <Rating
                key={ThinStar}
              style={{ maxWidth: 150 }}
              value={rating}
              readOnly
              onChange={setRating}
            />
          </div>
          <div className="flex space-x-2 text-xl font-bold ">
            <p>&#8377; 5000</p>
            <p className="line-through text-stone-400">&#8377; 15000</p>
          </div>
          <div>
            <p className="text-xl">Next Upcomming Batch : 15 Jan 2024</p>
          </div>
        </div>

        <div className="border mx-2 my-2 px-1">
            What You Will Learn
        </div>
        <div className="border mx-2 my-2 px-1">
            This Course Include
        </div>
        <div className="border mx-2 my-2 px-1">
            Course Content
        </div>
        <div className="border mx-2 my-2 px-1">
           Requirements
        </div>
        <div className="border mx-2 my-2 px-1">
            Description
        </div>
        <div className="border mx-2 my-2 px-1">
            What Student Says
        </div>
        
        
    </div>
);







}