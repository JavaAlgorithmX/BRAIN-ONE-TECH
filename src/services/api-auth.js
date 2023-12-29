import axios from "axios";
import toast from "react-hot-toast";

export async function UserRegistration(userData) {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/auth/register",
      userData
    );

    // console.log("response from api-auth", response.data);

    // const { message, token } = response.data;
   

    toast.success(`Congratulations you have joined us successfully`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
