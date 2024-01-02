import { useEffect } from "react";

export default function Dashboard() {

  useEffect(()=>{
    
  })





  return ( 
  <div className=" px-10 py-2 ">
    <div className="flex space-x-5 justify-between bg-slate-100 px-5 py-5 rounded-xl drop-shadow-xl">
        <div className="h-28 w-60 rounded-lg bg-slate-400 text-center">Students Count</div>
        <div className="h-28 w-60 rounded-lg bg-slate-400 text-center">Courses Count</div>
        <div className="h-28 w-60 rounded-lg bg-slate-400 text-center">Enquiry Count</div>
        <div className="h-28 w-60 rounded-lg bg-slate-400 text-center">Blog Count</div>
    </div>
  </div>
  );
}
