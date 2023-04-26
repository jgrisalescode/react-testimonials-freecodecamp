import React from 'react'
import '../styles/Testimonial.css'

const Testimonial = () => {
  return (
    <div className='testimonial-container'>
      <img
        src='../src/assets/images/testimonial-emma.png'
        alt='Emma photo'
        className='testimonial-image'
      />
      <div className='text-testimonial-container'>
        <p className='testimonial-name'>Emma Bostian en Suecia</p>
        <p className='testimonial-job'>Ingeniera de Software en Spotify</p>
        <p className='textimonial-text'>
          "Siempre me ha costado aprender JavaScript. He hecho muchos cursos, pero el de freeCodeCamp fue el que se me quedó grabado. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
        </p>
      </div>
    </div>
  )
}

export default Testimonial