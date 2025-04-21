import React from "react";
import { SidebarData } from "../../../Data/SidebarData";
import { Link, useLocation, matchPath } from "react-router-dom";
import Logo from '../../../Assests/Logo/Logo.svg';

function Sidebar() {
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="flex md:h-screen bg-richblue-500 md:w-[270px] w-fit flex-col gap-6">
      <Link to="/dashboard" className="text-center md:text-2xl mx-auto md:block hidden font-bold text-blue-500">
        <img src={Logo} alt="Logo" className="w-20 h-20" />
      </Link>
      <hr className="md:block hidden" />
      <div className="flex flex-col md:gap-3">
        {SidebarData.map((item, index) => (
          <div
            key={index}
            className={`${
              matchRoute(item.path)
                ? "text-white border-l-4 sm:rounded-lg py-1 md:px-4 px-1 border-[#4880ff]"
                : "bg-transparent px-4"
            }`}
          >
            <Link
              className={`flex md:px-4 rounded-xl items-center justify-start md:gap-2 text-black ${
                matchRoute(item.path)
                  ? "md:text-white text-blue-500 md:bg-blue-500"
                  : "bg-transparent text-richblack-5"
              }`}
              to={item.path}
            >
              <div className="flex items-center transition-all duration-400 ease-in-out hover:bg-blue-500 py-[8px] px-4 rounded-xl hover:text-white justify-start gap-4">
                <span className="md:text-lg text-4xl">{item.icon}</span>
                <span className="text-md md:block hidden">{item.title}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
