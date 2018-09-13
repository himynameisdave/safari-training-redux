import React from 'react';


const Input = ({ text, onInput, value }) => (
    <label className="app__search-input">
        <div>
            {text}
        </div>
        <input onChange={onInput} value={value} />
    </label>
);

export default Input;
