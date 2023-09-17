import React from "react";
import { useState,useEffect } from "react";
import logo from "../../images/logo-mini.png";
import {Link} from 'react-router-dom'
import { BsCheck2Circle,BsInstagram} from 'react-icons/bs';
import {icons} from "../../icons";
import {FaFacebookSquare} from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import Logo from "../../components/Logo";
import illustration from "../../images/illustration.png"
import "./style.css";
import Button from "../../main/components/common/button";
import { useNavigate } from "react-router-dom";
import Input from "../../main/components/common/input";

const LandingPage=()=>{
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showLogo,setShowLogo]=useState(true);
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            setShowLogo(false);
        },1500);
    },[])
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
        <>
            <div className="main">
                {showLogo?
                 <div className='logo-container'>
                    <Logo />
                </div>
                :
                <div className='app-hero'>
                    <div className={`header flex row menu-toggle ${navbarClass} `}>
                        <div className="app-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className={`menu-app-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <FaBars  className="menu"/>
                        </div>
                        <div  className={`link nav-links ${isMenuOpen ? 'open' : ''}`}>
                            <a href="#about-us" className="about" onClick={closeMenu}>About Us</a>
                            <Link to="/startup" className="start" onClick={closeMenu}>Get Started</Link>
                            <a href="#contact-us"className="contact" onClick={closeMenu}>Contact Us</a>
                            <Link to="/login" className="login-option" onClick={closeMenu}>Login</Link>

                        </div>
                    </div>
                    <div className="app-hero-content flex fullwidth">
                        <div className="about-us">
                            <div className='landing flex column gap-40'>
                                <div className="landing-title">
                                    <h1>VOLUNTEA</h1>
                                    <h2>Your Way to Manage Your Community</h2>
                                </div>                               
                                <div>
                                    <Button text={"START NOW"} isDark={true} onClick={()=>{navigate('/startup');}}/>
                                </div>
                            </div>
                        </div>
                        <div className="illustration-img flex ">
                            <img src={illustration} alt="illustration"  className="home-img"/>
                        </div>
                    </div>
                    <div className="detail-content"  id="about-us">
                        <div className="about-details">
                            <div className="about-text" >
                                <h2>About Us</h2>
                                <div className="after"></div>
                                <p>Voluntea is a management software that helps organizations 
                                    manage their work, schedules, and progress in a 
                                    centralized location, making it easier to 
                                    coordinate and communicate with volunteers. 
                                    Voluntea management software typically includes features such as 
                                    volunteer registration, scheduling, communication, etc.
                                </p>
                                <h3>Features</h3>
                                <div className="list-style">
                                    <div className="col-lg-6 col-sm-6 col-xs-12">
                                        <div className="lst">
                                            <div><BsCheck2Circle className="check"/>&nbsp;Volunteers are notified about new opportunities</div>
                                            <div><BsCheck2Circle className="check"/>&nbsp;Approve or reject applications requests</div>
                                            <div><BsCheck2Circle className="check"/>&nbsp;View volunteers information </div>
                                            <div><BsCheck2Circle className="check"/>&nbsp;Add volunteers to groups</div>
                                            <div><BsCheck2Circle className="check"/>&nbsp;So much more</div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-content" id="contact-us">
                        <div className="contact-details">
                            <div className="contact-form">
                                <h2>Get in Touch</h2>
                                <div className="after"></div>
                                <div className="contact-form-left flex column">
                                    <p>Please fill out the form below to send us an email 
                                        and we will get back to you as soon as possible.
                                    </p>
                                    <div className="contact-info">
                                        <div className="contact-left flex column fullwidth gap-20">
                                            <div className="contact-info-row flex column fullwidth gap-10">
                                                <Input type={"text"} placeholder={"Name"} fill={true}/>
                                                <Input type={"text"} placeholder={"Email Address"}fill={true}/>
                                                <Input type="textarea" placeholder={"Message"} fill={true}/>
                                                <Button text={"START NOW"} isDark={true}/>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer gap-20">
                        <div className="reach-out">
                            <div className="footer-info-row flex row fullwidth gap-40 pt-20">
                                <div className="info">
                                    <div className="icon-top flex">
                                        {icons['location']}
                                        <h3>Address</h3>
                                    </div>
                                    <div>Beirut, Lebanon</div>
                                </div>
                                <div className="info">
                                    <div className="icon-top flex">
                                     {icons['phone']}
                                        <h3>Phone</h3>
                                    </div>
                                    <div>+ (961) 78 845418 </div>
                                </div>
                                <div className="info">
                                    <div className="icon-top flex">
                                        {icons['email']}
                                        <h3>Email</h3>
                                    </div>
                                    <div>info_voluntea@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <h2>COPYRIGHT &copy;</h2>
                    </div>
                </div>
                }
            </div>
        </>
    );
}
export default LandingPage;