import React from 'react'
import '../styles/Testimonial.css'

const Testimonial = (props) => {
  return (
    <div className='testimonial-container'>
      <img
        src={props.image}
        alt={`${props.name} photo`}
        className='testimonial-image'
      />
      <div className='text-testimonial-container'>
        <p className='testimonial-name'><strong>{props.name}</strong> en <strong>{props.country}</strong></p>
        <p className='testimonial-job'><strong>{props.job}</strong> en <strong>{props.company}</strong></p>
        <p className='textimonial-text'>
          {props.testimonial}
        </p>
      </div>
    </div>
  )
}

export default Testimonial