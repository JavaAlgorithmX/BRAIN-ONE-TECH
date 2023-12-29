import { useEffect } from "react"
import { useAuth } from "../store/authContext"
import { Navigate } from "react-router-dom";


export const Logout = () =>{
    const {LogoutUser}  = useAuth();
    // let isLoggedIn = useAuth();


    useEffect(()=>{
        if (LogoutUser) {
            LogoutUser();
          }
    },[LogoutUser]);

    return <Navigate to={"/login"}/>
}