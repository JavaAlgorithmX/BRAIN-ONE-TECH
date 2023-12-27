import axios from "axios";
import toast from "react-hot-toast";

export async function UserRegistration(userData) {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/users",
      userData
    );

    console.log(response)

    const { username, mobile, email, token } = response.data.data;

    // Store user details and token in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('email', email);
    localStorage.setItem('token', token);

    toast.success(`Congratulations you have joined us successfully`);
    return response.data.data;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
}

