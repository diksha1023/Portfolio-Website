const express = require('express');
const app = express();
const PORT = process.env.PORT || 23243;
const cors = require('cors');
const nodemailer = require('nodemailer');
const sendGridTransporter = require('nodemailer-sendgrid-transport');

require('dotenv').config();

app.use(cors());
app.use(express.json()); // Use Express built-in middleware
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport(sendGridTransporter({
    auth: {
        api_key: process.env.API_SENDGRID
    }
}));

app.post('/sendemail', (req, res) => {
    const { name, email, jobtypes, message } = req.body;

    // Validation checks...
    transporter.sendMail({
        to: "diksha1023@gmail.com",
        from: "diksha1023@gmail.com",
        subject: "Job Offer",
        html: `...`
    }, (error, info) => {
        if (error) {
            return res.status(500).json({error: "Failed to send email."});
        }
        res.status(201).json({ success: "Your email has been sent successfully." });
    });
});

app.listen(PORT, () => {
    console.log("Server Connected");
});


// const express= require('express');
// const app= express();
// const PORT= process.env.PORT || 23243;
// const bodyparser= require('body-parser');
// const cors= require('cors');
// const nodemailer= require('nodemailer');
// const sendGridTransporter = require('nodemailer-sendgrid-transport');


// require('dotenv').config();

// app.use(cors());
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:true}));

// const transporter= nodemailer.createTransport(
//     sendGridTransporter({
//         auth:{
//             api_key:process.env.API_SENDGRID
//         }
//     })   
// )

// app.post('/sendemail', (req,res)=>{
//     const {name,email,jobtypes,message}= req.body;

//     if(!name){
//         return res.status(400).json({error:"Please add your name."});
//     }
//     if(!email){
//         return res.status(400).json({error:"Please add your email."});
//     }
//     if(!jobtypes){
//         return res.status(400).json({error:"Please add jobtype."});
//     }
//     if(!message){
//         return res.status(400).json({error:"Please add your message."});
//     }
//     transporter.sendMail({
//         to:"diksha1023@gmail.com",
//         from:"diksha1023@gmail.com",
//         subject: "Job Offer",
//         html:`
//         <h5>Details Information:</h5>
//         <ul>
//         <li><p>Name: ${name}</p></li>
//         <li><p>Email: ${email}</p></li>
//         <li><p>Job Types: ${jobtypes}</p></li>
//         <li><p>Message: ${message}</p></li>
//         </ul>
//         `
//     })
//     res.json({name, email,success:"Your email has been sent successfully."})
// })

// app.listen(PORT, (req,res)=> {
//     console.log("Server Connected")
// });


