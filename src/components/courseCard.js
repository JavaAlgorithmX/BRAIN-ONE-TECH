import React from "react";
import { FaCalendarDays } from "react-icons/fa6";

function CourseCard() {
  return (
    <div class="h-80 w-60 mx-5 my-5 bg-red-500 rounded-lg grid grid-rows-5 drop-shadow-lg hover:drop-shadow-xl z-0">
      <div class="overflow-hidden bg-blue-400 row-span-3 rounded-t-lg">
        <img
          class="h-full w-full  object-cover rounded-t-lg hover:scale-125 transition duration-1500"
          src="/courses/selenium.jpg"
          alt=""
        ></img>
      </div>
      <div class=" bg-purple-500 row-span-1 text-start px-5 py-5">
        <p>Web Automation</p>
      </div>
      <div class="bg-stone-400 row-span-1 flex align-baseline justify-items-start px-5 py-5 rounded-b-lg">
        <FaCalendarDays class="mr-4 " />
        <p>4 Months</p>
      </div>
    </div>
  );
}

export default CourseCard;
