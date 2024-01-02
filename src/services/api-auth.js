import axios from "axios";
import toast from "react-hot-toast";

export async function UserRegistration(userData) {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/auth/register",
      userData
    );
    toast.success(`Congratulations you have joined us successfully`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function UserLogIn(userData) {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/auth/login",
      userData
    );
   // console.log("response from login --->",response)
    toast.success(`Congratulations you have Logged In successfully`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
