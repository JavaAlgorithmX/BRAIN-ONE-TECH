import axios from "axios";
import toast from "react-hot-toast";
const baseCourseUrl = "https://bts-backend.vercel.app/api/course";

export async function CreateCourse(courseData, token){

    //const token = localStorage.getItem('token');
    // const { token } = useAuth();
   // console.log("token :",token);
    console.log("course Data  :",courseData);
    try {
        const response = await axios.post(
          `${baseCourseUrl}/create`,
          courseData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(`Congratulations sourse saved successfully`);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
}


export async function getCourseList(){
    try {
        const response = await axios.get(`${baseCourseUrl}/`,);
        //toast.success(`Congratulations Course List loaded successfully`);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
}

export async function getCourseById(id){
    try {
        const response = await axios.get(`${baseCourseUrl}/${id}`,);
        toast.success(`Congratulations Course with id ${id} loaded successfully`);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
}