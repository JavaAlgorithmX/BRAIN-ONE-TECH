import React, { useState } from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { enrollInToCourse, useCourseById } from "../services/api-course";
import { useParams } from "react-router-dom";
import { BsFileText } from "react-icons/bs";
import { BsFolder } from "react-icons/bs";
import { BsFolder2Open } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { useAuth } from "../store/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PaymentModal from "./model/payment-model";

export default function CourseDetail() {
  const [rating, setRating] = useState(4); // Initial value

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentModelData, setPaymentModelData] = useState({
    courseId: "",
    batchId: "",
  });

  const queryClient = useQueryClient();
  const { id: courseId } = useParams();
  const { token } = useAuth();
  const { data: course, isLoading, isError } = useCourseById(courseId);

  const enrollToBatchMutation = async ({ courseId, batchId }) => {
    console.log("indide mutation call through muteate ->", batchId);
    try {
      const response = await enrollInToCourse(courseId, batchId, token);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const openPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const mutation = useMutation({
    mutationFn: enrollToBatchMutation,
    onSettled: (data, error, variables) => {
      // Invalidate the cache after the mutation is completed (regardless of success or failure)
      queryClient.invalidateQueries([`course-${courseId}`]);
    },
  });

  function handleEnrollToBatch(courseId, batchId, setIsEnrolling) {
    setIsPaymentModalOpen(true);
    setPaymentModelData({ courseId: courseId, batchId: batchId });
    setIsEnrolling(true);
    console.log("inside handle enroll method", batchId);
    mutation.mutate({ courseId, batchId });
  }

  if (isLoading) {
    return <div className="text-red-600 font-bold text-4xl">Loading</div>;
  }

  function BatchCard({
    id,
    name,
    startDate,
    capacity,
    progress,
    enrolledStudents,
  }) {
    const [isEnrolling, setIsEnrolling] = useState(false);
    const dateObject = new Date(startDate);
    const options = { day: "numeric", month: "short", year: "2-digit" };
    const formattedDate = dateObject.toLocaleDateString(undefined, options);
    return (
      <div className="relative bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100 h-32 w-full rounded-md px-1 py-1 drop-shadow-md grid grid-cols-3 ">
        <div className="text-sm text-slate-800 col-span-2 ">
          <p>Batch 1</p>
          <div className="flex items-center space-x-2">
            <BsCalendar2CheckFill />
            <p>Starts: {formattedDate}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaUsers />
            <p>Capacity: {capacity}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaUserGraduate />
            <p>Student Enrolled: {enrolledStudents}</p>
          </div>
        </div>
        <div className=" col-span-1 grid grid-rows-3 overflow-auto">
          <div className="row-span-2  px-5">
            <CircularProgressbar
              value={progress}
              text={progress}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Text size
                textSize: "16px",
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
                // Colors
                pathColor: `rgba(195, 43, 4, ${progress / 100})`,
                textColor: "#f88",
                trailColor: "#1e81b0",
                backgroundColor: "#2596be",
              })}
            />
          </div>

          <div className="row-span-1  flex items-center justify-center">
            <button
              onClick={() => handleEnrollToBatch(courseId, id, setIsEnrolling)}
              className="drop-shadow-md px-1 py-1 text-sm bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-green-200 via-green-400 to-green-500 rounded-md"
            >
              Enroll Now
            </button>
          </div>
        </div>
        {isEnrolling && (
          // || mutation.isPending || mutation.isError
          <EnrollSpinner />
        )}
       

      </div>
    );
  }

  const AccordionItem = ({ title, contentArray }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className=" px-2 py-2 rounded-md bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100">
        <div
          onClick={toggleAccordion}
          className="cursor-pointer px-3 py-2 flex items-center justify-between  rounded-md bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100  "
        >
          <h3 className="flex items-center">
            <span className="mr-2">
              {isOpen ? <BsFolder2Open /> : <BsFolder />}
            </span>{" "}
            {title}{" "}
          </h3>
          <h3>{isOpen ? <FaCaretUp /> : <FaCaretDown />}</h3>
        </div>

        {isOpen && (
          <div className="px-5 py-2  rounded-md">
            <ul className="space-y-1">
              {contentArray.map((subtopics, index) => (
                <li key={index} className=" rounded-md ">
                  <div className="flex items-center">
                    {" "}
                    <span className="mr-3">
                      <BsFileText />
                    </span>{" "}
                    {subtopics.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  function EnrollSpinner() {
    return (
      <div
        className={`absolute flex flex-items justify-center top-0 left-0 h-full w-full`}
      >
        <div className=" flex items-center">
          <div className="mr-2">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
          {mutation.isPending ? (
            "Enrolling..."
          ) : (
            <>
              {mutation.isError ? (
                <div>An error occurred: {mutation.error.message}</div>
              ) : null}

              {mutation.isSuccess ? <div>Enrolled!</div> : null}
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-400 to-orange-300">
      {/* Course image  */}
      <div className="W-full h-96 bg-gradient-to-r from-blue-400 to-orange-300 drop-shadow-lg">
        <img
          src={
            course.image ||
            "https://img-c.udemycdn.com/course/750x422/4166416_66ba_5.jpg"
          }
          alt=""
          className="h-full w-full object-cover mix-blend-overlay"
        />
        <div className="h-full w-full absolute top-0 left-0 flex items-center justify-center ">
          <img
            src={
              course.image ||
              "https://img-c.udemycdn.com/course/750x422/4166416_66ba_5.jpg"
            }
            alt=""
            className="h-4/5 w-4/5   object-cover rounded-md drop-shadow-lg "
          />
        </div>
      </div>

      {/* Course content  */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        closeModal={closePaymentModal}
        courseId={paymentModelData.courseId}
        batchId={paymentModelData.batchId}
        // handleEnroll={handleEnroll}
      />

      {/* <PaymentModal
        isOpen={isPaymentModalOpen}
        closeModal={closePaymentModal}
        // handleEnroll={handleEnroll}
      /> */}

      <div className="px-5 sm:px-8 md:px-10 lg:px-20 py-10">
        <div>
          <h1 className="text-2xl font-bold">{course.name}</h1>
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

          {/* Batch  */}
          <div className="bg-slte-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-2 py-2">
            {course.batches.map((batch) => (
              <BatchCard
                key={batch._id}
                id={batch._id}
                startDate={batch.startDate}
                progress={batch.progress}
                capacity={batch.capacity}
                enrolledStudents={batch.enrolledStudents.length}
              />
            ))}
          </div>
          {/* <MutationBlock /> */}
        </div>

        {/* <div className="border mx-2 my-2 px-1">What You Will Learn</div>

        <div className="border mx-2 my-2 px-1">This Course Include</div> */}

        <div className=" mx-2 my-2 p-2 rounded-md bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100">
          <div className="text-slate-900 text-xl font-bold pb-5 pl-2">
            Course Content
          </div>
          <div className=" rounded-md space-y-2 px-2 py-2 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100">
            {course.structure.map((topic) => (
              <AccordionItem
                title={topic.title}
                contentArray={topic.subTopics}
              />
            ))}
          </div>
        </div>

        {/* <div className="border mx-2 my-2 px-1">Requirements</div>
        <div className="border mx-2 my-2 px-1">Description</div>
        <div className="border mx-2 my-2 px-1">What Student Says</div> */}
      </div>
    </div>
  );
}
