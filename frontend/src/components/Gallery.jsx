import React from 'react'

function Gallery() {
  const gallery=["/img2.jpg","/img3.jpg","/img4.jpg","/img5.jpg","/img6.jpg","/img7.jpg","/img8.jpg"]
  return (
   <section className='gallery'>
<h1>Better Can Beat the Best</h1>
<div className="images">
  <div>
    {
      gallery.slice(0,3).map((element,index)=>(
  <img key={index} src={element} alt="" />    
      ))
    }
  </div>
  <div>
    {
      gallery.slice(2,5).map((element,index)=>(
  <img key={index} src={element} alt="" />    
      ))
    }
  </div>
  <div>
    {
      gallery.slice(5,7).map((element,index)=>(
  <img key={index} src={element} alt="" />    
      ))
    }
  </div>
</div>

   </section>
  )
}

export default Gallery
