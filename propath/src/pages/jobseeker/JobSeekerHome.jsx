import React from 'react'
import Navbar1 from '../../components/navbar/Navbar1'
import JobSeekerTopbar from '../../components/JobSeeker/JobSeekerTopbar'
import sidebarMenuItems from '../../components/jobprovider/dashboard/sidebarMenuItems'
import NavbarJobs from '../../components/navbar/NavbarJobs'
const JobSeekerHome = () => {
  return (
    <div>
        
        <Navbar1></Navbar1>
         <JobSeekerTopbar></JobSeekerTopbar>
         <sidebarMenuItems></sidebarMenuItems>
    
    </div>
  )
}

export default JobSeekerHome