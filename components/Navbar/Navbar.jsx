import React, { useState, useContext } from 'react'
import '../Navbar/Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu,setMenu] = useState("Home")
  const { cardItems = {} } = useContext(StoreContext)
  const totalCount = Object.values(cardItems).reduce((s, v) => s + (Number(v) || 0), 0)


  return (
    <div className='Navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="Navbar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#appdownload' onClick={() => setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
      </ul>
      <div className="Navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className='Navbar-search-icon'>
          <Link to='/Card'>
            <img src={assets.basket_icon} alt="" />
          </Link>
          {totalCount > 0 && (
            <div className="Dot">{totalCount > 99 ? '99+' : totalCount}</div>
          )}
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
