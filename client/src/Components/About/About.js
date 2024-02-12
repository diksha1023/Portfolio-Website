import React from 'react'

import "./About.css"

import ProfilePic from '../../Image/profile_pic.jpg'

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const About = () => {
  return (
    <div className='container about-section' id="about">
        <div className='row'>

            <Fade bottom>

            
            
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>

                <div className='about-image'>
                    <img src={ProfilePic} alt="Profile Picture"/>

                </div>

            </div>
            </Fade>

            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>

                <div className='about-details'>

                    <Flip left>
                    <div className='about-title'>
                        <h3>
                            About Me
                        </h3>
                        <span className='line'></span>
                        <br/>

                    </div>
                    </Flip>

                    <Fade right>
                    <p className='about-para'>I'm Diksha Singh, an aspiring Master's candidate in Computer Science at Indiana University Bloomington. With my anticipated graduation in May 2024, I am eagerly seeking full-time roles starting May 6, 2024, where I can apply and expand my expertise in software development and engineering, with a strong interest in integrating AI and ML solutions.</p>

                        <p>My professional journey began at Deloitte in India, where I honed my skills in data integration, development, and customization. Utilizing Groovy scripts (Java), XSLT, REST/SOAP APIs, and SuccessFactors, I contributed to significant projects that prepared me for a seamless transition from a Consultant/Business Technology Analyst to a dynamic software professional.</p>


<p>As I advanced through my Master's program, I delved deep into backend development, crafting sophisticated backend systems that are the backbone of scalable, robust applications. This expertise is paralleled by my ventures into system design, where I have conceptualized and implemented efficient, high-performing architectures, ensuring scalability, reliability, and seamless integration across components.</p>

<p>My exploration didn't stop at backend technologies; I've passionately engaged with machine learning, developing, training, and refining models to unlock new potentials, particularly with Large Language Models (LLMs). This exploration into AI was significantly enriched during my summer internship at Brainovision Solutions, India, where I expanded my knowledge in AWS, Jenkins, and Docker, further solidifying my software engineering skills.</p>

<p>As I transition from a consulting background to a more technical role, I seek opportunities to leverage my diverse skill set in software development, AI solutions, and system design. My ambition is to contribute innovative and impactful solutions to the tech industry, staying at the cutting edge of technological advancements and driving forward the capabilities of digital systems.</p>



</Fade>

                </div>

            </div>

        </div>
    
    </div>
  )
}

export default About