
import sec from "./../../public/images/sec.png";
import cattering from "./../../public/images/catering.png";

import React from 'react'

const Footer = () => {
  return (
    <div className='footer bg-[#474747]  w-[1400px] h-[600px] flex justify-center items-center'>
      <div className='w-[1100px] h-[400px] flex mb-20'>
      <div className='w-[300px] h-[400px] '>
        <div className=''>
          <p className='text-xl text-white'>Bistro Bliss</p>
          <p className='text-[#ADB29E] mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dicta in vitae autem, suscipit quos!</p> 
          {/* <FontAwesomeIcon className="text-[12px] text-white" icon={faPhone} /> */}
          
        </div>
        


      </div>
      <div className='w-[350px] h-[400px] text-white ml-8  flex space-x-[150px]'>
<div className=''>
        <p className='text-xl'>Pages</p>
        <div className='text-[#ADB29E] mt-3 space-y-4'>
        <p>Home </p>
        <p>Menu</p>
        <p>Pricing</p>
        <p>Blog</p>
        <p>Contat</p>
        <p>Delivery</p>
        <p>About</p>
        </div>
        </div>


      

      <div className=''>
        <p className='text-xl'>Utility Pages</p>
        <div className='text-[#ADB29E] mt-3 space-y-4'>
        <p>Start here</p>
        <p>Style guide</p>
        <p>P Protected</p>
        <p>404 Not Found</p>
        <p>Licenses</p>
        <p>changelog</p>
        <p>View More</p>
        </div>
        </div>
        
      </div>

      <div className='3rd w-[500px] h-[450px] ml-7 text-white '>
        <p className='text-xl mb-3'> Follow me on Instagram</p>
        <div className='flex flex-wrap space-x-3'>
          <div className=''>
        <div className='h-[200px] w-[200px]'> <img src={cattering} alt="" /></div>
        <div className='h-[200px] w-[200px] mt-3 '><img src={cattering} alt="" /></div>
        </div>
        <div className=''>
        <div className='h-[200px] w-[200px]'><img src={cattering} alt="" /></div>
        <div className='h-[200px] w-[200px] mt-3'><img src={cattering} alt="" /></div>
        </div>
        </div>
      </div>



      </div>
      
 
      
      
      

    </div>
  )
}

export default Footer