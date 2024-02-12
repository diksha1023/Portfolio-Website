import React from 'react'

import './Certifications.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaExternalLinkAlt } from "react-icons/fa";
import Zoom from 'react-reveal/Zoom';

const Certifications = () => {


    const data = [
        {
            name: "AWS Cloud Practitioner Essentials",
            issued_by: "Coursera",
            url: "https://www.coursera.org/account/accomplishments/certificate/XF3G4TTBURJG",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
        },
        {
            name: "Introduction to Cloud Computing",
            issued_by: "Coursera",
            url: "https://www.coursera.org/account/accomplishments/certificate/3AQ2M6SP43SE",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
        },
        {
            name: "Introduction to Cloud Computing",
            issued_by: "Coursera",
            url: "https://www.coursera.org/account/accomplishments/certificate/3AQ2M6SP43SE",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
        },
        {
            name: "Introduction to Cloud Computing",
            issued_by: "Coursera",
            url: "https://www.coursera.org/account/accomplishments/certificate/3AQ2M6SP43SE",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
        },
        {
            name: "Introduction to Cloud Computing",
            issued_by: "Coursera",
            url: "https://www.coursera.org/account/accomplishments/certificate/3AQ2M6SP43SE",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
        },
        {
            name: "Introduction to Cloud Computing",
            issued_by: "Coursera",
            url: "https://www.coursera.org/account/accomplishments/certificate/3AQ2M6SP43SE",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
        },
        {
            name: "Introduction to Cloud Computing",
            issued_by: "Coursera",
            url: "https://www.coursera.org/account/accomplishments/certificate/3AQ2M6SP43SE",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
        },
        {
            name: "Introduction to Cloud Computing",
            issued_by: "Coursera",
            url: "https://www.coursera.org/account/accomplishments/certificate/3AQ2M6SP43SE",
            img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
        }


    ]

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        initialSlide: 0,
        rows: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const colors = [
        "#1F618D",
        'rgb(33, 150, 243)',
        'rgb(233, 30, 99)',
        'rgb(16, 204, 82)',
        "#4B088A",
        "#FF6347",
        "#FF1042",
        "#FF8042"


    ];

    return (
        <div className="container certifications-section" id="certifications">
            <div className='section-title'>
                <h3>Certifications</h3>
                <span className='line'></span>
            </div>


            <div className='certifications-slider'>

                <Slider {...settings}>

                    {data.map((item, index) => (

                        <Zoom>
                        <div className='content-slider-main'>
                            <div className='content-slider' key={index} style={{backgroundColor: colors[index]}}>

                                <img src={item.img} atl="Certification img" className='center-image'>

                                </img>
                                <p>{item.name}</p>
                                <p>{item.issued_by}</p>

                                <div className='credentials-btn '>
                                    <a target="_" href={item.url} >Show Credential</a>
                                    <FaExternalLinkAlt size={20}/>
                                </div>

                            </div>



                        </div>
                        </Zoom>

                    ))}


                </Slider>

            </div >
        </div >




    )
}

export default Certifications