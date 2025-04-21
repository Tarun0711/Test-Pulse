import React, { useState, useEffect } from "react";
import { NavbarData } from "../../../Data/NavbarData";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (
        scrollPosition > 0 &&
        scrollPosition < document.body.offsetHeight / 2
      ) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`Glass w-[100vw] background z-50 flexbox fixed px-6  md:h-20 h-16 ${
        scrollUp ? "shadow-lg shadow-richblack-5" : ""
      }`}
    >
      <Link to={"/"} className="text-white font-mono md:text-xl font-bold">
        The Test Pulse
      </Link>
      <div className="md:flex hidden items-center bg-transparent  text-white font-semibold   gap-16">
        {NavbarData.map((item, index) => {
          return (
            <Link
              className="hover:underline-offset-4 hover:underline hover:scale-90 rounded-2xl transition-all ease-in-out duration-200 "
              key={index}
              to={item.path}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <CiMenuFries
        fontSize={28}
        className="md:hidden text-white cursor-pointer"
        onClick={handleMenuClick}
      />
      {open && (
        <div className="md:hidden  rounded-b-2xl h-fit   absolute top-16 flex flex-col items-center background py-6 w-11/12  text-white font-semibold border-2   gap-4">
          {NavbarData.map((item, index) => {
            return (
              <Link
                className="hover:underline-offset-4 w-full text-center border-b px-4 hover:underline hover:scale-90 rounded-2xl transition-all ease-in-out duration-200 "
                key={index}
                to={item.path}
                onClick={handleMenuClick}
              >
                {item.title}
              </Link>
            );
          })}

          <Link
            to={"/auth"}
            className="Mainbutton text-center bg-pink-50 bg-opacity-35  "
          >
            Login
          </Link>

          <Link to={"/signup"} className="Mainbutton text-center ">
            Sign Up
          </Link>
        </div>
      )}
      <div className="md:flex gap-4  hidden">
        <Link
          to={"/auth/login"}
          className="Mainbutton  text-center bg-pink-50 bg-opacity-35 font-bold "
        >
          Login
        </Link>
        <Link to={"/auth"} className="Mainbutton text-center  font-bold ">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
