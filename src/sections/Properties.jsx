import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FaBath, FaHeart, FaPlus, FaShareAlt, FaUserCircle, FaBed, FaMapMarkerAlt, FaVideo, FaCamera } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'

import area3 from '../assets/IMG3.jpg'
import area4 from '../assets/IMG4.jpg'
import area1 from '../assets/IMG1.jpg'
import area2 from '../assets/IMG2.jpg'
import area5 from '../assets/IMG3.jpg'

const Properties = () => {

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
      <section id='properties' className='lg:w-[90%] m-auto lg:px-20 px-6 py-20
      w-full flex flex-col justify-center items-start gap-10'>
        <div className='flex flex-col justify-center items-start gap-4 '>
          <h1 data-aos='zoom-in' className='text-red-500'> PROPERTIES / LAYOUTS</h1>
          <h1 data-aos='zoom-in' className='text-black text-4xl font-semibold'>
            Explore the latest
          </h1>
        </div>

        {/*property grid starts from here */}
        <div id='grid-box' className='w-full grid lg:grid-cols-3 grid-cols-1
        justify-center items-center gap-8 '>
          <div data-aos="zoom-in" data-aos-delay="200" className='bg-white rounded-xl w-full'>
            
            <div id='image-box' className='bg-cover bg-center h-[250px] rounded-xl p-4 
            flex flex-col justify-between items-end' style={{ backgroundImage: `url(${area3})` }}>
              
              <div id='top' className='flex justify-between items-end w-full'>
                <div><button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Featured</button></div>

                <div className='flex justify-between items-center gap-3'>
                  <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Sales
                  </button>

                  <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Active
                  </button>
                </div>
              </div>

              <div id='bottom' className='flex justify-between items-end w-full'>
                <div className='flex justify-start items-center gap-2'>
                  <FaMapMarkerAlt className='size-4 text-white' />
                  <h1 className='text-white'>CityView Estate,Apo</h1>
                </div>

                <div className='flex justify-center items-center gap-4'>
                  <FaVideo className='size-4 text-white' />
                  <FaCamera className='size-4 text-white' />
                </div>
              </div>
            </div>


            <div className='px-6 py-3 flex flex-col justify-center items-start gap-2 w-full'>
              <h1 className='text-xl text-black font-semibold'> Awesome Properties for sale </h1>
              <h1 className='text-2xl text-red-600 font-bold'># 220,000,000</h1>
              <p className='text-[15px]'>Beautiful, updated, ground level
                Co-op apartment in the middle of Abuja City
              </p>
              <div id='icons' className='flex justify-center items-start gap-4'>
                <div className='flex justify-center items-center gap-2'>
                  <FaBath className='size-5 text-red-400' />
                  <p className='text-[15px]'>3</p>
                </div>

                <div className='flex justify-center items-center gap-2'>
                  <FaBed className='size-5 text-red-400' />
                  <p className='text-[13px]'>4</p>
                </div>

                <div className='flex justify-center items-center gap-2'>
                  < MdSpaceDashboard className='size-5 text-red-400' />
                  <p className='text-[13px]'>250 sq ft</p>
                </div>
              </div>

              <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
                <div id='owner-info' className='flex justify-between items-center w-full mt-2'>
                  <div className='flex justify-center items-center gap-2'>
                    <FaUserCircle className='size-5 text-red-400' />
                    <h1>EEN Properties</h1>
                  </div>

                  <div className='flex justify-center items-center gap-4'>
                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaShareAlt className='size-4 text-red-400' />
                    </div>

                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaHeart className='size-4 text-red-400' />
                    </div>

                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaPlus className='size-4 text-red-400' />
                    </div>
                  </div>
                </div>
              

            </div>

          </div>


          {/*2 */}
          <div data-aos="zoom-in" data-aos-delay="200" className='bg-white rounded-xl w-full'>
            
            <div id='image-box' className='bg-cover bg-center h-[250px] rounded-xl p-4 
            flex flex-col justify-between items-end' style={{ backgroundImage: `url(${area4})` }}>
              
              <div id='top' className='flex justify-between items-end w-full'>
                <div><button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Featured</button></div>

                <div className='flex justify-between items-center gap-3'>
                  <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Sales
                  </button>

                  <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Active
                  </button>
                </div>
              </div>

              <div id='bottom' className='flex justify-between items-end w-full'>
                <div className='flex justify-start items-center gap-2'>
                  <FaMapMarkerAlt className='size-4 text-white' />
                  <h1 className='text-white'>CityView Estate,Apo</h1>
                </div>

                <div className='flex justify-center items-center gap-4'>
                  <FaVideo className='size-4 text-white' />
                  <FaCamera className='size-4 text-white' />
                </div>
              </div>
            </div>


            <div className='px-6 py-3 flex flex-col justify-center items-start gap-2 w-full'>
              <h1 className='text-xl text-black font-semibold'> Awesome Properties for sale </h1>
              <h1 className='text-2xl text-red-600 font-bold'># 200,000,000</h1>
              <p className=''>Beautiful, updated, ground level
                Co-op apartment in the middle of Abuja City
              </p>
              <div id='icons' className='flex justify-center items-start gap-4'>
                <div className='flex justify-center items-center gap-2'>
                  <FaBath className='size-5 text-red-400' />
                  <h1 className=''>3</h1>
                </div>

                <div className='flex justify-center items-center gap-2'>
                  <FaBed className='size-5 text-red-400' />
                  <h1 className=''>4</h1>
                </div>

                <div className='flex justify-center items-center gap-2'>
                  < MdSpaceDashboard className='size-5 text-red-400' />
                  <h1 className=''>250 sq ft</h1>
                </div>
              </div>

              <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
                <div id='owner-info' className='flex justify-between items-center w-full mt-2'>
                  <div className='flex justify-center items-center gap-2'>
                    <FaUserCircle className='size-5 text-red-400' />
                    <h1>EEN Properties</h1>
                  </div>

                  <div className='flex justify-center items-center gap-4'>
                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaShareAlt className='size-4 text-red-400' />
                    </div>

                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaHeart className='size-4 text-red-400' />
                    </div>

                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaPlus className='size-4 text-red-400' />
                    </div>
                  </div>
                </div>
              
            </div>
          </div> 


          {/* 3 */}
          <div data-aos="zoom-in" data-aos-delay="200" className='bg-white rounded-xl w-full'>
            
            <div id='image-box' className='bg-cover bg-center h-[250px] rounded-xl p-4 
            flex flex-col justify-between items-end' style={{ backgroundImage: `url(${area1})` }}>
              
              <div id='top' className='flex justify-between items-end w-full'>
                <div><button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Featured</button></div>

                <div className='flex justify-between items-center gap-3'>
                  <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Sales
                  </button>

                  <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Active
                  </button>
                </div>
              </div>

              <div id='bottom' className='flex justify-between items-end w-full'>
                <div className='flex justify-start items-center gap-2'>
                  <FaMapMarkerAlt className='size-4 text-white' />
                  <h1 className='text-white'>CityView Estate,Apo</h1>
                </div>

                <div className='flex justify-center items-center gap-4'>
                  <FaVideo className='size-4 text-white' />
                  <FaCamera className='size-4 text-white' />
                </div>
              </div>
            </div>


            <div className='px-6 py-3 flex flex-col justify-center items-start gap-2 w-full'>
              <h1 className='text-xl text-black font-semibold'> Awesome Properties for sale </h1>
              <h1 className='text-2xl text-red-600 font-bold'># 200,000,000</h1>
              <p className=''>Beautiful, updated, ground level
                Co-op apartment in the middle of Abuja City
              </p>
              <div id='icons' className='flex justify-center items-start gap-4'>
                <div className='flex justify-center items-center gap-2'>
                  <FaBath className='size-5 text-red-400' />
                  <h1 className=''>3</h1>
                </div>

                <div className='flex justify-center items-center gap-2'>
                  <FaBed className='size-5 text-red-400' />
                  <h1 className=''>4</h1>
                </div>

                <div className='flex justify-center items-center gap-2'>
                  < MdSpaceDashboard className='size-5 text-red-400' />
                  <h1 className=''>250 sq ft</h1>
                </div>
              </div>

              <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
                <div id='owner-info' className='flex justify-between items-center w-full mt-2'>
                  <div className='flex justify-center items-center gap-2'>
                    <FaUserCircle className='size-5 text-red-400' />
                    <h1>EEN Properties</h1>
                  </div>

                  <div className='flex justify-center items-center gap-4'>
                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaShareAlt className='size-4 text-red-400' />
                    </div>

                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaHeart className='size-4 text-red-400' />
                    </div>

                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaPlus className='size-4 text-red-400' />
                    </div>
                  </div>
                </div>
              
            </div>
          </div> 


            {/* 4 */}
            <div data-aos="zoom-in" data-aos-delay="200" className='bg-white rounded-xl w-full'>
            
            <div id='image-box' className='bg-cover bg-center h-[250px] rounded-xl p-4 
            flex flex-col justify-between items-end' style={{ backgroundImage: `url(${area2})` }}>
              
              <div id='top' className='flex justify-between items-end w-full'>
                <div><button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Featured</button></div>

                <div className='flex justify-between items-center gap-3'>
                  <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Sales
                  </button>

                  <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Active
                  </button>
                </div>
              </div>

              <div id='bottom' className='flex justify-between items-end w-full'>
                <div className='flex justify-start items-center gap-2'>
                  <FaMapMarkerAlt className='size-4 text-white' />
                  <h1 className='text-white'>CityView Estate,Apo</h1>
                </div>

                <div className='flex justify-center items-center gap-4'>
                  <FaVideo className='size-4 text-white' />
                  <FaCamera className='size-4 text-white' />
                </div>
              </div>
            </div>


            <div className='px-6 py-3 flex flex-col justify-center items-start gap-2 w-full'>
              <h1 className='text-xl text-black font-semibold'> Awesome Properties for sale </h1>
              <h1 className='text-2xl text-red-600 font-bold'># 200,000,000</h1>
              <p className=''>Beautiful, updated, ground level
                Co-op apartment in the middle of Abuja City
              </p>
              <div id='icons' className='flex justify-center items-start gap-4'>
                <div className='flex justify-center items-center gap-2'>
                  <FaBath className='size-5 text-red-400' />
                  <h1 className=''>3</h1>
                </div>

                <div className='flex justify-center items-center gap-2'>
                  <FaBed className='size-5 text-red-400' />
                  <h1 className=''>4</h1>
                </div>

                <div className='flex justify-center items-center gap-2'>
                  < MdSpaceDashboard className='size-5 text-red-400' />
                  <h1 className=''>250 sq ft</h1>
                </div>
              </div>

              <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
                <div id='owner-info' className='flex justify-between items-center w-full mt-2'>
                  <div className='flex justify-center items-center gap-2'>
                    <FaUserCircle className='size-5 text-red-400' />
                    <h1>EEN Properties</h1>
                  </div>

                  <div className='flex justify-center items-center gap-4'>
                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaShareAlt className='size-4 text-red-400' />
                    </div>

                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaHeart className='size-4 text-red-400' />
                    </div>

                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaPlus className='size-4 text-red-400' />
                    </div>
                  </div>
                </div>
              
            </div>
          </div> 

            {/* 5 */}
            <div data-aos="zoom-in" data-aos-delay="200" className='bg-white rounded-xl w-full'>
            
            <div id='image-box' className='bg-cover bg-center h-[250px] rounded-xl p-4 
            flex flex-col justify-between items-end' style={{ backgroundImage: `url(${area5})` }}>
              
              <div id='top' className='flex justify-between items-end w-full'>
                <div><button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Featured</button></div>

                <div className='flex justify-between items-center gap-3'>
                  <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Sales
                  </button>

                  <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black
             text-white rounded-4xl text-[13px] '>Active
                  </button>
                </div>
              </div>

              <div id='bottom' className='flex justify-between items-end w-full'>
                <div className='flex justify-start items-center gap-2'>
                  <FaMapMarkerAlt className='size-4 text-white' />
                  <h1 className='text-white'>CityView Estate,Apo</h1>
                </div>

                <div className='flex justify-center items-center gap-4'>
                  <FaVideo className='size-4 text-white' />
                  <FaCamera className='size-4 text-white' />
                </div>
              </div>
            </div>


            <div className='px-6 py-3 flex flex-col justify-center items-start gap-2 w-full'>
              <h1 className='text-xl text-black font-semibold'> Awesome Properties for sale </h1>
              <h1 className='text-2xl text-red-600 font-bold'># 200,000,000</h1>
              <p className=''>Beautiful, updated, ground level
                Co-op apartment in the middle of Abuja City
              </p>
              <div id='icons' className='flex justify-center items-start gap-4'>
                <div className='flex justify-center items-center gap-2'>
                  <FaBath className='size-5 text-red-400' />
                  <h1 className=''>3</h1>
                </div>

                <div className='flex justify-center items-center gap-2'>
                  <FaBed className='size-5 text-red-400' />
                  <h1 className=''>4</h1>
                </div>

                <div className='flex justify-center items-center gap-2'>
                  < MdSpaceDashboard className='size-5 text-red-400' />
                  <h1 className=''>250 sq ft</h1>
                </div>
              </div>

              <div className='w-full h-[1px] bg-gray-200 mt-8'></div>
                <div id='owner-info' className='flex justify-between items-center w-full mt-2'>
                  <div className='flex justify-center items-center gap-2'>
                    <FaUserCircle className='size-5 text-red-400' />
                    <h1>EEN Properties</h1>
                  </div>

                  <div className='flex justify-center items-center gap-4'>
                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaShareAlt className='size-4 text-red-400' />
                    </div>

                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaHeart className='size-4 text-red-400' />
                    </div>

                    <div className='p-2 border-2 border-gray-20 hover:bg-black cursor-pointer transform
                   hover:scale-110 transition-transform duration-200'>
                      <FaPlus className='size-4 text-red-400' />
                    </div>
                  </div>
                </div>
              
            </div>
          </div> 

        </div>
      </section>
    </div>
  )
}

export default Properties