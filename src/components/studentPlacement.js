import React from "react";
import CourseCard from "./courseCard";

function StudentPlacement() {
  return (
    <div >
      <h1 className="text-center">Student Placement</h1>
      <div class="flex justify-center">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <button 
      class="
      mx-auto
         border-solid border-2
       border-red-600 
       mb-5
       bg-red-600 px-3 py-3 rounded-md text-white hover:text-red-600 hover:bg-white hover:border-solid hover:border-2 hover:border-red-600">
        View All Courses
      </button>
    </div>
  );
}

export default StudentPlacement;
