import React from 'react';
import Description from './containers/description.jsx';
import Location from './containers/location.jsx';
import FullTime from './containers/full-time.jsx';
import SearchButton from './containers/search-button.jsx';
import Results from './containers/results.jsx';


const App = () => (
    <div className="app">
        <h1 className="app__title">
            GitHub Jobs Search
        </h1>
        <div className="app__search-settings">
            <Description text="Description" />
            <Location text="Location" />
            <FullTime text="Full-time only?" />
            <SearchButton />
        </div>
        <Results />
    </div>
);

export default App;
