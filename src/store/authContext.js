import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log(" is logged in value from auth context ---->", isLoggedIn);

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem('token');
  };

  

//   Authentication  jwt to get the logged in user data

  const userAuthentication = async () =>{
    try {
        const response = await fetch("http://localhost:4000/api/auth/user",{
            method:"GET",
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        console.log("Value of response",response)
        if(response.ok){
            const userData = await response.json();
            // console.log(userData);
            setUser(userData.userData);
            console.log("user data -> ",userData.userData.name);
        }
    } catch (error) {
        
    }
  }
  useEffect(()=>{
    userAuthentication();
  },[])

  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
