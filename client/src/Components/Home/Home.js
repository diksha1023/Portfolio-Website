import React from 'react'
import "./Home.css";
import Typewriter from 'typewriter-effect';
import MyCV from "./Diksha_Singh_Resume.pdf"

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';

import { Link } from "react-scroll";


const Home = ({theme, changeTheme}) => {
    return (
        <div className='container-fluid home' id= "home">

            <div className='theme-change' onClick={changeTheme}>

            {theme === "light" ? (<p><BsFillMoonStarsFill size={40}/></p>): (<p className="sun-theme-icon"><BsFillSunFill size={40}/></p>)}

            </div>

            <div className='container home-content'>
                <Fade right>

                <h1>Hi I'm Diksha Singh, looking for full time opportunities in</h1>
                <h3>
                    {/* Update your skills here */}
                    <Typewriter
                        options={{
                            strings: ['Software Developer', 
                            'Backend Developer',
                            'MERN Stack Developer',
                            'Cloud Developer'

                    ],
                            autoStart: true,
                            loop: true,
                            delay: 5
                        }}
                    />
                </h3>

                </Fade>
                
                <Fade bottom>

                

                <div className='button-for-action'>
                <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>
                    <div className='hire-me-button'>
                    
                        Hire Me
                        
                    </div>
                    </Link>
                    <div className='get-resume-button'>
                        <a href={MyCV} download="Diksha_Singh_Resume.pdf">
                        Get Resume
                        </a>
                        
                    </div>

                </div>
                </Fade>

            </div>



        </div>
    )
}

export default Home;
