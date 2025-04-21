import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSignupData } from "../../../slices/authSlice";
import { sendOtp } from "../../../Services/Operations/authApi";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // student or instructor

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }
    const signupData = {
      ...formData,
    };

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData));
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate));

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="w-full border py-3 h-full">
      <div className="w-full px-3">
        <h1 className="GradientText shadow-text font-bold text-4xl">
          The Test Pulse
        </h1>
        <p className="text-richblack-300 px-4">
          Redefining Assessment with Accuracy and Efficiency!
          <span></span>{" "}
        </p>
      </div>
      <form
        onSubmit={handleOnSubmit}
        className="flex w-full  flex-col p-4 gap-y-4"
      >
        <div className="flex gap-x-6">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-300">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full form-style rounded-[0.5rem] bg-white md:p-[12px] text-richblack-300"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-300">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full form-style rounded-[0.5rem] bg-white md:p-[12px] text-richblack-300"
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-300">
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
              boxShadow:
                "inset  0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full form-style rounded-[0.5rem] bg-white md:p-[12px] text-richblack-300"
          />
        </label>
        <div className="md:flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-300">
              Create Password <sup className="text-pink-200">*</sup>
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
              className="w-full form-style rounded-[0.5rem] bg-white md:p-[12px] pr-10 text-richblack-300"
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
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-300">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              style={{
                boxShadow:
                  "inset  0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full form-style rounded-[0.5rem] bg-white md:p-[12px] pr-10 text-richblack-300"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 md:top-[38px] top-[73px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 w-full rounded-[8px] transition-all ease-in-out duration-200 hover:scale-95 bg-violet-400 py-[8px] px-[12px] font-medium text-white"
        >
          Create Account
        </button>
        <p>
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-violet-400 hover:underline underline-offset-8 font-medium"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
