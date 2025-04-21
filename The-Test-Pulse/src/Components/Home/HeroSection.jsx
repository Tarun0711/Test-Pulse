import React, { useState } from "react";
import { TypewriterEffectSmoothDemo } from "./TypwwriterEffect";
import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
function HeroSection() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div
      className="h-[70vh] mt-[72px] scroll-smooth w-full flex flex-col items-center justify-center"
      aria-label="Hero Section"
    >
      <TypewriterEffectSmoothDemo />
      <div className="relative w-[40%] bg-transparent">
        <input
          placeholder="What do you Want to learn?"
          className=" shadow-lg border-[0.5px] dark:text-gray-200 w-full bg-transparent border-gray-300 px-5 py-5 rounded-xl transition-all  outline-none"
          name="search"
          type="search"
          value={search}
          onChange={handleChange}
          autoComplete="off"
        />
        <svg
          className="size-6 absolute top-5 right-4 text-gray-500"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;
