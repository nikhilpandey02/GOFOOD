import React from 'react'
import {Carousel} from "react-responsive-carousel"
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Services = () => {
  return (
    <div className='services'>
        <Carousel infiniteLoop autoPlay>
            <div>
                <img src={img1} alt='item'/>
           <p className='legend'>Full stsck</p>
            </div>
            <div>
                <img src={img2} alt='item'/>
           <p>Full form</p>
            </div>
        </Carousel>
      
    </div>
  )
}

export default Services
