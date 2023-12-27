import { Outlet } from "react-router-dom";
import SideMenu from "./sidebar";

function AdminLayout(){
    return(
        <div className="h-screen flex bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">
            <SideMenu/>
            <main className="px-2 py-2 overflow-auto mx-auto">
                <Outlet/>
            </main>
        </div>
    );
}
export default AdminLayout;