import React from "react";
import './style.css';
const RowCard=({title,desc,notice,date, onClick,isCertification,time})=>{
    const handleClick=()=>{
        if (onClick){
            onClick();
        }
    }
    return(
        <div className={`rowcard-container flex ${isCertification  ? 'limit':' '}`} onClick={handleClick}>
            <div className="rowcard-content flex column flex-start">
                <div className="rowcard-topic">
                    <h4>{title}</h4>
                </div>
                {isCertification && 
                <>
                    <div className="certified">
                        Certified
                    </div> 
                    <svg  className="poly" xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                        <path d="M0 12L15 -9.53674e-07H0.000508741L0.00025437 6L0 12Z" fill="#34324E"/>
                    </svg> 
                </>
                }
                {notice && <div>
                    <div className="flex rowcard-notice">{notice}</div>
                </div>
                }
                <div className="rowcard-desc">
                    <p>{desc}</p>
                    {time && <div className="flex rowcard-notice">{time}</div>}
                    {date && <div className="flex rowcard-notice">{date}</div>}
                </div>
            </div>
        </div>
    );
}
export default RowCard;