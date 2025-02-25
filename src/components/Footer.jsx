import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FaArrowUp, FaBuilding, FaFacebookF, FaFax, FaInstagram, FaMobile, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

import prop7 from '../assets/heroimg.jpg'
import prop8 from '../assets/heroimg.jpg'

const Footer = () => {

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
      <footer className='bg-gray-800 w-full m-auto lg:px-20 px-10 py-20 grid 
        lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 and gap-10'>
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-2xl font-semibold text-white">About Us</h1>
          <p className='text-slate-200 text-justify'>Lorem, ipsum dolor sit Optio facilis amet quis,
            labore nostrum similique doloremque temporibus reprehenderit
            ipsa nisi ad quibusdam mollitia, quam, rerum omnis dignissimos consectetur quasi vero.
          </p>
          <div id='social-icons' className='flex justify-start items-center gap-4 mt-4'>

            <div className="p-3 rounded-xl bg-white hover:bg-blue-950 hover:text-white
             cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaFacebookF className='size-5' />
            </div>

            <div className="p-3 rounded-xl bg-white hover:bg-blue-950 hover:text-white
             cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaInstagram className='size-5' />
            </div>

            <div className="p-3 rounded-xl bg-white hover:bg-blue-950 hover:text-white
             cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaTwitter className='size-5' />
            </div>

            <div className="p-3 rounded-xl bg-white hover:bg-blue-950 hover:text-white
             cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <FaYoutube className='size-5' />
            </div>
          </div>

          <h1 className='text-white mt-8'>Copyright EEN Group, All Rights Reserved.</h1>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
          <div className='flex justify-center items-center gap-3'>
            <FaBuilding className='text-white size-5' />
            <p className='text-slate-200'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <FaMobile className='text-white size-5' />
            <p className='text-slate-200'>+234 567 664 8833</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <FaFax className='text-white size-5' />
            <p className='text-slate-200'>3344 76820</p>
          </div>

          <div className='flex justify-center items-center gap-3'>
            <IoMdMail className='text-white size-5' />
            <p className='text-slate-200'>eengroup@gmail.com</p>
          </div>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop7} alt="" className='w-[120px] rounded-lg transform hover:scale-110
             cursor-pointer transition-transform duration-300' />
            <div>
              <h1 className='text-lg text-white'>Villa with amazing view</h1>
              <p className='text-slate-400'># 340,000.67</p>
            </div>
          </div>

          <div className='flex justify-center items-center gap-4'>
            <img src={prop8} alt="" className='w-[120px] rounded-lg transform hover:scale-110
             cursor-pointer transition-transform duration-300' />
            <div>
              <h1 className='text-lg text-white'>Smart view from the beach</h1>
              <p className='text-slate-400'># 400,000.67</p>
            </div>
          </div>
        </div>
      </footer>

      {/*slide to top buton */}
      <div id='icon-box' className='fixed rounded-xl bottom-4 right-4 p-3 bg-blue-950 text-white cursor-pointer hover:bg-blue-800 transition-all duration-300'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FaArrowUp className='size-4' />
      </div>
    </>
  )
}

export default Footer;