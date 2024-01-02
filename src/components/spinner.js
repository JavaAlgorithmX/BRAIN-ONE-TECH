import React from "react";
export default function Spinner(){
    return(
        <div className="h-screen bg-blue-400/60 flex items-center justify-center z-50">
            <img src="./loading.svg" alt=""></img>
        </div>
    );
}