import React from 'react'
import './WorkExperience.css'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {

    const data = [
        {
            companyName: "BrainoVision Pvt. Ltd.",
            location: " Hyderabad, India",
            position: "Software Developer Intern",
            year: "June 2023 - Aug 2023",
            desc: "• Implemented AWS cloud services (EC2, S3, Lambda, VPC) in the project, achieving 30% improvement in scalability and reducing hosting costs by 25%. • Developed Jenkins CI/CD pipelines for the web application, leading to 40% faster deployment times and a 20% decrease in production defects",
            techSkills: [
                {
                    techName: "AWS"
                },
                { techName: "Jenkins" },
                { techName: "Docker" },
                {
                    techName: "DevOps"
                }
            ]

        },
        {
            companyName: "Deloitte Consulting",
            location: "Bengaluru, India",
            position: "Consultant",
            year: "May 2022 - July 2022",
            desc: "• Worked as an Integration Developer. • Implemented Proof of Concepts (POCs) to test the data cloud integrations feasibility before incorporating them into the applications. • Worked with the client team to set up the web service connectivity between SAP Cloud Integration (SCI) and different systems while troubleshooting several technical roadblocks.",
            techSkills: [
                {
                    techName: "SAP CPI"
                },
                { techName: "Groovy" },
                { techName: "XSLT" },
                { techName: "Rest Apis" },
                {
                    techName: "SAP EC"
                }
            ]

        },
        {
            companyName: "Deloitte Consulting",
            location: "Bengaluru, India",
            position: "Business Technology Analyst",
            year: "Aug 2019 - Aug 2022",
            desc: "• Worked as an Integration Developer. • Implemented Proof of Concepts (POCs) to test the data cloud integrations feasibility before incorporating them into the applications. • Worked with the client team to set up the web service connectivity between SAP Cloud Integration (SCI) and different systems while troubleshooting several technical roadblocks.",
            techSkills: [
                {
                    techName: "SAP CPI"
                },
                { techName: "Groovy" },
                { techName: "XSLT" },
                { techName: "Rest Apis" },
                {
                    techName: "SAP EC"
                }
            ]

        },
        {
            companyName: "Deloitte Consulting",
            location: "Bengaluru, India",
            position: "Intern",
            year: "Jan 2019 - July 2019",
            desc: "● Developed an interface using ABAP as part of the project to eliminate the problem of having different payroll systems with one automated system processing the payrolls of 30k employees of a US-based airlines company. ● Developed integrations on SCI to process the benefits compensation of employees in a USI client project. ● Gained knowledge and training on SAP ABAP (Advanced Business Application Programming) & SCI.",
            techSkills: [
                {
                    techName: "SAP CPI"
                },
                { techName: "Groovy" },
                { techName: "XSLT" },
                { techName: "Rest Apis" },
                {
                    techName: "SAP EC}"
                }
            ]

        },
        {
            companyName: "Indian Institute of Information Technology",
            location: "Allahabad, India",
            position: "Summer Research Intern",
            year: "May 2018 - June 2018",
            desc: "● Studied a research paper and implemented the project “Synthesizing High Utility Itemset Mining”. ● Modified and optimized the Faster High Utility Mining (FHM) algorithm and implemented it using Java.",
            techSkills: [
                {
                    techName: "Java"
                }
            ]

        },
        {
            companyName: "Pythian Technology Pvt. Ltd.",
            location: "Delhi, India",
            position: "Data Science Intern",
            year: "April 2018 - May 2018",
            desc: "● Designed & developed dashboards for Chronic Myeloid Leukemia application. ● Designed a web-based application using the Shiny framework in R to help doctors in Delhi hospitals keep track of their patient’s health records, prescribed drugs, etc., and accordingly analyze and switch drugs based on prior prescriptions. ● Connected to MySQL database and used dplyr, tidyr and ggplot2 packages in R for data wrangling and visualization.",
            techSkills: [
                {
                    techName: "R"
                },
                {
                    techName: "MySql"
                }
            ]

        },



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
        <div className='container work-experience-section' id="workExperience">
            <div className='section-title'>
                <h5>Professional Experience</h5>
                <span className='line'></span>

            </div>

            <div className='timeline-section'>


                <VerticalTimeline lineColor={"#FF1042"}>
                    {data.map((item, index) => (


                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: colors[index], color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  {color[index]}' }}
                            date={item.year}
                            dateClassName="date-class"
                            iconStyle={{ background: colors[index], color: '#fff' }}
                            icon={<MdGroupWork />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {item.companyName}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {item.position}
                            </h5>

                            <div className='row'>

                                {item.techSkills.map((tec, inx) => (

                                    <div className='col-xl-4 col-lg4 col-md-6 col-sm-12' key={inx}>
                                        <div className='tech-skills'>
                                            <p>
                                                {tec.techName}
                                            </p>

                                        </div>

                                    </div>
                                ))}
                            </div>
                            <p>
                                {item.desc}
                            </p>
                        </VerticalTimelineElement>





                    ))}
                </VerticalTimeline>


            </div>


        </div>
    )
}

export default WorkExperience