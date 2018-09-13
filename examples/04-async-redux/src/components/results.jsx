import React from 'react';
import ResultItem from '../components/result-item.jsx';


const Results = ({ results }) => (
    <ul className="app__results">
        {results.map(result => (
            <ResultItem key={result.id} {...result} />
        ))}
    </ul>
);

export default Results;
