import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Card = (props) => {
  return (
    <div className='w-[250px] h-[450x] rounded-[12px] border-2 border-[#DBDFD0]'>
        <div className='flex justify-center mt-8'>
        <div className='flex justify-center items-center bg-[#4D592B]/10 h-24 w-24 rounded-full'>
        <FontAwesomeIcon className='text-4xl' icon={props.MenuIcon} />
        </div>
        </div>
        <p className='text-[30px] font-bold text-center  mt-10'>{props.CardName}</p>
        <p className='text-center text-[#414536] mt-8 py-2'>{props.CardDescription}</p>
        <div className='mt-10 flex justify-center'>
        <span className='text-[#AD343E] font-bold cursor-pointer mb-4 '> {props.Span}</span>
        </div>
    </div>


    )
}

export default Card