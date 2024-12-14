import React, { useState } from 'react'
import axios  from 'axios' 
import {ClipLoader} from "react-spinners"
import { toast } from 'react-toastify'
function Contact() {
const [name,setname]=useState("")
const [email,setemail]=useState("")
const [msg,setmsg]=useState("")
const [load,setload]=useState(false)


const sendmail=async (e)=>{
  e.preventDefault();
  setload(true);
  try{
const {data}=await  axios.post('http://localhost:3000/send/mail',{
  name,
  email,
  msg,
},{ withCredentials:true,headers: {"Content-Type":"application/json"}})
setname("")
setmsg("")
setemail("")
toast.success("sucessfully sent")
setload(false)
  }catch(err)
  {
    setload(false)
toast.error(err.message)
  }
}


  return (
   <section className="contact">
    <form onSubmit={sendmail}>
      <h1>Contact Us</h1>
     <div> <label >Name</label>
     <input type="text" value={name} onChange={e=>setname(e.target.value)} />
     </div>
     <div> <label >Email</label>
     <input type="email" value={email} onChange={e=>setemail(e.target.value)} />
     </div>
     <div> <label >Message</label>
     <input type="text" value={msg} onChange={e=>setmsg(e.target.value)} />
     </div>
     <button type='submit' disabled={load} style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px"}}>
      {load&& <ClipLoader size={20} color='white' />}
      Send Message</button>
    </form>
   </section>
  )
}

export default Contact
