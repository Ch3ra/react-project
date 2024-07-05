import React from 'react'
import catering from './../../public/images/catering.png'
const ServiceCard = (props) => {
  return (
    <div>
         <div className='w-[250px] h-[400px] rounded-[12px] mt-10 '>
            <div  className='h-[300px] w-[248px] rounded-md'><img src={props.scimage} alt="" /></div>
            <p className='font-bold mt-5 ml-2'> {props.name}</p>
            <p className=' mt-3 text-[#414536] ml-2'>{props.description} </p>

         </div>
    </div>
  )
}

export default ServiceCard