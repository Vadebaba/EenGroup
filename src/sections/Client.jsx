import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import heroimg from '../assets/heroimg.jpg'


const Client = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (

    <div className='bg-transparent'>
      <section id='testimonials' className='lg:w-[95%] w-full h-fit m-auto bg-cover bg-center
        rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-20'>
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 data-aos='zoom-in' className='text-red-500 '>FROM OUR CLIENTS</h1>
          <h1 data-aos='zoom-in' className='text-black text-[40px] font-semibold
          leadigng-10'>What our clients say <br />about us</h1>
        </div>

        <div id='clients-box' className="grid lg:grid-cols-3 grid-cols-1 justify-center  
           items-center gap-8 w-full">

          <div data-aos='zoom-in' data-aos-delay='200' className='bg-white hover:bg-red-100
            cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full '>
            <div className='flex justify-start items-center w-full gap-4'>
              <img src={heroimg} alt="heroimg" className='w-[70px] transorm hover:scale-110
              transition-transform duration-300 rounded-3xl'/>
              <div className='flex flex-col justify-center items-start gap-1'>
                <h1 className='text-xl text-black font-semibold'>Donald Trump</h1>
                <h1 className='text-slate-600'>Excellent Team</h1>
              </div>
            </div>
            <p className='text-md text-justify text-slate-600'>The CityGate Estate did an outsatanding job helping me buy my first property.
              The high level of service and dedication.
            </p>

            <div className='flex justify-start items-start gap-2 w-full'>
              <FaStar className='size-4 text-yellow-200' />
              <FaStar className='size-4 text-yellow-200' />
              <FaStar className='size-4 text-yellow-200' />
              <FaStar className='size-4 text-yellow-200' />
              <FaStar className='size-4 text-yellow-200' />
            </div>
          </div>

          <div data-aos='zoom-in' data-aos-delay='200' className='bg-white hover:bg-red-100
            cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full '>
            <div className='flex justify-start items-center w-full gap-4'>
              <img src={heroimg} alt="heroimg" className='w-[70px] transorm hover:scale-110
              transition-transform duration-300 rounded-3xl'/>
              <div className='flex flex-col justify-center items-start gap-1'>
                <h1 className='text-xl text-black font-semibold'>Anita Baker</h1>
                <h1 className='text-slate-600'>Very good work</h1>
              </div>
            </div>
            <p>The CityGate Estate did an outsatanding job helping me buy my first property.
              The high level of service and dedication.
            </p>

            <div className='flex justify-start items-start gap-2 w-full'>
              <FaStar className='size-4 text-yellow-200' />
              <FaStar className='size-4 text-yellow-200' />
              <FaStar className='size-4 text-yellow-200' />
              <FaStar className='size-4 text-yellow-200' />
              <FaStar className='size-4 text-yellow-200' />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Client