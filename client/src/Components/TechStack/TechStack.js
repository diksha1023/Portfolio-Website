import React ,{useState} from 'react'
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
                <h5>Tech Stack</h5>
                <span className='line'></span>

            </div>

            

            <div className='row'>

                {data.slice(0,showMoreTechStack).map((item, index) => (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>

                        <div className={index===0?"tech-content-marked tech-content":"tech-content"}>
                            <span className='tech-number' style={{backgroundColor:colors[index]}}>
                                {index+1}

                            </span>
                            <p>{item.name}</p>
                        </div>


                    </div>
                ))}
            </div>

            {showMoreTechStack >= data.length ? null:(
                <span className='load-more-tech-stack' onClick={loadMore}>
                Load More
            </span>
            )}
            

        </div>
    )
}

export default TechStack