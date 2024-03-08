import { memo, useCallback, useEffect, useState } from "react";
import { getCourseById } from "../../services/api-course";
import { useParams } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import { FaPlus, FaMinus } from "react-icons/fa6";


export default function EditCourse() {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const [subTopics, setSubTopics] = useState([""]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await getCourseById(id);
        setCourse(courseData);
        // setIsLoading(false);
        console.log(courseData);
      } catch (error) {
        console.error("Error fetching course :", error);
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const AddSubTopicInput = memo(({ index, value, onRemove, onChange }) => {
    return (
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Add Sub Topic Title"
          className="w-full rounded-md px-2 py-1"
          //value={value}
         // onChange={(e) => onChange(index, e.target.value)}
        />
  
        {index === subTopics.length - 1 ? (
          <div
            className="px-2 py-2 bg-slate-300 rounded-md cursor-pointer"
            onClick={() => handleAddSubTopic()}
          >
            <FaPlus />
          </div>
        ) : (
          <div
            className="px-2 py-2 bg-slate-300 rounded-md cursor-pointer"
            onClick={() => onRemove(index)}
          >
            <FaMinus />
          </div>
        )}
      </div>
    );
  });
  

  function handleRemoveSubTopic(index) {
    const updatedSubTopics = [...subTopics];
    updatedSubTopics.splice(index, 1);
    setSubTopics(updatedSubTopics);
  }

  function AddMainTopic() {
    return (
      <div className="flex flex-col space-y-2 border border-slate-50 rounded-md px-2 py-2">
        <input
          type="text"
          placeholder="Add Main Topic Title"
          className="rounded-md px-2 py-1"
        />
        <div className="border border-slate-50 rounded-md px-2 py-2 space-y-2">
          {subTopics.map((subTopic, index) => (
            <AddSubTopicInput
              key={index}
              index={index}
              value={subTopic}
              onRemove={(i) => handleRemoveSubTopic(i)}
            />
          ))}
        </div>
        <div className="flex flex-row-reverse">
          <button className="bg-slate-300 px-2 py-1 rounded-md">Save</button>
          <button className="bg-slate-300 mx-2 px-2 py-1 rounded-md">
            Clear
          </button>
        </div>
      </div>
    );
  }

  
  const handleAddSubTopic = useCallback(() => {
    setSubTopics((prevSubTopics) => [...prevSubTopics, ""]);
  }, []);
  

  return (
    <div className="space-y-2">
      <div className="bg-slate-400 w-full h-16 rounded-md px-2 py-1 flex items-center">
        <button className="bg-gradient-to-tr from-blue-500 to via-purple-400 bg-yellow-300 px-3 py-2 rounded-md text-white font-bold drop-shadow-md">
          Create New Course
        </button>
      </div>
      <div className="w-full bg-slate-400 rounded-md px-2 py-2 space-y-2 transition-all">
        {AddMainTopic()}
      </div>
    </div>
  );
}

