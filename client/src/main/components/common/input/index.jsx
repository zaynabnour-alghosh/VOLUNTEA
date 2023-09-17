import React from "react";
import './style.css';
import {icons} from '../../../icons.js';
import { useState } from "react";

const Input=({icon, label, placeholder, type = "text",fill ,search,noBorder,memberSearch})=>{
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const inputStyle = {
        width: '100%',
      }; 
    return(
        <div className={`flex column  ${search? 'search':' base-input-row'} ${memberSearch? 'member-search':' base-input-row'}`}>
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
                <div className={`icon-input-row  ${noBorder? 'no-border':''}`}>
                    {icon && <span className="base-input-icon" style={{ fontSize: '25px' }} >{icon}</span>}
                    {type === 'textarea' ? (
                        <textarea
                            className="textarea-style"
                            placeholder={placeholder}
                            style={{
                                ...inputStyle,
                                width: '100%',  
                                boxSizing: 'border-box'  
                            }}
                            rows={4} 
                            cols={30}
                        />
                    ) : (
                    <input
                                    
                        type={showPassword ? 'text' : type}
                        placeholder={placeholder}
                        style={fill?  inputStyle:{}}
                    />)}
                    {type === 'password' && (
                    <span
                        className={`assword-toggle-icon}`}
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