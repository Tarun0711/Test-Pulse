import React from 'react'
import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getPasswordResetToken } from '../../../Services/Operations/authApi'
function ForgotPassword(){

  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.auth)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
  }


  return (

    <div className="grid md:min-h-[500px] border  place-items-center ">

      { loading ? ( <div className="Please Wait ..."></div> ) : (
    
              <div className="max-w-[500px] p-4 lg:p-8">

                <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-violet-500"> {!emailSent ? "Reset your password" : "Check email"} </h1>
                
                <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-400">
                  {!emailSent ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"  : `We have sent the reset email to please check once ${email}`}    
                </p>

                <form onSubmit = {handleOnSubmit}>

                  {!emailSent && (
                      <label className="w-full">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-400"> Email Address <sup className="text-pink-200">*</sup> </p>
                        <input required type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email address" className="form-style w-full"  />
                      </label>
                  )}

                  <button type="submit" className="mt-6 w-full rounded-[8px] bg-violet-500 hover:scale-95 py-[12px] px-[12px] font-medium text-white"  > {!emailSent ? "Sumbit" : "Resend Email"}  </button>
        
                </form>

                <div className="mt-6 flex items-center justify-between">
                  <Link to = "/auth/login">
                     <p className="flex items-center gap-x-2 text-richblack-500"> <BiArrowBack /> Back To Login </p>
                  </Link>
                </div>

              </div>
            )
      }

    </div>
 
 
)}


export default ForgotPassword