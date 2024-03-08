import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./footer";
import QuickLinks from "./QuickLinks";

function AppLayout(
    // { children, isLoggedIn }
    ){
    return(
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <QuickLinks/>
            <Footer/>
        </div>
    );
}
export default AppLayout;