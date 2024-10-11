// Creating this file to show course detail static without using api
import { useParams } from "react-router-dom";
import coursesData from "../staticUiData/courseData";
import { FaWhatsapp, FaFileDownload } from "react-icons/fa";



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
                <CourseStructure />
                <PaymentAndEnroll />
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

    function CourseStructure() {
        return (
            <>
                <div className="h-80 bg-red-200 flex justify-center items-center">
                    <div className="bg-blue-200 px-20 py-8 rounded-full shadow-lg hover:shadow-xl cursor-pointer text-3xl">Course Structure <FaFileDownload className="inline" /></div>
                </div>
            </>
        )
    }

    function PaymentAndEnroll() {
        return (
            <div className=" h-full bg-red-300">
                <div className="text-center text-2xl bg-blue-200 py-2 capitalize">Enroll to {getCourseTitleById(courseId).toLowerCase()} </div>
                <div className="flex justify-between px-2 bg-green-200 ">
                    <div className=" bg-red-300 w-full px-5 py-5">
                        <div className="border-b-2 border-slate-700 text-xl">Steps</div>
                    </div>
                    <div className="bg-blue-400 w-full border-l-2 border-r-2 border-gray-500 px-5 py-5">
                        <div className="border-b-2 border-slate-700 text-xl"> Bank Details</div>

                    </div>
                    <div className="bg-slate-200 w-full flex flex-col space-y-5 px-5 py-5">
                        <div className="border-b-2 border-slate-700 text-xl"> QR Code</div>
                        <div className="flex justify-center items-center">

                        <img className="w-60" src="../QRCODE.png" />
                        </div>
                        </div>
                </div>

            </div>
        )
    }

    return (
        <>
            <CourseDetailsBanner />
            <WhatsAppUpdate />
            <CourseDetailsBody />
        </>

    );
}