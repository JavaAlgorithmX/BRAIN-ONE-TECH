import axios from "axios";
import toast from "react-hot-toast";

const baseUrlLocal = "https://bts-backend.vercel.app/api/enquiries";
// const baseUrlLocal1 = "localhost:4000/api/enquiries"
export async function SendEnquiry(enquiryData) {
    try {
      const response = await axios.post(
        baseUrlLocal,
        enquiryData
      );
      toast.success(`Your enquiry have been submited successfully`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }