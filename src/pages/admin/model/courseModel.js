import { useEffect, useState } from "react";
import CourseCard from "../../../components/courseCard";

const CourseModal = ({ isOpen, onClose, onSubmit ,isEditing, editData }) => {
  const [formData, setFormData] = useState({
    courseName: '',
    actualPrice: '',
    specialPrice: '',
    image: '', // Add an image property to the state
  });

  useEffect(() => {
    // Populate form data when in edit mode
    if (isEditing && editData) {
      setFormData(editData);
    } else {
      // Reset form data when switching from edit to add mode
      setFormData({
        courseName: '',
        actualPrice: '',
        specialPrice: '',
        image: '',
      });
    }
  }, [isEditing, editData]);


  const handleInputChange = (e) => {
    // Handle input changes and update formData
    // Example: setFormData({ ...formData, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div>
    {isOpen &&(
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* Your form component goes here */}
          <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 grid grid-cols-2">
            {/* Form content and input fields go here */}
            <div className="px-2 py-2 flex items-center justify-center ">
              <form onSubmit={handleSubmit} className="flex flex-col px-2 space-y-2">
                <label>
                  Course Name:
                  <input type="text" name="courseName" value={formData.courseName} onChange={handleInputChange} className="rounded-md" />
                </label>
                <label>
                  Actual Price:
                  <input type="text" name="actualPrice" value={formData.actualPrice} onChange={handleInputChange} className="rounded-md" />
                </label>
                <label className="">
                  Special Price:
                  <input type="text" name="specialPrice" value={formData.specialPrice} onChange={handleInputChange} className="rounded-md" />
                </label>
                <label className="">
                  Image:
                  <input type="text" name="image" value={formData.image} onChange={handleInputChange}  className="rounded-md" />
                </label>

                <button
                  type="submit"
                  className="px-2 py-1 text-slate-50 bg-blue-500 rounded-lg "
                >
                  {isEditing ? "Update Course" : "Add Course"}
                </button>
              </form>
            </div>
            <div className="border-l px-2">
              <CourseCard image={formData.image} originalPrice={formData.actualPrice} specialPrice={formData.specialPrice} title={formData.courseName} />
            </div>
          </div>

          <div className="absolute top-2 right-3 px-1 py-1 drop-shadow-lg cursor-pointer " onClick={onClose}>X</div>

        </div>
      </div>
    </div>
    )}
    </div>
  );
};

export default CourseModal;
