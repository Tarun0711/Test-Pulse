import React from 'react'
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
function TestCard() {
  return (
    <div className='md:w-[350px] w-[250px] px-4 py-2 flex flex-col justify-center items-center rounded-xl gap-4 border'>
        <img src="https://yt3.ggpht.com/a/AATXAJxd38Zw3u6EaDpOBuXz3p6wjwHRj1mQAnLWFQ=s900-c-k-c0xffffffff-no-rj-mo" className='h-56 object-cover w-full rounded-xl'  alt="img" />
        <div>
            <div>
                <h1><GroupSharpIcon/>{" "} 120</h1>
            </div>
            <h1 className='text-xl font-bold'>Lorem ipsum dolor sit, amet</h1>
            <p className='text-md text-richblack-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, temporibus. .lorem10.</p> 
        </div>
    </div>
  )
}

export default TestCard