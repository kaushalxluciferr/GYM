// import {nodeMailer} from 'nodemailer'
import nodemailer from 'nodemailer'

export const sendEmail=async(options)=>{
const transporter=nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    service:process.env.SMTP_SERVICE,
    auth:{
        user:process.env.SMTP_MAIL,
        pass:process.env.SMTP_PASSWORD,

    },
})

const mailOptions={
    from:process.env.SMTP_MAIL,
     to:options.email,
     subject:options.subject,
     text:`${options.msg}\n\n Email of user Who sent the message :${options.userEmail}`
}
await transporter.sendMail(mailOptions)

}