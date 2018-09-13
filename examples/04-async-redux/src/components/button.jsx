import React from 'react';


const Button = ({ text, onClick, ...props }) => (
    <button
        className="app__search-button"
        onClick={onClick}
        {...props}
    >
        {text}
    </button>
);

export default Button;
