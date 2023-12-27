// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { format } from "date-fns";
// import { useQuery } from "@tanstack/react-query";

// import { getUsers } from "../services/api-users";
// import Spinner from "../components/spinner";
// import Dummy from "../components/Dummy";
// import SideMenu from "./admin/sidebar";

// export default function Admin() {
//   const [enquiryData, setEnquiryData] = useState([]);

//   // useEffect(() => {
//   //   // console.log(`EnquireData before :`, enquiryData)
//   //   const fetchData = async () => {
//   //     try {
//   //       const data = await LoadEnquiry();
//   //       //console.log("data : ",data)
//   //       setEnquiryData(data);
//   //     } catch (error) {
//   //       // Handle error
//   //     }
//   //   };

//   //   fetchData();
//   //   // console.log(`EnquireData after :`, enquiryData)
//   // }, []);

//   // const {isLoading, data:users, error} = useQuery({
//   //   queryKey:['users'],
//   //   queryFn:getUsers
//   // });
//   // console.log(x);

//   // if(isLoading){ return <Spinner/>}

//   const LoadEnquiry = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/api/enquiry");
//       //   console.log(response.data.data)
//       return response.data.data;
//     } catch (error) {
//       console.error("Error fetching enquiry data:", error);
//       throw error;
//     }
//   };

//   function EnquiryCard({ enquiry }) {
//     return (
//       <div className="bg-blue-600 text-white rounded-lg mx-2 my-2 w-1/5 px-2 py-2">
//         <div>
//           <h3>{enquiry.name}</h3>
//           <h3>{enquiry.email}</h3>
//           <h3>{enquiry.mobile}</h3>
//           <h3>
//             {format(new Date(enquiry.created_at), "MMMM dd, yyyy HH:mm:ss")}
//           </h3>
//         </div>
//       </div>
//     );
//   }
//   function Enquiry() {
//     return (
//       <>
//         <div style={{}}>
//           <button
//             className="bg-slate-300 text-black rounded-full px-3 py-1 mx-2 mt-2"
//             onClick={() => console.log("Clicked")}
//           >
//             Load Enquiry
//           </button>
//           {enquiryData.map((enquiry) => (
//             <EnquiryCard key={enquiry.id} enquiry={enquiry} />
//           ))}
//         </div>
//         <div>Users</div>
//       </>
//     );
//   }

  
 

//   function Main() {
//     return (
//       <div className="absolute top-0 left-0 h-screen w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">
//         <SideMenu />
//       </div>
//     );
//   }

//   return (
//     <>
//       <Main />
//       <Dummy />
//     </>
//   );
// }
