import './App.css'
import emma from './images/testimonial-emma.png'
import sahra from './images/testimonial-sahra.png'
import shawn from './images/testimonial-shawn.png'
import Testimonial from './components/Testimonial'

function App() {
  return (
    <div className='App'>
      <div className='main-contianer'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonial
          name='Shawn Wang'
          country='Singapore'
          job='Ingeniero de Software'
          company='Amazon'
          image={shawn}
          testimonial='"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
        />

        <Testimonial
          name='Sarah Chima'
          country='Nigeria'
          job='Ingeniera de Software'
          company='ChatDesk'
          image={sahra}
          testimonial='"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."'
        />

        <Testimonial
          name='Emma Bostian'
          country='Suecia'
          job='Ingeniera de Software'
          company='Spotify'
          image={emma}
          testimonial='"Siempre me ha costado aprender JavaScript. He hecho muchos cursos, pero el de freeCodeCamp fue el que se me quedó grabado. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'
        />
      </div>
    </div>
  )
}

export default App
