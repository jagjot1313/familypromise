import React from 'react';
import './intro.css';
import bg from '../../assets/test2.gif';
import {Link} from 'react-scroll';
import Hirelogo from '../../assets/Hireme.png';

const intro = () => {
  return (
     <section id="intro">
        <div className='introContent'>
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Jagjot Singh</span>
            <br/>Full-Stack Developer</span>
            <p className="introPara"> A software development engineer with a strong user focus, can-do attitude, and desire to learn new things.<br/> Experienced in creating websites,full-stack projects, business strategies, requirements specifications,<br/> and user manuals as well as mobile and web applications, and experience in several VHDL projects</p>
            <Link><button className="btn"><img src={Hirelogo} alt="Hire" className='Hirelogo'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="" className="bg"/>
     </section>
  )
}

export default intro;
