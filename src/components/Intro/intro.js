import React from 'react';
import './intro.css';
import fp from '../../assets/familypromise1.png'
//import bg from '../../assets/test2.gif';
import {Link} from 'react-scroll';
import contactus from '../../assets/contactus.png';

const intro = () => {
  return (
     <section id="intro">
        <div className='introContent'>
            <span className="introName">Zapper,</span>
            <span className="hello">A fantastic tool to help predict homelessness<span className="introName"></span>
            <br/></span>
            <p className="introPara"> It works by analyzing several factors that contribute to homelessness and <br/>predicting where we can have the greatest effect in serving the Spokane community.</p>
            <Link><button className="btn"><img src={contactus} alt="Hire" className='Hirelogo'/>Contact Us</button></Link>
        </div>
        <img src={fp} alt="" className="fp"/>
     </section>
  )
}

export default intro;
