import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useEffect} from 'react';
import { useState } from 'react';
import orgLogo from '../../images/org-logo.png';
import HeroSection from '../../components/OrganizationComponents/HeroSection';
import ImpactSection from '../../components/OrganizationComponents/ImpactSection';
import MissionSection from '../../components/OrganizationComponents/MissionSection';
import EventSection from '../../components/OrganizationComponents/EventSection';
import {FaPhone} from 'react-icons/fa';
import {MdEmail,MdLocationPin,MdKeyboardDoubleArrowRight} from 'react-icons/md';
import {FaFacebookSquare} from 'react-icons/fa';
import {BsInstagram,BsWhatsapp} from 'react-icons/bs';
const OrganizationLanding=()=>{
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
        <div className="page">
            <div className={`header ${navbarClass}`}>
                <img src={orgLogo} alt="logo" className="logoO"/>
                <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <FaBars  className="menu"/>
                </div>
                <div className={`link nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#about-us" className="about" onClick={closeMenu}>About</a>
                    <a href="#impact" className="impact" onClick={closeMenu}>Impacts</a>
                    <a href="#mission" className="mission" onClick={closeMenu}>Missions</a>
                    <a href="#event" className="event" onClick={closeMenu}>Events</a>
                    <a href="#contact" className="contact" onClick={closeMenu}>Contact</a>
                    <Link to="/signup" className="signup-option" onClick={closeMenu}>Signup</Link>
                </div>
            </div>
            <div id="about-us">
            <   HeroSection/>
            </div> 
            <div id="impact">
                <ImpactSection/>
            </div>
            <div id="mission">
                <MissionSection/>
            </div>
            <div id="event">
                <EventSection/>
            </div>
            <div id="contact">
               <div className="footer-container flex column">
                    <div className="footer-content flex">
                        <div className="org-info flex column">
                            <h3>CEI</h3>
                            <p>Clean Earth Initiative is a 
                                global non-profit organization 
                                dedicated to environmental 
                                conservation.
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
                        <div className="footer-contact flex column">
                            <h3>Contact Us</h3>
                            <div className="footer-links flex column">
                                <div className="info">
                                    <div className="icon-top">
                                        <MdLocationPin size={20} />
                                        <h4>Beirut, Lebanon</h4>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="icon-top">
                                        <FaPhone size={20} />
                                        <h4>+ (961) 78 845418</h4>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="icon-top">
                                        <MdEmail size={20} />
                                        <h4>info_voluntea@gmail.com</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex org-social">
                        <FaFacebookSquare size={28}/>
                        <BsInstagram  size={28}/>
                        <BsWhatsapp  size={28}/>
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
