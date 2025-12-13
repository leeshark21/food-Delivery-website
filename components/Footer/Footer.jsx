import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit optio aspernatur et totam explicabo perspiciatis minus aperiam maxime, nobis quidem commodi officia numquam voluptatum facilis laboriosam adipisci blanditiis delectus.</p>
                <div className="footer-socail-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                    
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-234-345-567</li>
                    <li>conFEC@tomamto.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='foot-copyright'>Copyright 2025  c tomato.com - All ROght Reserved.</p>

      
    </div>
  )
}

export default Footer
