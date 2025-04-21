import React from 'react'

function PastContestCard() {
  return (
    <div className='w-full relative h-24  hover:shadow-xl transition-all ease-in-out duration-300 shadow-lg p-2 bg-white dark:bg-[#000000] rounded-xl flex items-center overflow-hidden'>
        <img src="https://static.vecteezy.com/system/resources/previews/009/751/175/original/blue-background-dark-blue-abstract-background-geometry-shine-and-layer-element-for-presentation-design-free-vector.jpg" alt="background" className="w-[30%] rounded-lg h-full " />
        <div className="w-[70%] h-full px-6 flex flex-col justify-center gap-1">
            <h3 className="text-xl  text-gray-900 dark:text-gray-200">
                My Past Contest
            </h3>
            <p className="text-gray-500 text-sm w-[90%] dark:text-gray-400">
                12th September 2021,09:00 AM GMT+5:30
            </p>
            <p className="text-gray-500 text-xs w-[80%] dark:text-gray-400">
                Completed with 15,000 Submissions
            </p>
        </div>
        <button className="bg-blue-100 text-violet-800 h-fit p-2 px-4 rounded-lg">View</button>
    </div>
  )
}

export default PastContestCard