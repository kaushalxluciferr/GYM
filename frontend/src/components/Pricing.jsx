import React from 'react'
import { Check } from 'lucide-react'
import {Link} from "react-router-dom"
function Pricing() {
const pricing=[
  {
    imgUrl:"pricing.jpg",
    title:"QUARTERLY",
    price:18000,
    length:3,
    },
    {
      imgUrl:"pricing.jpg",
      title:"HALF_YEARLY",
      price:30000,
      length:6,
      },
      {
        imgUrl:"pricing.jpg",
        title:"YEARLY",
        price:60000,
        length:12,
        }
]

  return (
    <div>
      <section className='pricing'>
        <h1>Our Fitness Plans</h1>
        <div className="wrapper">
          {
            pricing.map(element=>{
              return(
                <div className='card' key={element.title}>
                  <img src={element.imgUrl} alt="" />
                  <div className="title">
                    <h1>{element.title}</h1>
                    <h1>PAckage</h1>
                    <h3>RS:{element.price}</h3>
                    <p style={{color:"green"}}>For: {element.length} Months</p>
                  </div>
                  <div className="description">
                 <p> <Check/> Equipment  </p>
                 <p> <Check/> All Day Free Training  </p>
                 <p> <Check/> Free Restroom  </p>
                 <p> <Check/> 24/7 Support  </p>
                 <p> <Check/> 20 days Freezing Option  </p>
                 <Link to={"/"}> Join Now</Link>
                 
                  </div>
                </div>
              )
            })
          }

        </div>
      </section>
      
    </div>
  )
}

export default Pricing
