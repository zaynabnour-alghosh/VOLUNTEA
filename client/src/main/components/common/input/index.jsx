import React from "react";
import './style.css';
import {icons} from '../../../icons.js';
import { useState } from "react";

const Input=({icon, label, placeholder, type = "text",fill })=>{
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const inputStyle = {
        width: '100%',
      }; 
    return(
        <div className="flex column base-input-row">
            {label? 
            <>
                <label>{label}</label>
                <input
                    type={type}
                    placeholder={placeholder}
                    style={fill?  inputStyle:{}}
                />
            </>:
            <>
                <div className="icon-input-row">
                    {icon && <span className="base-input-icon" style={{ fontSize: '25px' }} >{icon}</span>}
                    <input                
                        type={showPassword ? 'text' : type}
                        placeholder={placeholder}
                    />
                    {type === 'password' && (
                    <span
                        className="password-toggle-icon"
                        onClick={togglePasswordVisibility}
                        style={{ color: 'gray',fontSize: '20px'}}
                    >
                        {showPassword ? icons['invisible'] : icons['visible']}
                    </span>
                    )}
                </div>        
            </>
            }                
        </div>
    );
}
export default Input;