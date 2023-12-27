import { useState } from "react";
import coursesData from "../../staticUiData/courseData";

export default function ManageCourse() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  // Add more state variables for your form data as needed

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  // const handleFormSubmit = (formData) => {
  //   // Handle the form submission logic
  //   console.log('Form data submitted:', formData);
  //   closeModal();
  // };



  return (






    <div>
      Manage Course
      <div>
        <button onClick={openModal}>Add New Course</button>

      </div>

      {/* Add a modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              {/* Your form component goes here */}
              <div className="bg-slate-600 dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 grid grid-cols-2">
                {/* Form content and input fields go here */}
                <div>
                <form className="flex flex-col space-y-2">
                  <label>
                    Course Name:
                    <input type="text" className="bg-slate-500"/>
                  </label>
                  <label>
                    Actual Price:
                    <input type="text" className="bg-slate-500"/>
                  </label>
                  <label>
                    Special Price:
                    <input type="text" className="bg-slate-500"/>
                  </label>
                  <label>
                    Actual Price:
                    <input type="text" className="bg-slate-500"/>
                  </label>
                  <label>
                    Actual Price:
                    <input type="text" className="bg-slate-500"/>
                  </label>

                  <button type="submit">Add Course</button>
                </form>
                </div>
                <div> Image</div>
              </div>

              {/* Close modal button */}
              <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                   {index+1}
                 </th>
                 <td class="px-2 py-2 flex items-center justify-center ">
                    <img src={data.image} alt="" className="h-12 rounded-lg shadow-md"></img>
                 </td>
                 <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">{data.courseName}</td>
                 <td class="px-6 py-4">{data.actualPrice}</td>
                 <td class="px-6 py-4">{data.specialPrice}</td>
                 <td class="px-6 py-4">Edit</td>
               </tr>

             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
