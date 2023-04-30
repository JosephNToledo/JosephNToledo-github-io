import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
{/*First card in about section*/}
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Hardworking</h5>
              <small>Ready to Learn</small>
            </article>
{/*Second card in about section*/}
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Network</h5>
              <small>Contact Me!</small>
            </article>
{/*Third card in about section*/}
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>Check out what I'm working on next</small>
            </article>
          </div>

          <p>Hey I'm Joseph Toledo, a graduate from OntarioTech University. I have a Bachelor's Degree in Biological Sciences - Life Sciences with a minor in Chemistry. 
            While my background may be in biology, my passion for technology and programming have pushed me to pursue a career in the tech industry. I'm an aspiring entry
            level web developer looking to take on a variety of new roles in my pursuit of knowledge. If you have any opportunities that I can apply to, send me a message
            by using my contact section below or through my socials.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About