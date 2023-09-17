import React from "react";
import "./style.css";

const Button = ({text,isLink,isWide,isLight,isDark,isSecondary,isPrimary,isAction, onClick, enabled = true,active,inactive,medium }) => {
  const clickHandler = () => {
    if (enabled) {
      onClick();
    }

  };

  return (
    <button
      className={`baseButton pointer 
                ${isPrimary? 'primary':''}
                ${isSecondary? 'secondary':''}
                ${isAction? 'action' : ''}
                ${isWide? 'wide' : 'small '}
                ${isLink? 'action-no-bg':''}
                ${isLight? 'btn-light' : ''}
                ${isDark? 'btn-dark' : ''}

                ${active? 'active' : ''}
                ${inactive? 'inactive' : ''}
                ${medium? 'medium' : ''}
                `}
      onClick={() => clickHandler()}
    >
      {text}
    </button>
  );
};

export default Button;