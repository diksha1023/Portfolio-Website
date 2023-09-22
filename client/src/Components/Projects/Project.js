import React from 'react'
import ProjectList from './ProjectList'
import "./Project.css"

const Project = () => {


    const data=[
        {
            name:"Movie Ticket Booking Application",
            des:"Developed a movie ticket booking system following an Agile approach with essential features such as Searching, Bookings,Payments, Chat Support, etc. to increase the speed of bookings by 40% and reduce customer wait times by 30%. Used Express and Node for backend, React framework for frontend, MongoDB for the database and AWS for hosting the application",
            projectLink: "https://github.com/diksha1023/WatchAFlick-Movie-Ticket-Booking-Management-System.git",
            techUsed: [ 
                {
                    techname:"MongoDB"
                },
                {
                    techname:"Express js"
                },
                {
                    techname:"React js"
                },
                {
                    techname:"Node js"
                }
            ]

        },
        {
            name:"GraphMaze - Parallel Graph Algorithms Library",
            des:"GraphMaze - Parallel Graph Algorithms Library a movie ticket booking system following an Agile approach with essential features such as Searching, Bookings,Payments, Chat Support, etc. to increase the speed of bookings by 40% and reduce customer wait times by 30%.",
            projectLink: "https://github.com/diksha1023/GraphLink---Graph-Clustering-Algorithms.git",
            techUsed: [ 
                {
                    techname:"Python"
                },
                {
                    techname:"C++"
                },
                {
                    techname:"CUDA"
                },
                {
                    techname:"GPU"
                }
            ]

        },
        {
            name:"Driver Insurance Claim Prediction",
            des:"Implemented 9 different ML models using scikit-learn and TensorFlow to predict if a driver will file an insurance claim or not. Evaluation metrics included accuracy, precision, recall, F1 score and ROC score to compare the models. Achieved an accuracy of 96.9% using AdaBoost with Random Forest and Bagging classifier with Decision Tree.",
            projectLink: "https://github.com/diksha1023/GraphLink---Graph-Clustering-Algorithms.git",
            techUsed: [ 
                {
                    techname:"Python"
                }
            ]

        }

    ]
  return (
    <div className='container' id="projects">

        <div className='section-title'>
            <h5>Projects</h5>
            <span className='line'></span>
        </div>

        <div className='row'>

            {data.map((item, index)  => (
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}>
                    {/* <ProjectList technamehere={item.name}/> */}
                    <ProjectList {...item}/>

                </div>

            ))}

            

        </div>
    
      </div>
  )
}

export default Project