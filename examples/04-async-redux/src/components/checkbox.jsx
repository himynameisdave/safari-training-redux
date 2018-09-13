import React from 'react';


const Checkbox = ({ checked, text, onChange }) => (
    <label>
        <div>
            {text}
        </div>
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
        />
    </label>
);

export default Checkbox;
