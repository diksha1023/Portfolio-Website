import React from 'react'

import './Education.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaGraduationCap } from "react-icons/fa";

const Education = () => {

    const data = [
        {
            name: "Indiana University Bloomington",
            degree: "MS in Computer Science",
            year: "Aug 2022 - May 2024",
            CGPA: "3.83/4",
            courses: "Applied Algorithms, Sotware Engineering, Advanced Databases, Applied Machine Learning, High Performance Computing, Data Mining"
        },
        {
            name: "VIT Vellore",
            degree: "B.Tech. in Computer Science & Engineering",
            year: "July 2015 - April 2019",
            CGPA: "8.92/10",
            courses: "Data Structures & Algorithms, Database Management System, Operating System, Computer Networks, Data Mining"
        }
    ]

    const colors = [
        'rgb(33, 150, 243)',
        'rgb(233, 30, 99)',
        'rgb(16, 204, 82)',
        "#4B088A",
        "#FF6347",
        "#FF1042"


    ]


    return (
        <div className='container education-section' id="education">

            <div className='section-title'>
                <h5>Education</h5>
                <span className='line'></span>
            </div>
            <br/>

            <VerticalTimeline lineColor={"#FF1042"}>
                {data.map((item, index) => (


                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: colors[index], color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  {color[index]}' }}
                        date={item.year}
                        dateClassName="date-class"
                        iconStyle={{ background: colors[index], color: '#fff' }}            
                        icon={<FaGraduationCap />}
                        
                    >
                        <h3 className="vertical-timeline-element-title">
                            {item.name}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle" style={{color:"black"}}>
                            {item.degree}
                        </h5>


                        <p>
                            {item.courses}
                        </p>
                    </VerticalTimelineElement>





                ))}
            </VerticalTimeline>


        </div>

  )
}

export default Education