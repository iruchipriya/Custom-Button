import React from 'react';
import './App.css'; // Import CSS file for loader styling

const Button = ({ onClick, disabled, children }) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  return (
    <div
      className={`custom-button ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-disabled={disabled}
    >
      {children}
    </div>
  );
};

export default Button;
