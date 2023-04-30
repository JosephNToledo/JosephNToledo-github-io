import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/joseph-toledo-9773b1272/" target="_blank"><BsLinkedin size = {28}/></a>
        <a href="https://github.com/JosephNToledo" target="_blank"><FaGithub size={28}/></a>
    </div>
  )
}

export default HeaderSocials