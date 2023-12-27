import { useState } from "react";
import coursesData from "../../staticUiData/courseData";
import CourseModal from "./model/courseModel";

export default function ManageCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);


  const openModal = () => {
    setIsModalOpen(true);
    setIsEditing(false); // Set to add mode
    setEditData(null); // Reset edit data
  };

  const openEditModal = (rowData) => {
    setIsModalOpen(true);
    setIsEditing(true); // Set to edit mode
    setEditData(rowData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setEditData(null);
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission based on isEditing state
    if (isEditing) {
      console.log("Form data for editing submitted:", formData);
      // Perform editing logic
    } else {
      console.log("Form data for adding submitted:", formData);
      // Perform adding logic
    }
    closeModal();
  };

  return (
    <div>
      <div>
        <button className="bg-slate-400 rounded-lg px-2 py-1 my-2 drop-shadow-md text-slate-50" onClick={openModal}>Add New Course</button>
      </div>
     
     {/* Model  */}

     <CourseModal  
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onSubmit={handleFormSubmit}  
        isEditing={isEditing}
        editData={editData}
        />

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Course Id
              </th>
              <th scope="col" class="px-6 py-3">
                Image
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Actual Price
              </th>
              <th scope="col" class="px-6 py-3">
                Offer Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {coursesData.map((data, index) => (
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  {index + 1}
                </th>
                <td class="px-2 py-2 flex items-center justify-center ">
                  <img
                    src={data.image}
                    alt=""
                    className="h-12 rounded-lg shadow-md"
                  ></img>
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  {data.courseName}
                </td>
                <td class="px-6 py-4">{data.actualPrice}</td>
                <td class="px-6 py-4">{data.specialPrice}</td>
                <td class="px-6 py-4"><button onClick={() => openEditModal(data)} className="text-blue-500">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
