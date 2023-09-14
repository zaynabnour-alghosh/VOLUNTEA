import React from 'react';
import './style.css';
const StreamTab = ({ name, value, selected,onSelected ,chosen}) => {
    const clickHandler = () => {
      onSelected(value);
    };
  
    return (
      <div
        className={`flex column  pointer tabButton ${chosen? 'bold':''}`}
        onClick={() => clickHandler()}
      >
        <p>{name}</p>  
        {selected && <div className="selectedMark"></div>}
      </div>
    );
  };

export default StreamTab;