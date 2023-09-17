import React from "react";
import '../NewSpace/style.css';
import logoS from "../../assets/logo-secondary.svg";
import './style.css';
import {icons} from "../../icons.js";
import Input from "../../main/components/common/input";
import Button from "../../main/components/common/button";
const SearchLanding=({onToggle})=>{
    return (
        <div className="fill-registarion-container page flex center">
            <div className="fill-form flex column center">
                <div><img src={logoS} alt="logoS" /></div>                
                <div className="fill-form-content flex column">
                    <span><h2>Enter the code</h2></span>
                    <div className="pt-10">
                        <Input
                            icon={icons['people']}
                            type={"text"}
                            placeholder={"Organization Code"}
                            fill={true}
                        />
                    </div>
                    <div className="fullwidth flex center">
                        <Button 
                            text={"Search"} 
                            isLight={true}
                            medium={true}
                        />
                    </div>
                
                    <div className="option-search">
                        <span onClick={() => onToggle()}> Back</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SearchLanding;