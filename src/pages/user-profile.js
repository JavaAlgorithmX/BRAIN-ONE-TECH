// import React, { useState } from "react";
// import Dummy from "../components/Dummy";
// import Tilt from "react-parallax-tilt";

// export default function UserProfile() {
//   const [isIdShown, setIsIdShown] = useState(false);

//   function handleIdCard() {
//     setIsIdShown(!isIdShown);
//   }

//   function IdCard() {
//     return (
//       <Tilt
//         glareEnable={true}
//         glareMaxOpacity={0.3}
//         glareColor="#8b5cf6"
//         glarePosition="bottom"
//         glareBorderRadius="2px"
//         className="h-96 w-56 bg-slate-300 relative flex justify-center text-black"
//         style={{
//           backgroundImage: `url("./Dummy Id.png")`,
//           backgroundPosition: "center",
//           backgroundSize: "contain",
//           boxShadow: "0 25px 45px rgba(0, 0, 0, .2)",
//           border: "2px solid rgba(255,255,255,.5)",
//           borderRight: "2px solid rgba(255,255,255,.2)",
//           borderBottom: "2px solid rgba(255,255,255,.2)",
//         }}
//       >
//         <div
//           className=" rounded-full absolute"
//           style={{
//             height: "6.2rem",
//             width: "6.2rem",
//             top: "5.75rem",
//             left: "3.9rem",
//           }}
//         >
//           <img src="./profile.jpg" alt="" className="rounded-full"></img>
//         </div>
//         <div
//           className=" h-16 w-56 text-center absolute bottom-32 "
//           style={{
//             paddingTop: "2px",
//           }}
//         >
//           <p className="text-xl font-bold " style={{ lineHeight: "1" }}>
//             MONIKA
//           </p>
//           <p className="text-xl font-bold" style={{ lineHeight: "0.9" }}>
//             SRIVASTAVA
//           </p>
//           <p className="text-sm font-thin" style={{ lineHeight: "1" }}>
//             MANAGING DIRECTOR
//           </p>
//         </div>
//       </Tilt>
//     );
//   }

//   function Main() {
//     return (
//       <div className="bg-slate-900 text-white h-screen w-full absolute top-0 left-0 pt-20 px-10 flex flex-col md:flex-row justify-around ">
//         <div className="bg-slate-600 h-4/5 w-1/4 rounded-lg">
//           <div className=" w-full h-2/5 flex justify-center">
//             <div className=" mt-2 h-full aspect-square bg-red-700 rounded-full"></div>
//           </div>
//           <div className="bg-white text-violet-600 w-full h-3/5 pt-5 px-2">
//             <h1>user name</h1>
//             <h2>email</h2>
//             <h2>mobile</h2>
//           </div>
//         </div>

//         <div>
//           <button onClick={handleIdCard}>Show Id Card</button>
//         </div>
//         {isIdShown && <IdCard />}
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
