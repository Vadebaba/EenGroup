import heroimg from '../assets/heroimg.jpg'
//import hero2 from '../assets/IMG2.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <>
      <div>
        {/** Slide 1 */}
        <section id='hero' className='w-[90%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center
       flex-col items-start lg:px-28 px-10 pr-10 gap-7 z-20' style={{ backgroundImage: `url(${heroimg})` }}>

          <h1 data-aos='zoom-in' className='text-6xl text-white font-semibold lg:pr-[500px]
            pr-0 lg:leading-[70px] leading-[60px]'>
            Once you choose EEN anything is Possible...
          </h1>
          <p data-aos='zoom-in' className='text-xl text-white lg:pr-[500px] pr-0'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit,
            Suscipit eos recusandae expedita ven.
          </p>
        </section>

        {/** Slide 2 
        <section id='hero' className=' slide w-[90%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center
       flex-col items-start lg:px-28 px-10 pr-10 gap-7 z-20' style={{ backgroundImage: `url(${hero2})` }}>

          <h1 data-aos='zoom-in' className='text-6xl text-white font-semibold lg:pr-[500px]
            pr-0 lg:leading-[70px] leading-[60px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <p data-aos='zoom-in' className='text-xl text-white lg:pr-[500px] pr-0'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit,
            Suscipit eos recusandae expedita ven.
          </p>
        </section>*/}
      </div>

      <div>
        <div data-aos="zoom-in" id='form' className=' slide lg:w-[70%] w-full m-auto grid lg:grid-cols-4
         grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14 bg-white'>

          <div className='w-full '>
            <h1 className='text-black font-semibold'>LOCATION</h1>
            <input type="text" placeholder='Enter an address, state or city'
              className='bg-white p-2 w-full border-b-[1px] border-[#c9c7c1]' />
          </div>

          <div className='w-full '>
            <h1 className='text-black font-semibold'>TYPE</h1>
            <select name="selectOption" id="selectOption" className='border-b-[1px]
          mt-2 bg-white p-2 w-full border-[#c9c7c1] text-gray-500 text:md'>
              <option value="" disabled selected > Select Properties</option>
              <option value="Option1">EEN Cityview Residence, Katampe Extention</option>
              <option value="Option2">EEN Grand City, Kuje</option>
              <option value="Option3">EEN Hilcrest City, Asokoro Hiltop, FCT Abuja</option>
              <option value="Option4">EEN Promise Land, Kuje, FCT Abuja</option>
              <option value="Option5">EEN Golden Paradise Estate, Apo, FCT Abuja</option>
            </select>
          </div>


          <div className='w-full '>
            <h1 className='text-black font-semibold'>CATEGORY</h1>
            <select name="selectOption" id="selectOption" className='border-b-[1px]
          mt-2 bg-white p-2 w-full border-[#c9c7c1] text-gray-500 text:md'>
              <option value="" disabled selected > Select Property</option>
              <option value="Option1">Apartment</option>
              <option value="Option2">Duplex</option>
              <option value="Option3">Condos</option>
              <option value="Option3">Condos</option>
              <option value="Option3">Condos</option>
            </select>
          </div>

          <div className='w-full'>
            <button className='bg-yellow-600 hover:bg-black text-lg p-4 w-full rounded-xl
            text-white font-semibold transform hover:scale-110 transition-transform duration-300
            '>SEARCH</button>

          </div>

        </div>
      </div>


    </>
  )
}

export default Hero