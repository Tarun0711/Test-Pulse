import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import InboxTabs from '../InboxComponent/InboxTab'

function Inbox() {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Dashboard
        </Link>
        <Link underline="hover" color="inherit">
          Inbox
        </Link>
      </Breadcrumbs>
      <div className='my-4 border rounded-lg bg-white  border-richblack-200 md:min-h-[60vh]'>
      <InboxTabs/>

        </div>
    </div>
  )
}

export default Inbox