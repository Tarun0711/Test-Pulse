import { ArrowDropDown } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import Logo from "../../Assests/Logo/Logo.svg";
import ThemeToggle from "../Common/ThemeToggle";
import Coin from "../../Assests/Logo/Coin.png";
import Streak from "../../Assests/Streak.svg";

import SearchInput from "../Common/SearchInput";
import { IconButton, Tooltip } from "@mui/material";
import { IoNotificationsOutline } from "react-icons/io5";
const data = [
  { title: "Explore", link: "/" },
  {
    title: "Problems",
    link: "/problems",
    links: [
      { title: "Subpractice 1", link: "/practice/subpractice1" },
      { title: "Subpractice 2", link: "/practice/subpractice2" },
      { title: "Subpractice 3", link: "/practice/subpractice3" },
    ],
  },

  {
    title: "Contests",
    link: "/contests",
    links: [
      { title: "Jee Mians", link: "/contests/subcontest1" },
      { title: "Neet", link: "/contests/subcontest2" },
      { title: "Jee (Main + Advance)", link: "/contests/subcontest3" },
    ],
  },
  {
    title: "Test Series",
    link: "/test-series",
    links: [
      { title: "Jee Main", link: "/contests/subcontest1" },
      { title: "Neet", link: "/contests/subcontest2" },
      { title: "Jee (Main + Advance)", link: "/contests/subcontest3" },
    ],
  },
  {
    title: "Mock Test",
    link: "/mock-test",
    links: [
      { title: "Submock Test 1", link: "/mock-test/submocktest1" },
      { title: "Submock Test 2", link: "/mock-test/submocktest2" },
      { title: "Submock Test 3", link: "/mock-test/submocktest3" },
    ],
  },
  {
    title: "Store",
    links: [
      { title: "Redeem", link: "/store/redeem" },
      { title: "Premium", link: "/plans" },
    ],
  },
];

function Navbar({ isHome = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  const currentPath = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full border-y-[0.5px] dark:border-gray-700 transition-all duration-300 ease-in-out px-5 ${
        scrolled || isHome
          ? "dark:bg-gray-900  bg-white fixed"
          : "bg-transparent"
      } `}
    >
      <div className="max-w-full mx-auto flex justify-between items-center">
        {/* Menu Items */}
        <div className="flex items-center space-x-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHovered(item.title)}
              onMouseLeave={() => setHovered(null)}
            >
              <a
                href={item.link}
                className={` text-md py-2 ${
                  item.title === "Store"
                    ? "text-amber-600 dark:text-amber-500 hover:text-yellow-800"
                    : ""
                } hover:text-gray-500 transition-all flex items-center  ${
                  currentPath === item.link
                    ? "text-black border-b-2 px-2 dark:border-white border-black dark:text-white"
                    : " text-gray-500 dark:text-gray-400"
                }`}
              >
                {item.title}{" "}
                {item.links && (
                  <ArrowDropDown
                    className={`transition-transform ${
                      hovered === item.title ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>
              {item.links && hovered === item.title && (
                <ul
                  className="absolute min-w-52 left-0 mt-0 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200"
                  onMouseEnter={() => setHovered(item.title)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {item.links.map((subitem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subitem.link}
                        className={`block px-4 py-2 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-gray-900 transition-all ${
                          item.title === "Store" ? "text-yellow-600" : ""
                        }`}
                      >
                        {subitem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {/* Logo */}
        <div>
          <img src={Logo} alt="logo" className="h-10" />
        </div>
        <div className="flex items-center  gap-6">
          {currentPath === "/store/redeem" && (
            <Tooltip title="Edge Coins">
              <div className="flex h-fit w border-x-2 px-2 p-1 rounded-lg items-center gap-4">
                <img src={Coin} alt="coin" className=" max-h-8" />
                <p className="text-amber-600 font-semibold">6,000</p>
              </div>
            </Tooltip>
          )}
          <div className="flex items-center gap-2">
            <p className=" font-semibold text-xl text-gray-500 dark:text-gray-300">
              0
            </p>
            <Tooltip title="Solve today's Daily Challenge to refresh your streak!">

            <img src={Streak} alt="streak" className="h-8" />
            </Tooltip>
          </div>
          {/* <SearchInput /> */}
          <Tooltip title="Notifications">
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="#ffffff"
            >
              {/* <Badge badgeContent={17} color="error"> */}
              <IoNotificationsOutline className="dark:text-white text-gray-700" />
              {/* </Badge> */}
            </IconButton>
          </Tooltip>
          <Tooltip title="Dark/Light">
            <ThemeToggle />
          </Tooltip>
          <button className="min-w-24 text-white shadow-md  dark:bg-gray-600 bg-blue-600  px-4 h-fit py-2 rounded-lg">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
