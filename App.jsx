import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Card from './pages/Card/Card'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'


const App = () => {
   
  const [showLogin , setShowLogin] = useState(false);
  return (
    <>
    {
      showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>
    }
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>



      </div>
      <Footer />
    </>
  )
}

export default App
