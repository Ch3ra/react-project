import React from 'react'

export const Button = (props) => {
  return (
    <>
    <button onClick={()=> props.setA("bg-red-500")} className='rounded-full p-3  border-black text-black hover:bg-[#AD343E] hover:text-white border-2 '>{props.name}</button>
    </>
  )
}
