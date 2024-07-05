import React from 'react'
import women from "./../../public/images/women.png";

const Customer = (props) => {
  return (
    <div className='w-[350px] h-[300px] bg-[#F9F9F7] rounded-lg py-5'>
        <div className='w-[300px] h-[250px] mx-5 '>
            <p className='font-bold text-xl text-[#AD343E]  mb-5'>{props.name}</p>
            <p>{props.description}</p>
           <br/>
          
           <br/>
            <hr/>
            <div className='w-[200px] h-[70px] mt-3 flex space-x-2'>
                <div  className='w-[70px] h-[70px] ml-2 mb-2'><img src={props.smimage}alt="" /></div>
                <div className='mt-3'>
                    <p>{props.cName}</p>
                    <p> {props.Address}</p>
                </div>


            </div>

        </div>

    </div>
  )
}

export default Customer