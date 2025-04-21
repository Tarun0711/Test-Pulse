import React from "react";
import { BiCartAlt } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import Profile from "../../Common/ProfileDropDown";
import { useSelector } from "react-redux";

function Navbar() {
  const { user } = useSelector((state) => state.profile)


  return (
    <div className="w-full flex items-center border-b-2 justify-between px-2 sticky bg-white py-2 h-20">
      <div className="userName">
        <h1 className="md:text-3xl md:px-4 font-bold">Hello {user.firstName}</h1>
        <p className="md:text-lg px-4 text-caribbeangreen-400">
          Welcome Back !
        </p>
      </div>
      <div class="relative w-[40%]">
        <input
          placeholder="type to search..."
          class="input border-2 focus:border-blue-600 border-gray-300 px-5 py-2 rounded-xl w-full  transition-all  outline-none"
          name="search"
          type="search"
        />
        <svg
          class="size-6 absolute top-2 right-3 text-gray-500"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </div>

      <div className="flex items-center gap-4">
        <p className="border p-2 rounded-full text-white bg-black cursor-help">
          <MdNotificationsActive fontSize={20} />
        </p>
        <p className="border p-2 rounded-full text-white bg-black cursor-default">
          <BiCartAlt fontSize={20} />
        </p>
        <Profile />
      </div>
    </div>
  );
}

export default Navbar;
