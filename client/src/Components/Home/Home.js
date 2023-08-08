import React from 'react'
import "./Home.css";
import Typewriter from 'typewriter-effect';
import MyCV from "./Diksha_Singh_Resume.pdf"

const Home = () => {
    return (
        <div className='container-fluid home'>

            <div className='container home-content'>
                <h1>Hi I'm</h1>
                <h3>
                    {/* Update your skills here */}
                    <Typewriter
                        options={{
                            strings: ['Full Stack Software Developer', 
                            'Java Developer',
                            'Web Developer',
                            'MERN Stack Developer',
                            'Cloud Developer'

                    ],
                            autoStart: true,
                            loop: true,
                            delay: 5
                        }}
                    />
                </h3>

                <div className='button-for-action'>
                    <div className='hire-me-button'>
                        Hire Me
                    </div>

                    <div className='get-resume-button'>
                        <a href={MyCV} download="Diksha_Singh_Resume.pdf">
                        Get Resume
                        </a>
                        
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Home;
