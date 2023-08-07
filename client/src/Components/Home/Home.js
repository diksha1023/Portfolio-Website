import React from 'react'
import "./Home.css";
import Typewriter from 'typewriter-effect';

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

            </div>


        </div>
    )
}

export default Home;
