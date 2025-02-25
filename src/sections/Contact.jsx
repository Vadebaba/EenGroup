import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Contact = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <div className='bg:transparent pb-20'>
      <section id='contact' className="bg-red-100 lg:w-[95%] w-full h-fit 
      m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36
      px-6 py-20 gap-10 ">
        <div data-aos='zoom-in' className="bg-white p-10 flex flex-col justify-center items-start
        gap-4 rounded-xl">
          <h1 className='text-2xl text-black font-semibold'>Send us a message today</h1>
          <input type="text" placeholder='Enter your full name here' className='w-full px-6 py-3
       border-2 border-gray-200 rounded-xl' />
          <input type="email" placeholder='Enter a valid email' className='w-full px-6 py-3
       border-2 border-gray-200 rounded-xl' />
          <input type="number" placeholder='Enter your valid mobile number' className='w-full px-6 py-3
       border-2 border-gray-200 rounded-xl' />
          <textarea name="" id="" cols='30' rows='5' className='w-full px-6 py-3
       border-2 border-gray-200 rounded-xl'>Enter your message here...</textarea>
          <button className='bg-blue-950 w-full text-md px-8 py-3 text-white font-semibold rounded-xl
       hover:bg-black cursor-pointer' >Send Email</button>
        </div>

        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1 data-aos='zoom-in' data-aos-delay='200' className='text-red-500
          '>REACH US</h1>
          <h1 data-aos='zoom-in' data-aos-delay='400' className='text-black text-[40px] font-semibold
          leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing. </h1>
          <p data-aos='zoom-in' data-aos-delay='600' className='text-xl text-gray-600
          text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere similique 
          quis sapiente quam reprehenderit deserunt quae illo aut debitis voluptatum
           ullam, ducimus odio ea placeat, ab doloribus veniam Impedit.</p>

          <button className='bg-blue-950 text-md px-8 py-3 text-white
          font-semibold rounded-xl hover:bg:black cursor-pointer' >SEND EMAIL</button>
        </div>


      </section>
    </div>
  )
}

export default Contact