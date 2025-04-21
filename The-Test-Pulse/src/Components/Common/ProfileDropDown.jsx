import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import useOnClickOutside from "../../Hooks/OnClickOutside"
// import { logout } from "../../../Services/Operations/authAPI"
import { ProfileDropDown } from "../../Data/ProfileDropDown"
export default function Profile() {
  const { user } = useSelector((state) => state.profile)
  console.log(user.accountType)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))
  // if(!user) return null

  const toggleOpen = () => {
    setOpen(!open);
}
  return (
    <button ref={ref} className="relative  transition-all ease-linear  duration-300  p-[3px] rounded-full " onClick={toggleOpen}>
      <div className="flex items-center gap-x-2 ">
        <img src={user?.image} alt={`profile-${user?.firstName}`}  className="aspect-square md:h-[40px] h-[30px] rounded-full object-cover" />
         <div className="md:block hidden text-start"> 
         <p className="text-xs font-bold uppercase ">{user?.firstName}</p>
        <p className=" text-xs">{user?.accountType}</p> 

        </div>
        <AiOutlineCaretDown className={`text-xl p-1 border border-richblack-200 rounded-full text-richblack-300 ${open? 'rotate-180' : ''}`} />
      </div>
      {open && (
        <div onClick={(e) => e.stopPropagation()}  ref = {ref}  className=" md:w-[250px] px-2 py-4 absolute top-[118%] right-0 z-50 divide-y-[1px] divide-richblue-300 text-richblack-100 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblue-800 " >
          {ProfileDropDown.map((link,index) => {
            if (link.type && user?.accountType !== link.type) return null
            return (
              <Link key={index} className="flex flex-col  mb-2 hover:text-white hover:underline hover:scale-105 hover:text-md transition-all ease-in-out duration-300 px-4 py-3 rounded-md "  to={link.path}>
                {link.title}
                <hr className=" my-2 text-white" />
              </Link>
            )
          })}
         </div>
      )} 
    </button>
  

)}