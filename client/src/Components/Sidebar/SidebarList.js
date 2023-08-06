import React from 'react'
import "./SidebarList.css"
import profile_pic from "../../Image/profile_pic.jpg"

import { FcHome, FcBusinesswoman, FcOrganization,FcVoicePresentation,FcGraduationCap, FcReading,FcTodoList,FcSalesPerformance,FcViewDetails } from "react-icons/fc";

import {MdBiotech} from "react-icons/md";

const SidebarList = ({expandSidebar}) => {
  return (
    <React.Fragment>

        {expandSidebar?(
            <div className='navbar-items'>
            <div className='sidebar-profile-pic'>
                <img src={profile_pic} alt="profile picture"/>
            </div>
            <ul>
                <li className='nav-item'> <FcHome size={25}/> Home</li>
                <li className='nav-item'> <FcBusinesswoman size={25}/> About</li>
                <li className='nav-item'> <FcOrganization size={25}/> Work Experience</li>
                <li className='nav-item'> <MdBiotech size={25}/> Tech Stack</li>
                <li className='nav-item'> <FcGraduationCap size={25}/> Education</li>
                <li className='nav-item'> <FcTodoList size={25}/> Projects</li>
                <li className='nav-item'> <FcSalesPerformance size={25}/> Testimonial</li>
                <li className='nav-item'> <FcVoicePresentation size={25}/> Contact</li>
            </ul>
        </div>
        ) : (
            <div className='navbar-items-only-icons'>
                <ul>
                <li className='nav-item'> <FcHome size={25}/> </li>
                <li className='nav-item'> <FcBusinesswoman size={25}/> </li>
                <li className='nav-item'> <FcOrganization size={25}/> </li>
                <li className='nav-item'> <MdBiotech size={25} color="white"/> </li>
                <li className='nav-item'> <FcGraduationCap size={25}/> </li>
                <li className='nav-item'> <FcTodoList size={25}/></li>
                <li className='nav-item'> <FcSalesPerformance size={25}/></li>
                <li className='nav-item'> <FcVoicePresentation size={25}/></li>
            </ul>
            </div>
        )}

        

    </React.Fragment>
  )
}

export default SidebarList