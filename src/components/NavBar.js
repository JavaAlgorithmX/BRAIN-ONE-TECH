import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink} from "react-router-dom";
// import { useAuth } from "../store/authContext";
// import { FaUser } from "react-icons/fa";
// import { IoIosSettings } from "react-icons/io";
// import { IoMdPower } from "react-icons/io";
// import { IoIosMail } from "react-icons/io";
// import { CiMobile3 } from "react-icons/ci";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  // const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };

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
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Consulting",
      href: "/consulting",
    },
    {
      name: "About",
      href: "/aboutUs",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`h-20 w-full  pb-1 drop-shadow-lg fixed z-50 ${scroll > 10 ? "bg-purple-800" : ''}`}>
      {/* <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1"> */}
      <div className="grid grid-cols-12">
        {/* Logo  */}
        <div className="inline-flex items-center justify-center col-span-2">
          <span>
            <Link to={'/'}>
              <img
                src="/logo1.png"
                alt=""
                className="m-4 sm:m-0 cursor-pointer h-20 "
              ></img>
            </Link>
          </span>
        </div>

        {/* Nav links  */}
        <div className="hidden lg:flex justify-center items-center col-span-8  ">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `ease-in duration-300 text-md font-semibold  hover:tracking-widest hover:ease-in hover:duration-300 ${isActive ? "text-orange-600 p-2 rounded-xl bg-white" : "text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle button  */}
        <div className="lg:hidden col-start-11 col-span-2  ">
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
                    <span>
                      <img src="./logo2.png" alt="" className="h-10 w-10"></img>
                    </span>
                    <span className="font-bold text-xl">BrainOneTech</span>
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
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
