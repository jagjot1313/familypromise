import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/RightSidelogo.gif';
import contactImg from '../../assets/contactlogo.png';
import {Link} from 'react-scroll';
import Menu from '../../assets/BurgerLogo.png';

const Navbar = () => {
  const[showMenu,setshowMenu]= useState(false);

  return (
    <nav className="navbar">

        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={+110} duration={500} className="desktopMenuListItem">Experience</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={+110} duration={500} className="desktopMenuListItem">Get In Touch</Link>

        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuBtn"/>Contact Me</button>   

            <img src={Menu} alt="Menu" className='mobMenu' onClick={()=>setshowMenu(!showMenu)}/>
        <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className=" listItem" onClick={()=>setshowMenu(false)}>Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={+110} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Experience</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={+110} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Get In Touch</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={+110} duration={500} className="listItem" onClick={()=>setshowMenu(false)}>Contact</Link>
        </div> 

    </nav>
  )


}
export default Navbar