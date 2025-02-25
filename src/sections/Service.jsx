import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Service = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <div className="bg-transparent pb-20">
      <section id='services' className='bg-red-100 lg:w-[95%] 
        w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start 
        lg:px-20 px-6 py-20 gap-10'>


        <div id='service-box' className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>

          <div data-aos='zoom-in' data-aos-delay='200' className='bg-white h-[350px] px-8 py-16 
              flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] hover:bg-red-300 cursor-pointer'>
            <div className="p-6 rounded-full bg-red-200">
              <div className='text-red-600 size-10 transform hover:scale-110 transition-transform
                duration-300 cursor-pointer'>AA
              </div>
            </div>
            <h1 className='text-black text-[22px] font-semibold '>Sell your home</h1>
            <p className='text-lg text-slate-700 '>We sell your house at the best market price</p>
            <button className='border-b-2 border-red-600 text-red-600 
               font-semibold p-0'>READ MORE
            </button>
          </div>

          <div data-aos='zoom-in' data-aos-delay='200' className='bg-white h-[350px] px-8 py-16 
              flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] hover:bg-red-300 cursor-pointer'>
            <div className="p-6 rounded-full bg-red-200">
              <div className='text-red-600 size-10 transform hover:scale-110 transition-transform
                duration-300 cursor-pointer'>AA
              </div>
            </div>
            <h1 className='text-black text-[22px] font-semibold '>Home loans</h1>
            <p className='text-lg text-slate-700 '>We offer you free consultancy to get a loan</p>
            <button className='border-b-2 border-red-600 text-red-600 
               font-semibold p-0'>READ MORE
            </button>
          </div>

          <div data-aos='zoom-in' data-aos-delay='200' className='bg-white h-[350px] px-8 py-16 
              flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] hover:bg-red-300 cursor-pointer'>
            <div className="p-6 rounded-full bg-red-200">
              <div className='text-red-600 size-10 transform hover:scale-110 transition-transform
                duration-300 cursor-pointer'>AA
              </div>
            </div>
            <h1 className='text-black text-[22px] font-semibold '>Home Inspection</h1>
            <p className='text-lg text-slate-700 '>We make sure you get what you were promised</p>
            <button className='border-b-2 border-red-600 text-red-600 
               font-semibold p-0'>READ MORE
            </button>
          </div>
        </div>
    

      </section >
    </div >
  )
}

export default Service