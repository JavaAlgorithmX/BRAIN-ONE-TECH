// import React, { useState } from "react";
// import { IoMdHeart } from "react-icons/io";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// import { NavLink } from "react-router-dom";
import coursesData from "../staticUiData/courseData";
import CourseCard from "../components/courseCard";
import { useEffect, useState } from "react";
import { getCourseList } from "../services/api-course";

export default function Courses() {
  // const [rating, setRating] = useState(4); // Initial value
  // const [isBookmarked, setIsBookmarked] = useState(false);

  // function handleBookmark() {
  //   setIsBookmarked(!isBookmarked);
  // }
  const [courseDataList, setCourseDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCourseList = await getCourseList();
        setCourseDataList(fetchedCourseList);
        console.log(fetchedCourseList);
      } catch (error) {
        console.error('Error fetching course list:', error);
      }
    };
    fetchData();
  }, []);
 

  function CoursesList() {
    return (
      <div className="bg-slate-900 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4 text-slate-50 px-10 py-10 mx-auto">
        {courseDataList.map((data, index) => (
          <CourseCard
            key={data._id}
            id={data._id}
            title={data.courseName}
            originalPrice={data.actualPrice}
            specialPrice={data.specialPrice}
            nextBatch={data.nextBatch}
            image={data.image}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <CoursesList />
    </div>
  );
}
