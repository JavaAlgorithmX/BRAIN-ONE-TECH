import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./footer";

function AppLayout(
    // { children, isLoggedIn }
    ){
    return(
        <div>
            <Navbar 
            // isLoggedIn={isLoggedIn}
            />
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}
export default AppLayout;