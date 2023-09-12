import React from "react";
import './style.css';
import Button from "../button";
import Input from "../input";
import {icons} from "../../../icons.js"
const Header=({title,buttons,search})=>{
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
            {search &&
                <Input 
                placeholder={"Search members..."}
                className="search"
                search={true}
                icon={icons['search']}
                />
            }        
        </div>
        
    );
}
export default Header;