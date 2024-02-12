import React, { useState } from 'react'
import { FcExpand, FcCollapse } from "react-icons/fc";
import Zoom from 'react-reveal/Zoom';

const ProjectList = ({ name, des, projectLink, techUsed }) => {

    const [show, setShow] = useState(false);

    const handleShowAndCollapse = () => {
        setShow(!show);

    };

    const colors = [
        'rgb(33, 150, 243)',
        'rgb(233, 30, 99)',
        'rgb(16, 204, 82)',
        "#4B088A",
        "#FF6347",
        "#FF1042"


    ];

    return (

        <Zoom>
        <div className={show? "project-list-opened project-list" : "project-list"} onClick={handleShowAndCollapse}  
        //onMouseEnter={() => setShow(true)} 
        // onMouseLeave={() => setShow(false)}
        >
            
            <div className='title-and-collapse-option'>

                <h5>{name}</h5>
                <p>
                    {show ? <FcCollapse size={20} /> : <FcExpand size={20} />}
                </p>

            </div>
            <div className='description'>
                {show ? <p>{des}</p> : <p>{des.substring(0, 100)} . . . </p>}
            </div>
            <div className='row'>
                {techUsed && techUsed.map((tech, index) => (
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12' key={index}>

                        <div className='tech-used-in-project' >
                            <p style={{backgroundColor:colors[index]}} >{tech.techname}</p>

                        </div>

                    </div>
                ))}

            </div>

            <div className='live-demo-button'>
                <a target="_" href={projectLink} >Live Demo</a>

            </div>


        </div>
        </Zoom>

    )
}

export default ProjectList