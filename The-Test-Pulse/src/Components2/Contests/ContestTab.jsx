import React from 'react'
import PastContestCard from './PastContestCard'

function ContestTab() {
  return (
    <div className='w-full h-full p-4   flex items-center flex-col gap-3 overflow-y-scroll '>
        <PastContestCard/>
        <PastContestCard/>
        <PastContestCard/>
        <PastContestCard/>
        <PastContestCard/>
    </div>
  )
}

export default ContestTab