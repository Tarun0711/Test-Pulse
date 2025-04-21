import React from "react";
import { BiBell, BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import Profile from "../../Common/ProfileDropDown";
import { IoMdLogOut } from "react-icons/io";

const NavData = [];

function NavBar() {
  return (
    <nav className="h-16 border-b flex items-center justify-between px-4">
      <h1 className="text-2xl font-bold flex items-center">
        The Test Pulse <hr className=" rotate-90 w-8 border border-white" />
      </h1>
      <input
        className="bg-transparent md:block hidden hover:scale-105 border text-white rounded-lg py-2 px-4 focus:border-blue-500 focus:bg-white transition-all ease-in-out duration-300 focus:text-black w-1/2"
        placeholder="type to search...."
        type="search"
      />
      <div className="flex gap-4">
        <BiBell fontSize={24} />
        <BiCart fontSize={24} />
      </div>
      <Link to={"/dashboard"} className=" flex p-2 rounded-lg gap-2 hover:scale-95 text-white bg-blue-500">
     <p className="md:block hidden"> Dashboard</p><IoMdLogOut fontSize={24}/>
      </Link>
      <Profile />
    </nav>
  );
}

export default NavBar;
