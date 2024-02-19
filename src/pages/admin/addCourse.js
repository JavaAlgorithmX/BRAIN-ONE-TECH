import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../store/authContext";
import { createCourse } from "../../services/api-course";
import { BsFileText } from "react-icons/bs";
import { BsFolder } from "react-icons/bs";

export default function AddCourse({ mode, courseDetails } ) {
  const [isStructure, setIsStructure] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [excelData, setExcelData] = useState([]);
  const [structure, setStructure] = useState([]);

  const [courseName, setCourseName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [actualPrice, setActualPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');

  useEffect(() => {
    if (mode === 'edit' && courseDetails) {
      // Pre-populate the form fields when in edit mode
      setCourseName(courseDetails.name || '');
      setImageUrl(courseDetails.image || '');
      setCourseDescription(courseDetails.description || '');
      // ... (populate other fields accordingly)
    }
  }, [mode, courseDetails]);

  const queryClient = useQueryClient();
  const { token } = useAuth();

  const createCourseMutation = async () => {
    // console.log("indide mutation call through muteate ->", batchId);
    try {
      const response = await createCourse({ data: excelData }, token);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const mutation = useMutation({
    mutationFn: createCourseMutation,
    onSettled: (data, error, variables) => {
      // Invalidate the cache after the mutation is completed (regardless of success or failure)
      queryClient.invalidateQueries([`courseList`]);
    },
  });

  function handleCreateCourse() {
    console.log("inside handle create method");
    mutation.mutate();
  }

  async function handlePreviewStructure() {
    await converExcelToStructure(excelData);
    setIsStructure(true);
    console.log("Structure -> -> ", structure);
  }

  function handlePreviewClose() {
    setIsStructure(false);
  }

  return (
    <div>
      <div className="text-xl font-semibold text-slate-500 mb-5 mt-2 ml-3">Add Course</div>
      <AddBasicCourseDetails />
      <AddCourseStructure />
      <AddBatch />
      <CourseOptions />
    </div>
  );

  function AddBasicCourseDetails() {
    return (
      <div className=" border border-slate-300 px-2 py-2 space-y-2 rounded-md">
        <input
          type="text"
          placeholder="Course Name"
          className="w-full rounded-md px-2 py-1"
          value={courseName}
        ></input>
        <input
          type="text"
          placeholder="Image url"
          className="w-full rounded-md px-2 py-1"
          value={imageUrl}
        ></input>
        <input
          type="text"
          placeholder="Course Description"
          className="w-full rounded-md px-2 py-1"
        ></input>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Actual Price"
            className="w-full rounded-md px-2 py-1"
          ></input>
          <input
            type="text"
            placeholder="Discount %"
            className="w-full rounded-md px-2 py-1"
          ></input>
          <input
            type="text"
            placeholder="Discounted price"
            className="w-full rounded-md px-2 py-1"
          ></input>
        </div>
      </div>
    );
  }
  function CourseOptions() {
    return (
      <div className="border border-slate-300 px-2 py-2 space-x-2 rounded-md mt-2 flex justify-center mb-10">
        <button className="bg-blue-300 px-3 py-1 rounded-md drop-shadow-md">
          Save
        </button>
        <button className="bg-red-300 px-3 py-1 rounded-md drop-shadow-md">
          Clear
        </button>
      </div>
    );
  }

  function AddCourseStructure() {
    const handleFileChange = (event) => {
      const file = event.target.files[0];

      if (
        file &&
        file.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        // Check if the file type is Excel (xlsx)
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onload = (e) => {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });

          // Assuming there's only one sheet in the Excel file
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];

          // Convert sheet data to JSON
          const jsonData = XLSX.utils.sheet_to_json(sheet);
          console.log(jsonData);
          setExcelData(jsonData);
        };

        reader.readAsArrayBuffer(file);
      } else {
        // Show an error message or perform any other desired action for invalid file types
        alert("Please upload a valid Excel file (xlsx).");
      }
    };

    return (
      <div className="border border-slate-300 px-2 py-2 space-y-2 rounded-md mt-2 ">
        <div>
          <p className="text-lg font-semibold">Add Course Structure</p>
          <div>
            <p className="text-yellow-500">Important points !</p>
            <ul className="text-sm px-4 text-slate-400">
              <li>
                You can also add course structure later by editing the course
              </li>
              <li>
                To add course Structure you need to follow specific format
              </li>
              <li>You can download sample excel format from here</li>
            </ul>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="excelUploader" className="">
            Upload Excel File
          </label>
          <div className="relative overflow-hidden bg-slate-100  rounded-md">
            <input
              type="file"
              id="excelUploader"
              accept=".xlsx"
              onChange={handleFileChange}
              className="opacity-0 h-full w-full absolute top-0 left-0 cursor-pointer"
            />
            <div className="text-slate-500 px-2 py-1 my-1">
              {selectedFile ? selectedFile.name : "Select Excel File"}
            </div>
          </div>
        </div>
        <div className="space-x-2 flex justify-end">
          <button
            className="bg-slate-400 px-2 py-1 rounded-md"
            onClick={handlePreviewStructure}
          >
            Preview course Structure
          </button>
          <button
            className="bg-slate-400 px-2 py-1 rounded-md"
            onClick={handlePreviewClose}
          >
            Close Preview
          </button>
        </div>
        {isStructure && <StructureView />}
      </div>
    );
  }

  function StructureView() {
    return (
      <div className="flex flex-col space-y-2 px-2 py-2 border border-slate-300 rounded-md">
        {structure.map((mainTopic, index) => (
          <div className="space-y-2" key={index}>
            <div className="bg-slate-400 w-full rounded-md px-2 py-1 text-white">
              <div className="flex space-x-2 items-center">
                <BsFolder />
                <span> {mainTopic.title}</span>
              </div>
            </div>
            <div className="border border-slate-300 rounded-md px-2 py-2 space-y-2">
              {mainTopic.subTopics.map((subTopic) => (
                <SubTopic title={subTopic.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  function SubTopic({ title }) {
    return (
      <div className="bg-red-200 w-full rounded-md px-2 py-1">
        <div className="flex space-x-2 items-center">
          <BsFileText />
          <spam>{title}</spam>
        </div>
      </div>
    );
  }

  function AddBatch() {
    return (
      <div className="border border-slate-300 px-2 py-2 space-x-2 rounded-md mt-2 space-y-2 ">
        <div className="text-lg font-semibold">Batch Details</div>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Batch Name"
            className="w-full rounded-md px-2 py-1"
          />
          <input
            type="text"
            placeholder="Start Date"
            className="w-full rounded-md px-2 py-1"
          />
          <input
            type="text"
            placeholder="Duration"
            className="w-full rounded-md px-2 py-1"
          />

          <input
            type="text"
            placeholder="Capacity"
            className="w-full rounded-md px-2 py-1"
          />
        </div>
      </div>
    );
  }

  async function converExcelToStructure(data) {
    let currentMainTopic = null;
    let newStructure = [];
    for (const row of data) {
      const mainTopic = row["Main Topic"];
      const subTopicString = row["Sub Topic"];

      if (mainTopic) {
        currentMainTopic = { title: mainTopic, subTopics: [] };

        if (subTopicString) {
          const subTopics = subTopicString
            .split(",")
            .map((subTopic) => ({ title: subTopic.trim() }));
          currentMainTopic.subTopics = subTopics;
        }
        newStructure.push(currentMainTopic);

        //console.log("Current main topic",currentMainTopic)
        //await Course.addMainTopic(course._id,currentMainTopic);
        //console.log("Pushed Main topic to db ",currentMainTopic);
      }
    }
    setStructure(newStructure);
  }
}
