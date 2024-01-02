import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  // const [isAdmin, setIsAdmin] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

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
        if(response.ok){
            const userData = await response.json();
            console.log("User data from auth context -> ",userData);
            // setIsAdmin(userData)
            setUser(userData.userData);
        }
    } catch (error) {
        
    }finally{
        // setIsLoading(false);
      }
  }
  useEffect(()=>{
    userAuthentication();
  },[])

  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user ,token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
