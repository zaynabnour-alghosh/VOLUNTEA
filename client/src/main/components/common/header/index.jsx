import React from "react";
import './style.css';
import Button from "../button";
const Header=({title,buttons})=>{
    return(
        <div className="head-content flex spaceBetween">
            <span className="title">
                {title}
            </span>
            {buttons &&
                <div className="opp-buttons flex row gap-20">
                    <Button
                        text={"NEW"}
                        isPrimary={true}                                      
                    />
                    <Button
                        text={"+GROUP"}
                        isPrimary={true}                                      
                    />
                </div>
            }            
        </div>
        
    );
}
export default Header;