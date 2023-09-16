import React from "react";
import './style.css';
import {Link} from 'react-router-dom';
import heroSection from "../../../images/hero-section.webp";
const HeroSection=()=>{
    return(
        <div className="hero fullwidth">
            <div className="hero-content flex column fullwidth">
                <div className="content fullwidth">
                    <h1>CLEAN EARTH INITIATIVE</h1>
                    <h3>"Empowering Change, One Step at a Time."</h3>
                </div>
                <div className="content-desc fullwidth flex center">
                    <p>Join us in our mission to foster a sustainable future 
                        for all. The Clean Earth Initiative is dedicated to 
                        championing environmental awareness and sustainable 
                        practices. Through collaborative efforts and community 
                        engagement,we strive to make a lasting impact on the planet. 
                        Let's unite to protect and preserve our Earth for generations to come.
                    </p>
                </div>        
            </div>
        </div>
    );
}
export default HeroSection;