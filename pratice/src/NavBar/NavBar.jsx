import React, { useEffect, useState } from 'react'
import { Button } from '../Button/Button'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import image from './../public/images/icon.png'


const NavBar = () => {


const [a, setA]= useState('bg-white')

const [data, setData] = useState()


useEffect(()=> {
console.log("here it is!!")
},[])









  return (
    <div  className={`flex justify-between items-center ${a} p-4`}>
        <div className=' flex  text-Black text-2xl font-bold mx-20 cursor-pointer'> 
        
          Bistro Bliss</div>
        <ul className='flex space-x-6'>

            <li><a href='#' className='text-Black text-lg rounded-full p-2 border-black text-black hover:bg-[#DBDFD0] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>Home</a></li>
            <li><a href='#' className='text-Black text-lg rounded-full p-2 border-black text-black hover:bg-[#DBDFD0] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>About</a></li>
            <li><a href='#' className='text-Black text-lg rounded-full p-2 border-black text-black hover:bg-[#DBDFD0] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>Menu</a></li>
            <li><a href='#' className='text-Black text-lg rounded-full p-2 border-black text-black hover:bg-[#DBDFD0] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>Pages</a></li>
            <li><a href='#' className='text-Black text-lg rounded-full p-2 border-black text-black hover:bg-[#DBDFD0] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>Contact</a></li>

        </ul>

        <Button name='Book a Table' setA={setA} />
        
    </div>

  )
}

export default NavBar
