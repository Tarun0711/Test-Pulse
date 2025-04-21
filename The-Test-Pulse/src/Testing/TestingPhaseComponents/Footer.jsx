import React from 'react'
import { Link } from 'react-router-dom'
const data=[
  {
    title:"Help Center",
    link:"/help-center"
  },
  {
    title:"About Us",
    link:"/about-us"
  },
  {
    title:"Contact Us",
    link:"/contact-us"
  },
  {
    title:"Careers",
    link:"/careers"
  },
  {
    title:"Terms of Service",
    link:"/terms-of-service"
  },
  {
    title:"Privacy Policy",
    link:"/privacy-policy"
  }
]

function Footer() {
  return (
    <div className=' w-full py-3 dark:border-gray-700 dark:bg-black bg-white flex justify-around items-center border-t-2 text-richblack-200 backdrop-blur-3xl'>
        <p>© All Rights Reserved - Focus Edge</p>
        <div className='flex justify-center flex-wrap items-center'>
          {
            data.map((item,index)=>(
              <Link key={index} to={item.link} className='px-2 border-r-2'>{item.title}</Link>
            ))
          }
        </div>
        
    </div>
  )
}

export default Footer