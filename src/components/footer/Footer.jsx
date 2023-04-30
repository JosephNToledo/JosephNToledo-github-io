import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'



const Footer = () => {
  return ( 
    <footer>
      <a href='#' className='footer_logo'>Joseph Toledo</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/joseph.toledo.79"><FaFacebookF/></a>
        <a href="https://www.instagram.com/toledough/?hl=en"><FiInstagram/></a>
        <a href="https://twitter.com/Toledough"><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Joseph Toledo. All rights reserved.</small>
      </div>
    </footer>
  )
}  

export default Footer