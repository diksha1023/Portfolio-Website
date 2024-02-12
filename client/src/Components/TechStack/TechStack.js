import React ,{useState} from 'react'
import "./TechStack.css"

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const TechStack = () => {

    const data = [
        {
            name: "Python"
        },
        {
            name: "Java"
        },
        {
            name: "System Design"
        },
        {
            name: "JavaScript"
        },
        {
            name: "PostGreSql"
        },
        {
            name: "MongoDB"
        },
        {
            name: "Microsoft Azure"
        },
        {
            name: "Amazon Web Services"
        },
        {
            name: "SQL"
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
            name: "Groovy"
        },
        {
            name: "Git"
        },
        {
            name: "GitHub"
        },

    ]

    const colors=[
        "#48C9B0",
        "#E74C3C",
        "#A569BD",
        "#F1C40F",
        "#2471A3",
        "#40E0D0",
        "#DFFF00",
        "#F08080",
        "#DE3163",
        "#CCCCFF",
        "#1E8449",
        "#800080",
        "#008000",
        "#641E16"
        

    ];

    const [showMoreTechStack, setShowMoreTechStack]=useState(6);

    const loadMore= ()=>{
        setShowMoreTechStack((prev)=>prev+3);
    }

    return (
        <div className='container techstack-section ' id="techStack">

            <div className='section-title'>
                <h3>Tech Stack</h3>
                <span className='line'></span>

            </div>

            

            <div className='row'>

                {data.slice(0,showMoreTechStack).map((item, index) => (

                    <Fade right>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>

                        <div className={index===0?"tech-content-marked tech-content":"tech-content"}>
                            <span className='tech-number' style={{backgroundColor:colors[index]}}>
                                {index+1}

                            </span>
                            <p>{item.name}</p>
                        </div>


                    </div>
                    </Fade>
                ))}
            </div>



            {showMoreTechStack >= data.length ? null:(
                <Zoom>
                <span className='load-more-tech-stack' onClick={loadMore}>
                Load More
            </span>
            </Zoom>
            )}
            
            

        </div>
    )
}

export default TechStack