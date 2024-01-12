import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../store/authContext";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoMdPower } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const { user, isLoggedIn } = useAuth();
  const { name, isAdmin = false } = user || {};

  const menuItems = [
    {
      name: "Home",
      href: "/",
    },

    {
      name: "Trainings",
      href: "/courses",
    },
    {
      name: "Consulting",
      href: "/consulting",
    },

    {
      name: "About",
      href: "/aboutUs",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    isLoggedIn &&
      isAdmin && {
        name: "Admin",
        href: "/admin",
      },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function ProfileMenu() {
    return (
      <div className="absolute right-5 top-20 bg-slate-500 rounded-md h-40 w-32 px-5 py-5 flex items-center justify-center drop-shadow-md">
        <ul className="space-y-2">
          <li className="flex space-x-1 items-center rounded-md px-2 py-1 drop-shadow-md hover:bg-slate-400 cursor-pointer">
            <NavLink to={"/profile"}>
              <div className="flex space-x-1 items-center">
                <FaUser />
                <spam>Profile</spam>
              </div>
            </NavLink>
          </li>
          <li className="flex space-x-1 items-center rounded-md px-2 py-1 drop-shadow-md hover:bg-slate-400 cursor-pointer">
            <NavLink>
              <div className="flex space-x-1 items-center">
                <IoIosSettings />
                <spam>Setting</spam>
              </div>
            </NavLink>
          </li>
          <li className="flex space-x-1 items-center hover:bg-red-400 text-red-600 rounded-md px-2 py-1 drop-shadow-md cursor-pointer">
            <NavLink to={"/logout"}>
              <div className="flex space-x-1 items-center">
                <IoMdPower />
                <spam>Logout</spam>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }

  function openProfileMenu() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  return (
    <header className="h-20 w-full  pb-1 drop-shadow-lg fixed z-50">
      {/* <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1"> */}
      <div className="grid grid-cols-12">
        {/* Logo  */}
        <div className="inline-flex items-center justify-center col-span-2 ">
          <span>
            <img
              src="/logo1.png"
              alt=""
              className="cursor-pointer h-20 object-cover"
            ></img>
          </span>
        </div>

        {/* Nav links  */}
        <div className="hidden lg:flex justify-center items-center col-span-8  ">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className="ease-in duration-300 text-md font-semibold
                     text-white hover:text-orange-600 hover:tracking-widest 
                     hover:ease-in hover:duration-300 active:text-orange-600 active:tracking-widest
                     "
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Login Button  */}
        <div className="hidden lg:flex items-center justify-center col-span-2 ">
          {isLoggedIn && (
            <div
              className="flex space-x-2 items-center cursor-pointer"
              onClick={openProfileMenu}
            >
              <h1 className="text-white">{`Hi ${name}`}</h1>
              <ProfilePic />
            </div>
          )}
          {!isLoggedIn && <LogInButton />}
        </div>
        {isLoggedIn && isProfileMenuOpen && <ProfileMenu />}

        {/* Toggle button  */}
        <div className="lg:hidden md:hidden col-start-11 col-span-2  ">
          <Menu
            onClick={toggleMenu}
            className="h-full w-full px-3 py-3 cursor-pointer text-white"
          />
        </div>

        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>{/* logo  */}</span>
                    <span className="font-bold">BrainOneTech</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-slate-900 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-800">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <Link to="/login">
                  <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Log In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function ProfilePic() {
  return (
    <div>
      <img
        class="w-12 h-12 rounded-full"
        src="/profile.jpg"
        alt=""
        width="384"
        height="512"
      ></img>
    </div>
  );
}
function LogInButton() {
  return (
    <Link to="/login">
      <button
        type="button"
        className="  border-orange-600 border-2 rounded-full bg-transparent px-4 pb-2 pt-1 text-center text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:text-orange-600 hover:border-white hover:scale-100 hover:tracking-widest hover:ease-in hover:duration-300 ease-in duration-300"
      >
        Log In
      </button>
    </Link>
  );
}

// function LoginCheck() {
//   if (isLoggedIn) {
//     return <ProfilePic />;
//   } else {
//     return <LogInButton />;
//   }
// }

export default Navbar;
