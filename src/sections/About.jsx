import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import aboutimg from '../assets/abt.jpg'


const About = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <section id='about' className='w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2
    grid-cols-1 justify-center items-center gap-10'>
      <div>
        <img data-aos="zoom-in" src={aboutimg} alt="aboutimg" className="rounded-2xl
  lg:w-[500px] lg:h-[600px]"/>
      </div>

      <div className='flex flex-col justify-center items-start gap-8'>
        <h1 data-aos="zoom-in" className='text-red-500 font-semibold'>WHO WE ARE</h1>
        <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[40px] 
        font-semibold leading-10'>
          Lorem ipsum dolor sit amet consectetur elit.
        </h1>
        <p data-aos="zoom-in" data-aos-delay="400" className='text-xl text-gray-600 text-justify'>
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Reprehenderit saepe cum itaque ea
          harum consequuntu porro fugit eveniet esse.</p>
        <button className='bg-yellow-600 hover:bg-black text-lg p-4 
            text-white font-semibold transform hover:scale-110 transition-transform duration-300'>
          READ MORE</button>
      </div>
    </section>
  )
}

export default About