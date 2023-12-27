import axios from "axios";

export async function getUsers() {
    try {
        const response = await axios.get("http://localhost:4000/api/users/");
       // console.log(`response user:`, response.data.data);
        return response.data.data;
      } catch (error) {
        console.error(error);
        // Handle the error appropriately, you might want to throw it or return a default value
        throw error;
      }
      
  }

   // const fetchData = async () => {
  //   const { data } = await axios.get("http://localhost:4000/api/users");
  // };