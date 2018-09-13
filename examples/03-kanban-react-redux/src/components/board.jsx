import React from 'react'
import Column from '../containers/column.jsx';


const Board = ({ columns }) => (
    <div className="board">
        {columns.map((columnId, index) => (
            <Column
                id={columnId}
                key={columnId}
                isLastColumn={index === columns.length - 1}
                numOfColumns={columns.length}
            />
        ))}
    </div>
);

export default Board;
