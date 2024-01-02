import { FaBarsStaggered } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { MdPublic } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(true);

  const sideMenuItems = [
    {
      name: "DASHBOARD",
      icon: <MdDashboard/>,
      linkTo: "/admin",
    },
    {
      name: "PUBLIC PAGES",
      icon: <MdPublic/>,
      linkTo: "/",
    },
    {
      name: "COURSES",
      icon: <FaBookOpen/>,
      linkTo: "/admin/courses",
    },
    {
      name: "STUDENTS",
      icon: <FaUsers/>,
      linkTo: "/admin/students",
    },
    {
      name: "CLIENTS",
      icon: <FaBuildingUser/>,
      linkTo: "/admin/clients",
    },
  ];

  function handleOpenSideMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`bg-slate-100 h-screen drop-shadow-md ${
        isOpen ? "w-60" : "w-14"
      } relative  flex items-center justify-center ease-in duration-600`}
    >
      <FaBarsStaggered
        className="absolute top-5 right-5 cursor-pointer hover:text-orange-600 font-bold"
        onClick={handleOpenSideMenu}
      />
      <ul>
        {sideMenuItems.map((item) => (
          <li key={item.name}>
            <NavLink to={item.linkTo}>
              <div className={`${
        isOpen ? "w-60" : "w-12 "
      }  hover:bg-slate-200 rounded-lg flex items-center px-4  py-2 hover:text-orange-600`}>
                <span className="text-lg font-bold">{item.icon}</span>
                {isOpen && <span className="ml-3 text-md ">{item.name}</span>}
              </div>
            </NavLink>
          </li>
        ))}

       
      </ul>
    </div>
  );
}
