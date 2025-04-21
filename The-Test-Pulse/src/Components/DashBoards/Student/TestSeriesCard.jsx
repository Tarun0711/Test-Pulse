import React from 'react'
import { BiStar, BiTime, BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom';
const Benefits = [
    { id: 1, benefit: "Free Shipping" },
    { id: 2, benefit: "Free Returns" },
    { id: 3, benefit: "30 Day Money Back Guarantee" },
    { id: 4, benefit: "24/7 Customer Support" },
    { id: 5, benefit: "Secure Payment" },
  ];

function TestSeriesCard() {
  return (
    <div className='border-2 rounded-lg max-w-[250px] hover:scale-95 transition-all duration-300 ease-linear flex flex-col gap-2 p-2'>
              <h1 className='font-bold text-xl'>Lorem, ipsum dolor Lorem, ipsum.</h1>

        <img className='h-28 border-2 rounded-lg shadow-xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSWatq0vEXRpKtA28cLS7RbCLTp_OP0FQkw&s' alt='testseries'/>
        
        <div className='flex items-center mt-3 justify-between px-2'>
            <p className='text-sm font-bold text-caribbeangreen-300 flex items-center gap-2 '><BiTime fontSize={16}/><span>12 Aug 2024</span> - <span>12 sep 2025</span> </p>
        </div>
        <hr className='text-richblack-100' />
        <div>
        {Benefits.map((benefit) => (
          <div key={benefit.id} className="flex  items-center underline underline-offset-1 text-blue-900 text-xs">
            <svg
              className="w-4 h-4 text-blue-800 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <p>{benefit.benefit}</p>
          </div>
        ))}
      </div>
        <hr className='text-richblack-100' />    
        <p className='font-bold text-blue-800'>Price<span>₹1499  </span><span className=' text-red-400 line-through'>₹1899</span></p>
        <hr className='text-richblack-100' />

        <div className='flex gap-2 justify-between'>
            <button className='bg-caribbeangreen-300 text-white rounded-lg py-1
            px-2 hover:bg-caribbeangreen-400  w-1/2 transition-all duration-300 ease-linear
            '>Enroll Now</button>
            <Link to={'/dashboard/test-series/details'} className='bg-pink-400 w-1/2 text-white rounded-lg py-1
            px-2 hover:bg-pink-500 transition-all duration-300 ease-linear
            '>Know More</Link>
        </div>
        <div className='flex items-center justify-between'>
            <p className='flex items-center text-richblack-400'>
                <BiUser/> 120+
            </p>
            <p className='flex items-center text-richblack-400'>
                <BiStar/> 4.2
            </p>
        </div>
    </div>
  )
}

export default TestSeriesCard