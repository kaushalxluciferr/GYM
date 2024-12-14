import express from 'express'
import {config} from "dotenv"
import cors from 'cors'
// import { sendEmail } from './utils/sendEmail.js';

import  {sendEmail}  from './utils/sendEmail.js'


const app=express();
const router=express.Router()

config({path:"./config.env"})
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/",router)
router.post("/send/mail",async (req,res,next)=>{
    const {name,email,msg}=req.body
    if(!name||!email||!msg)
    {
        return next(res.status(400).json({
            success:false,
            message:"please provide all Details"
        }))
    }
    try{
        await sendEmail({
            email:"kaushalrauniyar1@gmail.com",
            subject:"gym Webiste Form",
            msg:msg,
            userEmail:email
        })
        res.status(200).json({
            success:true,
            message:"message sent succesfully."
        })
    }catch(err)
    {
res.status(500).json({
    success:false,
    message:"internal server error",
})
    }
})



app.listen(process.env.PORT,()=>{
    console.log(`server listening at port ${process.env.PORT}`);
    
})

