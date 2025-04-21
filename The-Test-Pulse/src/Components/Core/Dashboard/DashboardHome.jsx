import React from 'react'
import StudentDasboard from '../../DashBoards/StudentDasboard'
import { useSelector } from 'react-redux'

function DashboardHome() {
  const { user } = useSelector((state) => state.profile)

  return (
    <div className='h-screen pb-10'>
      {user.accountType ==="Student" &&(
              <StudentDasboard/>
      )}
    </div>
  )
}

export default DashboardHome