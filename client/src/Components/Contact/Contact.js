import React,{useState} from 'react'

import './Contact.css'
import contactImg from '../../Image/contact.jpg'

import { RiSendPlaneFill } from "react-icons/ri";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Fade from 'react-reveal/Fade';



const Contact = () => {

    const API="http://localhost:23243/sendemail";
    const [name,setName]= useState();
    const [email,setEmail]= useState();
    const [jobtypes,setJobtypes]= useState();
    const [message,setMessage]= useState();

    console.log(name)

    const sendemailInfo=() =>{
        fetch(API, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",

            },
            body: JSON.stringify({
                name,
                 email,
                jobtypes,
                message,
            }),
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result.error){
                toast.error(result.error, {
                    position:toast.POSITION.TOP_RIGHT
                    
                })
            } else{

                toast.success("Your Email has been sent.",{
                    position: toast.POSITION.TOP_RIGHT,
                });
            setName("");
            setEmail("");
            setJobtypes("");
            setMessage("");

            }

            
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className='container contact-section' id="contact">

            <div className='row'>

                <Fade bottom>
                <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>

                    <div className='contact-form-image'>
                        <img src={contactImg}
                            alt="contact form image" />

                    </div>

                </div>
                </Fade>

                <Fade right>

                <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>

                    <div className='contact-form-design'>
                        <div className='text-center'>
                            <h3>Contact Me</h3>

                        </div>
                        <form>
                            <div className='contact-form'>
                                <label className='form-lable'>Name</label>
                                <input type="text" className='form-control' 
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                />

                                

                            </div>

                            <div className='contact-form'>
                                <label className='form-lable'>E-mail</label>
                                <input type="text" className='form-control' 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                />

                                

                            </div>

                            <div className='contact-form'>
                                <label className='form-lable'>Job Types</label>
                                <select className='custom-select-tag' value={jobtypes}
                                onChange={(e)=>setJobtypes(e.target.value)}>
                                    <option>Full Time - Onsite</option>
                                    <option>Full Time - Hybrid</option>
                                    <option>Full Time - Remote</option>
                                    <option>Contract Job</option>
                                </select>

                                

                            </div>

                            <div className='contact-form'>
                                <label className='form-lable'>Message</label>
                                <textarea rows="4" type="text" className='form-control' 
                                value={message}
                                onChange={(e)=>setMessage(e.target.value)}
                                />
                                

                            </div>

                            <div className='button-submit' onClick={sendemailInfo}>
                                <p>Send
                                    <RiSendPlaneFill size={20} />


                                </p>


                            </div>
                        </form>


                    </div>
                </div>

                </Fade>

            </div>

            <ToastContainer autoClose={8000}/>

        </div>
    )
}

export default Contact


// import React, { useState } from 'react';
// import './Contact.css';
// import contactImg from '../../Image/contact.jpg';
// import { RiSendPlaneFill } from "react-icons/ri";
// import { toast , ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Fade from 'react-reveal/Fade';

// const Contact = () => {
//     const API = "http://localhost:23243/sendemail";
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [jobtypes, setJobtypes] = useState("Full Time - Onsite"); // Assuming this as default
//     const [message, setMessage] = useState("");
   
//     const sendemailInfo = (e) => {
//         e.preventDefault(); // Prevent default form submission
//         fetch(API, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//             body: JSON.stringify({ name, email, jobtypes, message }),
//         })
//         .then(res => {
//             if (!res.ok) throw new Error('Response not OK');
//             return res.json();
//         })
//         .then((result) => {
//             if (result.error) {
//                 toast.error(result.error, {
//                     position: toast.POSITION.TOP_RIGHT
//                 });
//             } else {
//                 toast.success("Your Email has been sent.", {
//                     position: toast.POSITION.TOP_RIGHT,
//                 });
//                 setName("");
//                 setEmail("");
//                 setJobtypes("Full Time - Onsite"); // Reset to default or to an initial selection placeholder
//                 setMessage("");
//             }
//         })
//         .catch((err) => {
//             console.log(err);
//             toast.error("An error occurred. Please try again.", {
//                 position: toast.POSITION.TOP_RIGHT,
//             });
//         });
//     };

//     return (
//         <div className='container contact-section' id="contact">
//             <div className='row'>
//                 <Fade bottom>
//                 <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
//                     <div className='contact-form-image'>
//                         <img src={contactImg} alt="contact form image" />
//                     </div>
//                 </div>
//                 </Fade>
//                 <Fade right>
//                 <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7'>
//                     <div className='contact-form-design'>
//                         <div className='text-center'>
//                             <h5>Contact Me</h5>
//                         </div>

                        
//                         <form onSubmit={sendemailInfo}> {/* Use onSubmit handler here */}


//                              <div className='contact-form'>
//                                  <label className='form-lable'>Name</label>
//                                  <input type="text" className='form-control' 
//                                 value={name}
//                                 onChange={(e)=>setName(e.target.value)}
//                                 />

                                

//                             </div>

//                              <div className='contact-form'>
//                                  <label className='form-lable'>E-mail</label>
//                                  <input type="text" className='form-control' 
//                                 value={email}
//                                 onChange={(e)=>setEmail(e.target.value)}
//                                 />

                                

//                             </div>

//                              <div className='contact-form'>
//                                  <label className='form-lable'>Job Types</label>
//                                  <select className='custom-select-tag' value={jobtypes}
//                                  onChange={(e)=>setJobtypes(e.target.value)}>
//                                      <option>Full Time - Onsite</option>
//                                      <option>Full Time - Hybrid</option>
//                                      <option>Full Time - Remote</option>
//                                      <option>Contract Job</option>
//                                  </select>

                                

//                              </div>

//                              <div className='contact-form'>
//                                  <label className='form-lable'>Message</label>
//                                  <textarea rows="4" type="text" className='form-control' 
//                                 value={message}
//                                 onChange={(e)=>setMessage(e.target.value)}
//                                 />
                                

//                              </div>
                          
//                             <div className='button-submit'>
//                                 <button type="submit"> 
//                                     Send
//                                     <RiSendPlaneFill size={20} />
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 </Fade>
//             </div>
//             <ToastContainer autoClose={8000}/>
//         </div>
//     );
// }

//  export default Contact;

