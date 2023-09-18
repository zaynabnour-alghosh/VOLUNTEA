import React from "react";
import './style.css';
import {icons} from '../../../../icons.js';
import { useState,useEffect } from "react";

const Input=({icon, label, placeholder, type = "text",fill ,search,noBorder,memberSearch,readOnly,onChange,value })=>{
    const [showPassword, setShowPassword] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const inputStyle = {
        width: '100%',
      };
    const handleChange = (e) => { 
        if (!readOnly) {
            setInputValue(e.target.value);
        }   
        onChange(e);
    };
    useEffect(() => {
        setInputValue(value);
    }, [value]); 
    return(
        <div className={`flex column  ${search? 'search':' base-input-row'} ${memberSearch? 'member-search':' base-input-row'}`}>
            {label? 
            <>
                <label>{label}</label>
                <input
                    type={type}
                    placeholder={placeholder}
                    style={fill?  inputStyle:{}}
                    value={inputValue}
                    onChange={handleChange}
                />
            </>:
            <>
                <div className={`icon-input-row  ${noBorder? 'no-border':''}`}>
                    {icon && <span className="base-input-icon" style={{ fontSize: '20px' }} >{icon}</span>}
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
                            onChange={handleChange}
                            value={inputValue}
                        />
                    ) : (
                   <>
                    <div className={`${type==='password'?'join-input':''} flex fullwidth`}>
                        {readOnly? 
                            <input
                                type={showPassword ? 'text' : type}
                                placeholder={placeholder}
                                style={fill?  inputStyle:{}}
                                onChange={handleChange}                                
                                readOnly
                                value={inputValue}
                            />:
                        
                        <input
                            type={showPassword ? 'text' : type}
                            placeholder={placeholder}
                            onChange={handleChange}
                            style={fill?  inputStyle:{}}
                            value={inputValue}
                        />}
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
                    )}
                    
                </div>        
            </>
            }                
        </div>
    );
}
export default Input;