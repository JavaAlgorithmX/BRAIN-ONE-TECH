import axios from "axios";
import toast from "react-hot-toast";
const baseBlogUrl = "https://bts-backend.vercel.app/api/blog";

export async function CreateBlog(blogData){

    const token = localStorage.getItem('token');
    // const { token } = useAuth();
    console.log("token :",token);
    console.log("blogdata :",blogData);
    try {
        const response = await axios.post(
          `${baseBlogUrl}/create`,
          blogData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
       toast.success(`Congratulations blog saved successfully`);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
}


export async function getBlogList(){
    try {
        const response = await axios.get(`${baseBlogUrl}/list`,);
       // toast.success(`Congratulations blog List loaded successfully`);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
}

export async function getBlogById(id){
    try {
        const response = await axios.get(`${baseBlogUrl}/${id}`,);
      //  toast.success(`Congratulations blog with id ${id} loaded successfully`);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
}