// PaymentModal.js

import React, { useState } from "react";
import { useAuth } from "../../store/authContext";
import { useCourseById } from "../../services/api-course";

const PaymentModal = ({ isOpen, closeModal, handleEnroll ,courseId, batchId }) => {
  const { user, isLoggedIn } = useAuth();
  const { data: course, isLoading, isError } = useCourseById(courseId);


  //   const [paymentDetails, setPaymentDetails] = useState({
  //     name: "",
  //     email: "",
  //     mobile: "",
  //     qrCode: "",
  //     upiId: "",
  //     paymentScreenshot: null,
  //   });

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setPaymentDetails((prevDetails) => ({
  //       ...prevDetails,
  //       [name]: value,
  //     }));
  //   };

  //   const handleFileChange = (e) => {
  //     const file = e.target.files[0];
  //     setPaymentDetails((prevDetails) => ({
  //       ...prevDetails,
  //       paymentScreenshot: file,
  //     }));
  //   };

  const handleEnrollClick = () => {
    // Call the handleEnroll function passed from the parent component
    // handleEnroll(paymentDetails);
    // Close the modal after enrollment
    closeModal();
  };

//   const findBatchById = (batchId, courseData)=> {
//     // Iterate through batches in the courseData
//     for (const batch of courseData.batches) {
//       // Check if the current batch's _id matches the provided batchId
//       if (batch._id === batchId) {
//         // Return the found batch
//         return batch;
//       }
//     }
//     // If no batch is found, return null or handle accordingly
//     return null;
//   }
//   const batch = findBatchById(batchId,course);

//   const dateObject = new Date(batch.startDate);
//     const options = { day: "numeric", month: "short", year: "2-digit" };
//     const formattedDate = dateObject.toLocaleDateString(undefined, options);
  

  return (
    <div
      className={`fixed ${
        isOpen ? "block" : "hidden"
      } top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10`}
    >
      <div className="bg-white p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 relative">
        <div>
          <h2 className="text-2xl font-bold mb-4">Payment Details</h2>

          {/* course details  */}
          {/* <div className="px-3 py-1 border border-slate-300 rounded-md mb-2">
            <h3>{course.name}</h3>
            <h3>{course.price}</h3>
            <h3>{course.ratings}</h3> 
          </div> */}
          {/* batch details  */}
          <div className="px-3 py-1 border border-slate-300 rounded-md mb-2">
            {/* <h3>{formattedDate}</h3>
            <h3>{batch.duration}</h3> */}
          </div>
          {/* user details  */}
          <div className="px-3 py-1 border border-slate-300 rounded-md mb-2">
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.mobile}</h3>
          </div>

          <form className="space-y-4">
            {/* <div>
            <label className="block text-sm font-semibold text-gray-600">Name:</label>
            <input
              type="text"
              name="name"
              value={paymentDetails.name}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
            />
          </div> */}
            {/* Add similar input fields for other details */}
            <div>
              <label className="block text-sm font-semibold text-gray-600">
                Upload Payment Screenshot:
              </label>
              <input
                type="file"
                // onChange={handleFileChange}
                className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
              />
            </div>
            <button
              type="button"
              onClick={handleEnrollClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Enroll
            </button>
          </form>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            &times;
          </button>
        </div>
        <div>
          <img
            src="https://boofcv.org/images/thumb/3/35/Example_rendered_qrcode.png/400px-Example_rendered_qrcode.png"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
