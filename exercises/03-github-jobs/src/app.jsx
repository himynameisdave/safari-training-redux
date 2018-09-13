import React from 'react';
import Button from './components/button.jsx';
import Checkbox from './components/checkbox.jsx';
import Input from './components/input.jsx';


const App = () => (
    <div className="app">
        <h1 className="app__title">
            GitHub Jobs Search
        </h1>
        <div className="app__search-settings">
            <Input text="Description" />
            <Input text="Location" />
            <Checkbox text="Full-time only?" checked />
            <Button text="Search" />
        </div>
        <div>
            Results:
        </div>
    </div>
);

export default App;
