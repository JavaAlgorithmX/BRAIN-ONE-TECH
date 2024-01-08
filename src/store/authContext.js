import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isDevModelOpen, setISDevModelOpen] = useState(false);

  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log(" is logged in value from auth context ---->", isLoggedIn);

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //opening dev contact model
  const OpenDevModel = () => {
    console.log("Inside open dev model")
    console.log("value of isModel open ",isDevModelOpen);
    setISDevModelOpen(true);
  };
  const CloseDevModel = () => {
    setISDevModelOpen(false);
  };

  //   Authentication  jwt to get the logged in user data

  const userAuthentication = async () => {
    try {
      const response = await fetch("https://bts-backend.vercel.app/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData.userData);
      }
    } catch (error) {
    } finally {
      // setIsLoading(false);
    }
  };
  useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, token, OpenDevModel, CloseDevModel ,isDevModelOpen}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
