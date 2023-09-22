import React from 'react'

import "./About.css"

import ProfilePic from '../../Image/profile_pic.jpg'

const About = () => {
  return (
    <div className='container about-section' id="about">
        <div className='row'>
            
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>

                <div className='about-image'>
                    <img src={ProfilePic} alt="Profile Picture"/>

                </div>

            </div>

            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>

                <div className='about-details'>
                    <div className='about-title'>
                        <h5>
                            About Me
                        </h5>
                        <span className='line'></span>
                        <br/>

                    </div>

                    <p>I'm Diksha Singh, currently Pursuing Masters in Computer Science from Indiana University Bloomington. 
I'm actively seeking Summer'23 internship opportunities to gain practical experience in the Software Development/Machine learning domain</p>

                </div>

            </div>

        </div>
    
    </div>
  )
}

export default About