import React from 'react'
import { Link } from 'react-router-dom'
import coin from '../../../Assests/Logo/Coin.svg'
function StreakCard() {
  return (
    <div className='bg-yellow-600 mt-1 text-white overflow-hidden relative flex flex-col gap-1 p-4 rounded-lg'>
        <img className=' absolute h-32 right-0 z-0 ' src={coin} alt='coin'/>
        <p className='text-xl z-10 font-bold '>Shop With Pulse Coins</p>
        <p className='text-sm z-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, odit.</p>
        <Link className='border-2 z-10 w-fit border-white p-2 rounded-lg bg-white text-yellow-600 hover:scale-95'>Redeem</Link>
    </div>
  )
}

export default StreakCard