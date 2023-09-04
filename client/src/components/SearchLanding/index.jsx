import React from "react";
import '../NewSpace/style.css';
import {BsPeopleFill} from "react-icons/bs"
import logoS from "../../assets/logo-secondary.svg";
import './style.css';
const SearchLanding=({onToggle})=>{
    return (
        <div className="fill-registarion-container page flex center">
            <div className="fill-form flex column center">
                <div><img src={logoS} alt="logoS" /></div>
                <span><h2>Enter the code</h2></span>
                <div className="fill-form-content flex column">
                    <div className="row ">
                        <div className="input code flex row">
                            <span><BsPeopleFill/></span>
                            <input type="text" placeholder="Organization Code" />
                        </div>
                    </div>
                    <button>Search</button>
                   <div className="option-search">
                        <span onClick={() => onToggle()}> Back</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SearchLanding;