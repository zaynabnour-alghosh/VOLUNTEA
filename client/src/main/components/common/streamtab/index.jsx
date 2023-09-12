import React from 'react';
import './style.css';
const StreamTab = ({ name, value, selected,onSelected }) => {
    const clickHandler = () => {
      onSelected(value);
    };
  
    return (
      <div
        className="flex column  pointer tabButton"
        onClick={() => clickHandler()}
      >
        <p>{name}</p>  
        {selected && <div className="selectedMark"></div>}
      </div>
    );
  };

export default StreamTab;