import React from "react";
import './style.css';
import {Link} from 'react-router-dom';
import orgImg from '../../../images/hero-cei.png';

const HeroSection=()=>{
    return(
        <div className="page org-hero-section">
            <div className='org-hero'>
                <div className="org-hero-content">
                    <div className="org-about-us">
                        <div className='org-landing'>
                            <h1>CEI</h1>
                            <h3>
                            Clean Earth Initiative is a global non-profit 
                            organization dedicated to environmental 
                            conservation.
                            We work tirelessly to address pressing environmental 
                            challenges and promote responsible 
                            stewardship of our planet for future generations.
                            </h3>
                            <div className="signup">
                                <Link to="/startup">SIGN UP </Link>
                            </div>
                        </div>
                    </div>
                    <div className="org-img flex center">
                        <img src={orgImg} alt="illustration"  className="organization-img"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeroSection;