import React from 'react'
import { useNavigate } from 'react-router-dom'

function StudyPlanCard({ data}) {
  const navigate =useNavigate()
  return (
    <div onClick={() => navigate(`/study-plans/${data.title}`)} className=' w-[340px] h-fit font-mono bg-white dark:bg-gray-900 rounded-xl hover:shadow-xl transition-all ease-in-out duration-300 shadow-md border-2 border-gray-200 dark:border-gray-600   flex items-center justify-between px-1 py-1'>
        <img src={data && data.image ||  "https://assets.leetcode.com/study_plan_v2/top-interview-150/cover"} alt='' className='h-20 w-20 rounded-xl '/>
        <div className='flex px-2 flex-col items-start justify-between'>
            <h6 className='text-sm dark:text-white '>{data && data.title || 'Study Plan'}</h6>
            <p className='text-xs text-gray-600 dark:text-gray-400'>{data && data.description || 'This is a study plan for top interview questions'}</p>
        </div>
    </div>
  )
}

export default StudyPlanCard