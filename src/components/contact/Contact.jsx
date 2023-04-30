import React from "react"
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

{/*GETTING THE FORM TO SEND EMAILS*/}
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0mu5imv', 'template_a4f941y', form.current, 'vhll347gvA7NCm4jw').then((result) => {console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    {/*EMAIL*/}
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>josephnicotoledo@gmail.com</h5>
                        <a href="mailto:josephnicotoledo@gmail.com" targets='_blank'>Send A Message</a>
                    </article>
                    {/*LINKEDIN*/}
                    <article className="contact_option">
                        <BsLinkedin className="contact_option-icon"/>
                        <h4>LinkedIn</h4>
                        <h5>Joseph Toledo</h5>
                        <a href="https://www.linkedin.com/in/joseph-toledo-9773b1272/" targets='_blank'>Send A Message</a>
                    </article>
                    {/*GITHUB*/}
                    <article className="contact_option">
                        <BsGithub className="contact_option-icon"/>
                        <h4>Github</h4>
                        <h5>JosephNToledo</h5>
                        <a href="https://github.com/JosephNToledo" targets='_blank'>Send A Message</a>
                    </article>
                </div>
                {/*END OF CONTACT OPTIONS*/}   
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required/>
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>     
            </div>
        </section>
    )
}

export default Contact