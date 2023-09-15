import React from "react";
import "./style.css";

const Button = ({text,isLink,isWide,isMain,isPrimary,isAction, onClick, enabled = true,active,inactive }) => {
  const clickHandler = () => {
    if (enabled) {
      onClick();
    }

  };

  return (
    <button
      className={`baseButton pointer 
                ${isPrimary? 'primary':'secondary'} 
                ${isAction? 'action' : ''}
                ${isWide? 'wide' : 'small '}
                ${isLink? 'action-no-bg':''}
                ${isMain? 'btn-main' : ' '}
                ${active? 'active' : ''}
                ${inactive? 'inactive' : ''}
                
                `}
      onClick={() => clickHandler()}
    >
      {text}
    </button>
  );
};

export default Button;