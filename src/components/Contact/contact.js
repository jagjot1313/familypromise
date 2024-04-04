import React, { useRef } from 'react';
import './contact.css';
import Email from "../../assets/GmailLogo.png";
import Linkdin from "../../assets/LinkedinLogo.png";
import Github from '../../assets/GithubLogo.png';
import LinkdinCont from '../../assets/LinkdinConnect.jpg'


const Contact = () => {

  return (
    <section id='contactPage'>
        
        <div id="Contact">
          <h1 className='ContactPageTitle'>Contact Me</h1>
          <span className='contactDesc'>Please fill out the details and I'll be in touch</span>
          <form className='contactForm' ref = {form} onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Please enter your Name' name='from_name'/>
            <input type="email" className='email' placeholder='Please enter your Email'email='your_email'/>
            <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <img src={LinkdinCont} alt="Linkdin" className='contactLink'/>
            <div className="links" >
              <img src={Email} alt="Gmail" className='link'/>
              <img src={Linkdin} alt="Linkdin" className='link'/>
              <img src={Github} alt="Github" className='link'/>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact;
