import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Bmicalc() {

  const[ht,setht]=useState("")
  const[wt,setwt]=useState("")
  const[gen,setgen]=useState("")
  const[bmi,setbmi]=useState("")

const calculatebmi=(e)=>{
  e.preventDefault();
  if(!ht||!wt||!gen)
  {
    toast.error("something is missing")
    return;
  }
  const heightinM=ht/100;
  const bmivalue=(wt/(heightinM*heightinM)).toFixed(2)
setbmi(bmivalue)
if(bmivalue<18.5)
{
  toast.warning("!underweight.visit to doctor")
}
else if(bmivalue>=18.5&&bmivalue<24.9)
  {
    toast.success("You have Normal Weight.Join Us")
  }
  else{
    toast.warning("you are overweight.Start Your Fitness Now")
  }
}

  return (
    <>
    <section className="bmi">
<h1>BMI CALCULATOR</h1>
<div className="container">
  <div className="wrapper">
    <form onSubmit={calculatebmi}>
      <div>
        <label >Height(cm) </label>
        <input type="number" value={ht} onChange={(e)=>setht(e.target.value)} />
      </div>
      <div>
        <label >Weight(Kg) </label>
        <input type="number" value={wt} onChange={(e)=>setwt(e.target.value)} />
      </div>
      <div>
        <label >Gender(M/F) </label>
        <select value={gen} onChange={(e)=>setgen(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="FEmale"> Female</option>
        </select>
      </div>
      <button type='submit'>Calculate BMI</button>
    </form>
  </div>
  <div className="wrapper">
    <img src="/bmi.jpg" alt="" />
  </div>
</div>

    </section>
    </>
  )
}

export default Bmicalc
