// Creating this file to show course detail static without using api
import { useParams } from "react-router-dom";
import coursesData from "../staticUiData/courseData";
import { FaWhatsapp, FaFileDownload } from "react-icons/fa";
import PDFViewer from "../components/PdfViewer";
import { useForm } from "react-hook-form";



export default function CourseDetilsStatic() {

    const { id: courseId } = useParams();

    function getImageById(id) {
        const course = coursesData.find(course => course.id === id);
        return course ? course.image : 'default-image.jpg';
    }

    function getCourseTitleById(id) {
        const course = coursesData.find(course => course.id === id);
        return course ? course.courseName : 'Untitled';
    }

    function getStructureById(id){
        const course = coursesData.find(course => course.id === id);
        return course ? course.courseStructure : 'NA';
    }

    function CourseDetailsBanner() {
        return (
            <div>
                <div className="h-80 w-full relative bg-gradient-to-t from-orange-900 via-yellow-900 to-blue-900">
                    <img
                        src={getImageById(courseId)}
                        alt=""
                        className="h-full w-full object-cover absolute mix-blend-overlay"
                    ></img>
                    <div className="relative text-white flex justify-center items-end h-full w-full pb-5">
                        <h1 className="text-5xl  ">{getCourseTitleById(courseId)}</h1>
                    </div>
                </div>
            </div>
        );
    }

    function CourseDetailsBody() {
        return (
            <div className="">
                <CourseStructure courseName={getCourseTitleById(courseId)} />
            </div>
        )
    }

    function WhatsAppUpdate() {
        return (
            <>
                <div className=" flexp-8 text-xl text-bold text-center bg-green-200 p-8">For any query connect us on WhatsApp <FaWhatsapp className="inline text-2xl text-green-600" />  +91 7909064575  <RedirectToWhatsApp /></div>
            </>
        )
    }

    function RedirectToWhatsApp() {
        const phoneNumber = '+917909064575'; // Replace this with the actual phone number (include country code, e.g., '911234567890')
        // const courseName = 'ReactJS Development'; // Course name dynamically set
        const message = `Hello, I am interested in learning more about the ${getCourseTitleById(courseId)} course. Could you please provide more details?`;
        const encodedMessage = encodeURIComponent(message);
        return (
            <a
                href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
                target="_blank"  // Opens WhatsApp in a new tab
                rel="noopener noreferrer" // Security features for opening a new tab
            >
                <button style={{ padding: '10px 20px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Chat on WhatsApp
                </button>
            </a>
        );
    }


    function CourseStructure({courseName}) {
        const {
            register,
            handleSubmit,
            formState: { errors,isValid },
        } = useForm();

        const onSubmit = (data) => {
            console.log("Form Submitted:", data);
            alert("Course Enquiry submitted successfully!");
        };
        return (
            <div className="flex w-full">
                {/* PDF Viewer Section */}
                <div className="w-3/5 pr-4"> {/* 60% width with some right padding */}
                    <PDFViewer pdfUrl={getStructureById(courseId)} />
                </div>

                {/* Enquiry Form Section */}

                <div className="w-2/5">
                    <div className="rounded m-2 p-4 border shadow-lg bg-white">
                        <h2 className="text-xl font-bold mb-4">Course Enquiry Form</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">

                                <input
                                    id="name"
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="Your Name"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                                )}
                            </div>
                            <div className="mb-4">

                                <input
                                    id="email"
                                    type="email"
                                    className="w-full p-2 border rounded"
                                    placeholder="Your Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                                )}
                            </div>
                            <div className="mb-4">

                                <input
                                    id="mobile"
                                    type="tel"
                                    className="w-full p-2 border rounded"
                                    placeholder="Your Mobile Number"
                                    {...register("mobile", {
                                        required: "Mobile number is required",
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: "Mobile number must be 10 digits",
                                        },
                                    })}
                                />
                                {errors.mobile && (
                                    <span className="text-red-500 text-sm">{errors.mobile.message}</span>
                                )}
                            </div>
                            <div className="mb-4">
                                <input
                                    id="course"
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    //placeholder="Your Mobile Number"
                                    value={courseName}
                                    readOnly
                                    {...register("course", {
                                     
                                    })}
                                />

                              
                            </div>
                            <div className="mb-4">
                              
                                <textarea
                                    id="query"
                                    className="w-full p-2 border rounded"
                                    rows="4"
                                    placeholder="Your Query"
                                    {...register("query", { required: "Query is required" })}
                                ></textarea>
                                {errors.message && (
                                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={!isValid }
                                className={`${
                                      !isValid ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                                  }
                                     text-white px-4 py-2 rounded `}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }



    return (
        <>
            <CourseDetailsBanner />
            <WhatsAppUpdate />
            <CourseDetailsBody />
        </>

    );
}