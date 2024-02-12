import React from 'react'
import "./SidebarList.css"
import profile_pic from "../../Image/profile_pic.jpg"

import { FcHome, FcBusinesswoman, FcOrganization, FcVoicePresentation, FcGraduationCap, FcReading, FcTodoList, FcSalesPerformance, FcViewDetails } from "react-icons/fc";

import { MdBiotech } from "react-icons/md";

import { Link } from "react-scroll";



const SidebarList = ({ expandSidebar }) => {
    return (
        <React.Fragment>

            {expandSidebar ? (
                <div className='navbar-items'>
                    <div className='sidebar-profile-pic'>
                        <img src={profile_pic} alt="profile picture" />
                    </div>
                    <ul>
                        <li className='nav-item'>
                            <Link to="home" spy={true} smooth={true} duration={100} offset={-100} >
                                <FcHome size={25} /> Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="about" spy={true} smooth={true} duration={100} offset={-100}>
                                <FcBusinesswoman size={25} /> About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="workExperience" spy={true} smooth={true} duration={100} offset={-100}>
                                <FcOrganization size={25} /> Work Experience
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="techStack" spy={true} smooth={true} duration={100} offset={-100}>
                                <MdBiotech size={25} color="white" /> Tech Stack
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="education" spy={true} smooth={true} duration={100} offset={-100}>
                                <FcGraduationCap size={25} /> Education
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="projects" spy={true} smooth={true} duration={100} offset={-100}>
                                <FcTodoList size={25} /> Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="certifications" spy={true} smooth={true} duration={100} offset={-100}>
                                <FcSalesPerformance size={25} /> Certifications
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>
                                <FcVoicePresentation size={25} /> Contact
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            ) : (
                <div className='navbar-items-only-icons'>

<ul>
                        <li className='nav-item'>
                            <Link to="home" spy={true} smooth={true} duration={100} offset={-100} >
                                <FcHome size={25} /> 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="about" spy={true} smooth={true} duration={100} offset={-100}>
                                <FcBusinesswoman size={25} /> 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="workExperience" spy={true} smooth={true} duration={100} offset={-100}>
                                <FcOrganization size={25} /> 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="techStack" spy={true} smooth={true} duration={100} offset={-100}>
                                <MdBiotech size={25} color="white" /> 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="education" spy={true} smooth={true} duration={100} offset={-100}>
                                <FcGraduationCap size={25} /> 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="projects" spy={true} smooth={true} duration={100} offset={-100}>
                                <FcTodoList size={25} /> 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="certifications" spy={true} smooth={true} duration={100} offset={-100}>
                                <FcSalesPerformance size={25} /> 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>
                                <FcVoicePresentation size={25} /> 
                            </Link>
                        </li>
                        
                    </ul>
                    {/* <ul>
                        <li className='nav-item'> <FcHome size={25} /> </li>
                        <li className='nav-item'> <FcBusinesswoman size={25} /> </li>
                        <li className='nav-item'> <FcOrganization size={25} /> </li>
                        <li className='nav-item'> <MdBiotech size={25} color="white" /> </li>
                        <li className='nav-item'> <FcGraduationCap size={25} /> </li>
                        <li className='nav-item'> <FcTodoList size={25} /></li>
                        <li className='nav-item'> <FcSalesPerformance size={25} /></li>
                        <li className='nav-item'> <FcVoicePresentation size={25} /></li>
                    </ul> */}
                </div>
            )}



        </React.Fragment>
    )
}

export default SidebarList