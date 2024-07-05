import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Card from './Card/Card'
import ServiceCard from './ServiceCard/ServiceCard'
import Customer from './CustomerSay/Customer'
import Footer from './Footer/Footer'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/customer' element={<Customer/>}/>
      <Route path='/footer' element={<Footer/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App