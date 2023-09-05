import React from "react";
import './style.css';
const ImpactCard=()=>{
    return(
        <div className="imp-card-container flex column">
            <div className="imp-header">
                <img src="https://www.pblworks.org/sites/default/files/inline-images/blog_planet-b.png" alt="impact" />
            </div>
            <div className="imp-content flex column center">
                <div className="imp-topic">
                <h4>Impact on Climate Change</h4>
                </div>
                <div className="imp-desc">
                    <p>
                    By restoring critical ecosystems, 
                    we have significantly contributed 
                    to mitigating climate change and 
                    preserving biodiversity.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default ImpactCard;