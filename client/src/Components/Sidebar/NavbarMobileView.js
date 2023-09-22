import React, {useState} from 'react'

import "./NavbarMobileView.css"

import { GiHamburgerMenu } from "react-icons/gi"

import { FcHome, FcBusinesswoman, FcOrganization, FcVoicePresentation, FcGraduationCap, FcReading, FcTodoList, FcSalesPerformance, FcViewDetails } from "react-icons/fc";

import { MdBiotech } from "react-icons/md";

import { Link } from "react-scroll"



const NavbarMobileView = () => {

    const [open, setOpen]= useState(false);

    const handleClick = ()=>{
        setOpen(!open)
    }

    return (
        <div className='mobile-view-navbar'>
            <div className='navbar-header'>

                <p><GiHamburgerMenu size={25} onClick={handleClick} />

                </p>

            </div>

            {open? (<div className='mobile-nav'>

<ul>
    <li className='nav-item-mobileview'>
        <Link to="home" spy={true} smooth={true} duration={100} offset={-100} >
            <FcHome size={25} /> Home
        </Link>
    </li>
    <li className='nav-item-mobileview'>
        <Link to="about" spy={true} smooth={true} duration={100} offset={-100}>
            <FcBusinesswoman size={25} /> About
        </Link>
    </li>
    <li className='nav-item-mobileview'>
        <Link to="workExperience" spy={true} smooth={true} duration={100} offset={-100}>
            <FcOrganization size={25} /> Work Experience
        </Link>
    </li>
    <li className='nav-item-mobileview'>
        <Link to="techStack" spy={true} smooth={true} duration={100} offset={-100}>
            <MdBiotech size={25} color="orange"/> Tech Stack
        </Link>
    </li>
    <li className='nav-item-mobileview'>
        <Link to="education" spy={true} smooth={true} duration={100} offset={-100}>
            <FcGraduationCap size={25} /> Education
        </Link>
    </li>
    <li className='nav-item-mobileview'>
        <Link to="projects" spy={true} smooth={true} duration={100} offset={-100}>
            <FcTodoList size={25} /> Projects
        </Link>
    </li>
    <li className='nav-item-mobileview'>
        <Link to="certifications" spy={true} smooth={true} duration={100} offset={-100}>
            <FcSalesPerformance size={25} /> Certifications
        </Link>
    </li>
    <li className='nav-item-mobileview'>
        <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>
            <FcVoicePresentation size={25} /> Contact
        </Link>
    </li>

</ul>

</div>): null}

            

        </div>
    )
}

export default NavbarMobileView