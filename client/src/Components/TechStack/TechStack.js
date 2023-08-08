import React from 'react'
import "./TechStack.css"

const TechStack = () => {

    const data = [
        {
            name: "Full Stack Developer"
        },
        {
            name: "Java"
        },
        {
            name: "PostGreSql"
        },
        {
            name: "Python"
        },
        {
            name: "JavaScript"
        },
        {
            name: "Node.js"
        },
        {
            name: "Express.js"
        },
        {
            name: "React"
        },
        {
            name: "Amazon Web Services"
        }

    ]
    return (
        <div className='container techstack-section '>

            <div className='section-title'>
                <h5>Tech Stack</h5>
                <span className='line'></span>

            </div>

            <div className='row'>

                {data.map((item, index) => (
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

                        <div className='tech-content'>
                            <p>{item.name}</p>
                        </div>


                    </div>
                ))}
            </div>

        </div>
    )
}

export default TechStack