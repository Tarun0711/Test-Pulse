import React from "react";
import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../../Services/Operations/authApi";

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <div className="w-full md:min-h-[500px]  border py-4">
      <div className="w-full px-3 ">
        <h1 className="GradientText shadow-text font-bold text-4xl">
          The Test Pulse
        </h1>
        <p className="text-richblack-300 px-4">
        Welcome Back! Rediscover, Reconnect, and Reimagine Your Site Experience.
        </p>
      </div>
      <form
      onSubmit={handleOnSubmit}
      className=" flex w-full flex-col gap-y-4 p-4"
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-500">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full form-style rounded-[0.5rem] bg-white md:p-[12px] text-richblack-300"
          />
      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-500">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full form-style rounded-[0.5rem] bg-white md:p-[12px] text-richblack-300"
          />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="/auth/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-400">
            Forgot Password ?
          </p>
        </Link>
      </label>
      <button
        type="submit"
        className="mt-6 rounded-[8px] hover:scale-95 bg-violet-500 py-[8px] px-[12px] font-medium text-white "
      >
        Sign In
      </button>
    </form>
    <p className="w-full text-center">
          Don't have an account?{" "}
          <Link
            to="/auth"
            className="text-violet-400 hover:scale-95   hover:underline underline-offset-8 font-medium"
          >
            Signup
          </Link>
        </p>
    </div>
  );
}

export default Login;
