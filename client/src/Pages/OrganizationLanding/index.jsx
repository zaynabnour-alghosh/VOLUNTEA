import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useEffect} from 'react';
import { useState } from 'react';
import {icons} from '../../icons.js';
import orgLogo from '../../images/org-logo.png';
import HeroSection from '../../components/OrganizationComponents/HeroSection';
import ImpactSection from '../../components/OrganizationComponents/ImpactSection';
import MissionSection from '../../components/OrganizationComponents/MissionSection';
import EventSection from '../../components/OrganizationComponents/EventSection';
import {FaPhone} from 'react-icons/fa';
import {MdKeyboardDoubleArrowRight} from 'react-icons/md';
const OrganizationLanding=({orgInfo,events,missions,impacts,all})=>{
    console.log("all", all);
    console.log("info" ,orgInfo);
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    const closeMenu = () => {
    setIsMenuOpen(false);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }, []);
    
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };
    const navbarClass = scrolling ? 'with-shadow' : 'navbar';
    return(
        <div>
            <div className={`header fullwidth flex  ${navbarClass}`}>
                <img src={`http://localhost:8000/storage/images/organizations/${orgInfo.logo_url}`} alt="logo" className="logoO"/>
                <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                   <div className="menu">{icons['menu']}</div>
                </div>
                <div className={`link nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#about-us" className="about" onClick={closeMenu}>About</a>
                    <a href="#impact" className="impact" onClick={closeMenu}>Impacts</a>
                    <a href="#mission" className="mission" onClick={closeMenu}>Missions</a>
                    <a href="#event" className="event" onClick={closeMenu}>Events</a>
                    <a href="#contact" className="contact" onClick={closeMenu}>Contact</a>
                    <Link to={`/signup?code=${all.code}`} className="signup-option" onClick={closeMenu}>Signup</Link>
                </div>
            </div>
            <div id="about-us" >
            <   HeroSection data={orgInfo}/>
            </div> 
            <div id="impact" className='light'>
                <ImpactSection data={impacts}/>
            </div>
            <div id="mission" className='light'>
                <MissionSection data={missions}/>
            </div>
            <div id="event" className='light'>
                <EventSection data={events}/>
            </div>
            <div id="contact " className='light'>
               <div className="footer-container flex column">
                    <div className="footer-content flex">
                        <div className="org-info flex column">
                            <h3>{orgInfo.name}</h3>
                            <p>A global non-profit organization 
                                dedicated to empowering humanity and kindness
                            </p>
                        </div>
                        <div className="footer-about flex column">
                            <h3>About Us</h3>
                            <div className="footer-links flex column">
                            <a href="#about-us"><MdKeyboardDoubleArrowRight/> &nbsp; Who We Are</a>
                            <a href="#impact"><MdKeyboardDoubleArrowRight/> &nbsp;What We Do</a>
                            <a href="#mission"><MdKeyboardDoubleArrowRight/> &nbsp;How We Do it</a>
                            </div>
                        </div>
                        <div className="footer-contact flex column" id="contact">
                            <h3>Contact Us</h3>
                            <div className="footer-links flex column">
                                <div className="flex gap-10">
                                    {icons['location']}
                                    <p>{orgInfo.location}</p>
                                </div>
                                <div className="flex gap-10">
                                    {icons['phone']}
                                    <p>{orgInfo.phone}</p>
                                </div>
                                <div className="flex gap-10">
                                    {icons['email']}
                                    <p>{orgInfo.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex center fullwidth p-10 org-social">
                       <a href={orgInfo.face_link}> {icons['fb']}</a>
                       <a href={orgInfo.insta}> {icons['insta']}</a>
                       <a href={orgInfo.whats}> {icons['whats']}</a>
                        
                        
                    </div>
                    <div className=' flex center'>
                        <h2>COPYRIGHT 2023 &copy;</h2>
                    </div>
               </div>
            </div>
        </div>
    );
}
export default OrganizationLanding;
