// Button.js
import React from 'react';

const Button = ({ pushButton, label }) => {
  const buttonStyle = {
    width: '120px',
    height:'50px',
    backgroundColor: 'lightgreen', 
    color: 'white', 
    borderRadius: '15px', 
    fontSize: '16px',
    border: 'none',
  };
  
  return (
    <div>
    <button onClick={pushButton} style={buttonStyle}>
      {label}
    </button>
    </div>
  );
}

export default Button;
