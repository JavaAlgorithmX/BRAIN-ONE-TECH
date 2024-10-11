import React from "react";
// import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function CourseCard({
  image,
  id,
  title,
  // rating,
  // specialPrice,
  // originalPrice,
  // nextBatch,
}) {
  const navigate = useNavigate();

  function courseDetails(){
    console.log(id)
    console.log(image)
    navigate(`/course/${id}`)
  }

  return (
    <div
      class="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer
      grid grid-rows-3
      "
      onClick={courseDetails}
    >
      {/* <a href="/"> */}
      <div className="  row-span-2">
      <img
        class="rounded-t-lg  object-cover  "
        src={
          image
            ? image
            : "../place-holder.jpg"
        }
        alt=""
      />
      </div>
      {/* </a> */}
      <div class="p-5 flex items-center justify-center row-span-1">
        {/* <a href="/"> */}
        <h5 class=" text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h2 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{id}</h2>
      </div>
    </div>
  );
}
