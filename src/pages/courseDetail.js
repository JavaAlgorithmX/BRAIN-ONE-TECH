import React, { useState } from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function CourseDetail() {
  const [rating, setRating] = useState(4); // Initial value

  const AccordionItem = ({ title, contentArray }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="px-2 py-1">
        <div
          onClick={toggleAccordion}
          className="px-3 py-2 flex items-center justify-between bg-slate-500 rounded-md"
        >
          <h3> {title} </h3>
          <h3>{isOpen ? <FaCaretUp /> : <FaCaretDown />}</h3>
        </div>

      
        {isOpen && (
          <div className="px-5 py-2 bg-slate-400 rounded-md">
            <ul className="space-y-1">
              {contentArray.map((content, index) => (
                <li key={index} className="bg-slate-400 rounded-md">{content}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full ">
      <div className="W-full h-96 bg-gradient-to-r from-blue-400 to-orange-300">
        <img
           src="https://img-c.udemycdn.com/course/750x422/4166416_66ba_5.jpg"
          alt=""
          className="h-full w-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="px-24">
        <div>
          <h1 className="text-2xl font-bold">
            Web Automation using Selenium Webdriver
          </h1>
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

        <div className="border mx-2 my-2 px-1">What You Will Learn</div>

        <div className="border mx-2 my-2 px-1">This Course Include</div>

        <div className="border mx-2 my-2 p-2 bg-slate-300 rounded-md">
          <div className="text-slate-50 text-xl">
          Course Content
          </div>
          
          <AccordionItem
            title={"lesson 1"}
            contentArray={[
              "this is first content",
              "second content",
              " third content",
            ]}
          />
          <AccordionItem
            title={"lesson 2"}
            contentArray={[
              "this is first content",
              "second content",
              " third content",
            ]}
          />
        </div>

        <div className="border mx-2 my-2 px-1">Requirements</div>
        <div className="border mx-2 my-2 px-1">Description</div>
        <div className="border mx-2 my-2 px-1">What Student Says</div>
      </div>
    </div>
  );
}
