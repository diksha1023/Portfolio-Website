import React from 'react'

import './Contact.css'
import contactImg from '../../Image/contact.jpg'

import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
    return (
        <div className='container contact-section' id="contact">

            <div className='row'>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>

                    <div className='contact-form-image'>
                        <img src={contactImg}
                            alt="contact form image" />

                    </div>

                </div>

                <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>

                    <div className='contact-form-design'>
                        <div className='text-center'>
                            <h5>Contact Me</h5>

                        </div>
                        <form>
                            <div className='contact-form'>
                                <label className='form-lable'>Name</label>
                                <input type="text" className='form-control' />

                            </div>

                            <div className='contact-form'>
                                <label className='form-lable'>E-mail</label>
                                <input type="email" className='form-control' />

                            </div>

                            <div className='contact-form'>
                                <label className='form-lable'>Job Types</label>
                                <select className='custom-select-tag'>
                                    <option>Full Time</option>
                                    <option>Hybrid</option>
                                    <option>Remote</option>
                                    <option>Co-op</option>
                                    <option>Part Time</option>
                                    <option>Contract Job</option>
                                </select>

                            </div>

                            <div className='contact-form'>
                                <label className='form-lable'>Message</label>
                                <textarea rows="4" type="text" className='form-control' />

                            </div>

                            <div className='button-submit'>
                                <p>Send
                                    <RiSendPlaneFill size={20} />


                                </p>


                            </div>
                        </form>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact