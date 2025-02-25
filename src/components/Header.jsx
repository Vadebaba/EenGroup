import { Link } from "react-scroll"
import { FaXmark, FaBars } from "react-icons/fa6"
import logo from '../assets/een_logo.png'
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa"
import { useState } from "react"

const Header = () => {

  // Add navigation bar and header component here
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navItems = [
    { name: "Home", link: "home", path: "home" },
    { name: "About Us", link: "about", path: "about" },
    { name: "Properties", link: "properties", path: "properties" },
    { name: "Services", link: "services", path: "services" },
    { name: "Testimonials", link: "testimonials", path: "testimonials" },
    { name: "Contact", link: "contact", path: "contact" },
  ]

  return (
    <nav className="bg-[#f3f3f3] flex justify-between items-center 
        gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30">
      <div id="logo" className="">
        <img src={logo} alt="company logo" className="lg:w-[120px] w-[120px] dark:invert" />
      </div>

      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems.map(({ link, path }) => (
          <Link key={path} className=" text-black text-[15px] uppercase font-semibold
         cursor-pointer px-3 py-2 rounded-lg hover:bg-red-600 hover:text-white"
            to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>

      {/*mobile view starts here */}
      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className="text-black text-2xl cursor-pointer" /> :
            <FaBars className="text-black text-2xl cursor-pointer" />}
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
      <div className="flex justify-center items-center lg:gap-8 gap-2">
        <div className="flex justify-center items-baseline lg:gap-3 gap-1">
          <FaPhoneAlt className="text-yellow-500 size-5" />
          <h1 className="text-black text-sm font-semibold lg:text-xl">+1 800 555 5555</h1>
        </div>
        <FaUserCircle className="size-6 text-yellow-500" />
      </div>
    </nav>
  )
}

export default Header