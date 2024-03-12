import "@smastrom/react-rating/style.css";
import CourseCard from "../components/courseCard";
import { useCourseList } from "../services/api-course";
import coursesData from "../staticUiData/courseData";
import ScrollToTop from "../components/ScrollToTop";
import QuickLinks from "../components/QuickLinks";

export default function Courses() {
  
  // const { isLoading, error, data } = useCourseList();

 
  function CoursesList() {
    return (
      <div>
        {/* banner  */}
        <div className="h-80 w-full relative bg-gradient-to-r from-orange-400 via-slate-800 to-blue-600">
          <img
            src="./course-banner.jpg"
            alt=""
            className="h-full w-full object-cover absolute mix-blend-overlay"
          ></img>
          <div className="relative text-white flex justify-center items-end h-full w-full pb-5">
            <h1 className="text-3xl">Explore Our Courses</h1>
          </div>
        </div>
        

        {/* grid  */}

        <div className="bg-slate-800 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4 text-slate-50 px-10 py-20 mx-auto ">
          {
            // data
            coursesData
            .map((data, index) => (
              <CourseCard
                key={data._id}
                // id={data._id}
                title={data.courseName}
                // originalPrice={data.actualPrice}
                // specialPrice={data.price}
                // nextBatch={data.nextBatch}
                image={data.image}
              />
            ))
          }
        </div>
      </div>
    );
  }

  // if (isLoading) return 'Loading...';
  // if (error) console.log('An error occurred while fetching the user data ', error);

  return (
    <>
    <ScrollToTop/>
    <div className="flex items-center justify-center">
      
      <CoursesList />
      
    </div>
    {/* <QuickLinks/> */}
    </>
    
  );
}
