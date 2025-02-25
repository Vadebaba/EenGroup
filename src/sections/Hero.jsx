import heroimg from '../assets/heroimg.jpg'
//import hero2 from '../assets/IMG2.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


import { Link } from "react-scroll"
import { FaXmark, FaBars } from "react-icons/fa6"
import logo from '../assets/een_logo.png'
import { FaPhoneAlt } from "react-icons/fa"
import { useState } from "react"


const Hero = () => {


  // Add navigation bar and header component here
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navItems = [
    { name: "Home", link: "Home", path: "Home" },
    { name: "About Us", link: "About Us", path: "About Us" },
    { name: "Properties", link: "Properties", path: "Properties" },
    { name: "Services", link: "Services", path: "Services" },
    { name: "Testimonials", link: "Testimonials", path: "Testimonials" },
    { name: "Contact", link: "Contact", path: "Contact" },
  ]



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
        <section id='hero' className=' h-[650px] m-auto bg-cover bg-center flex justify-center
       flex-col items-start px-4 lg:px-28 gap-7 z-20' style={{ backgroundImage: `url(${heroimg})` }}>



          <nav className=" mb-[11rem] lg:pb-[16rem] flex justify-between items-center gap-59 lg:px-20  py-3 sticky top-0 z-30">
            <div id="logo" className=" rounded-full bg-white">
              <img src={logo} alt="company logo" className="lg:w-[120px] w-[70px]" />
            </div>

            <ul className="lg:flex justify-center items-center gap-8 hidden">
              {navItems.map(({ link, path }) => (
                <Link key={path} className=" text-slate-300 w-[70px] text-[15px] font-semibold
                 cursor-pointer rounded-lg hover:text-white"
                  to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
              ))}
            </ul>

            {/*mobile view starts here */}
            <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
              <div>
                {isMenuOpen ? <FaXmark className="text-black text-2xl cursor-pointer " /> :
                  <FaBars className="text-black text-2xl cursor-pointer " />}
              </div>
            </div>

            <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 
      absolute top-[80px] left-0`} onClick={closeMenu}>
              <ul className="flex flex-col justify-center items-center gap-2 w-full">
                {navItems.map(({ link, path }) => (
                  <Link key={path} className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg
            hover:bg-red-600 hover:text-black w-full text-center"
                    to={path} spy={true} offset={-100} smooth={true}>
                    {link}</Link>

                ))}
              </ul>
            </div>
            {/**  <div className="flex justify-center items-center lg:gap-8 gap-2">
              <div className="flex justify-center items-baseline lg:gap-3 gap-1">
                <FaPhoneAlt className="text-yellow-500 size-5" />
                <h1 className="text-black text-sm font-semibold lg:text-xl">+1 800 555 5555</h1>
              </div>
            </div>*/}
          </nav>


          <h2 className="text-black font-semibold">SUSTAINABILITY</h2>
          <h1 data-aos='zoom-in' className='text-5xl text-black font-semibold lg:pr-[500px]
            pr-0 lg:leading-[70px] leading-[60px]'>
            The EEN Group
          </h1>
          <p className='text-xl text-black  font-semibold lg:pr-[500px] pr-0'>
            EEN Group is all about creating ventures thatt serves the interest of stakeholders, communities and the
            people concerned. We believe in establishing inpactful businesses that are socially
            responsible to cater for peoples needs.
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