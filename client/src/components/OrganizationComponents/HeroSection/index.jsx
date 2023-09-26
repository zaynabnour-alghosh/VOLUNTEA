import React from "react";
import './style.css';
import {Link} from 'react-router-dom';
import heroSection from "../../../images/hero-section.webp";
const HeroSection=({data})=>{
    return(
        <div className="hero fullwidth">
            <div className="hero-content flex column fullwidth">
                <div className="content fullwidth">
                    <h1>{data.name}</h1>
                    <h3>"Empowering Change, One Step at a Time."</h3>
                </div>
                <div className="content-desc fullwidth flex center">
                    <p>{data.description}</p>
                </div>        
            </div>
        </div>
    );
}
export default HeroSection;