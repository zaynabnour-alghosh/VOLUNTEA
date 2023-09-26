import React from "react";
import './style.css';
const ImpactCard=({impact})=>{
  const {description,header,image_url}=impact;



    return(
        <div className="imp-card-container flex column">
            <div className="imp-header">
                <img src={`http://localhost:8000/storage/images/impacts/${image_url}`} alt="impact" />
            </div>
            <div className="imp-content flex column center">
                <div className="imp-topic">
                <h4>{header}</h4>
                </div>
                <div className="imp-desc">
                    <p>
                    {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default ImpactCard;