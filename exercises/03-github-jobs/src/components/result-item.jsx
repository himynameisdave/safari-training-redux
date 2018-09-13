import React from 'react';


const ResultItem = ({ title, company, location, url, ...props }) => (
    <li className="app__results__item">
        <h2 className="app__results__item__title">{title}</h2>
        <h3 className="app__results__item__company">at {company}</h3>
        <div>
            <span>Location: {location}</span>
        </div>
        <a className="app__results__item__details" href={url} target="_blank">Details</a>
    </li>
);

export default ResultItem;
