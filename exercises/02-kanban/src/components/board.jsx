import React from 'react'
import Column from './column.jsx';

const Board = ({
    columns,
    onAddCard,
    onDeleteColumn,
    onDeleteCard,
    onUpdateColumnTitle,
    onUpdateCardText,
    onMoveCard
}) => (
    <div className="board">
        {columns.map((column, index) => (
            <Column
                {...column}
                key={column.id}
                isLastColumn={index === columns.length - 1}
                numOfColumns={columns.length}
                onAddCard={onAddCard}
                onDeleteCard={onDeleteCard}
                onDeleteColumn={onDeleteColumn}
                onUpdateColumnTitle={onUpdateColumnTitle}
                onUpdateCardText={onUpdateCardText}
                onMoveCard={onMoveCard}
            />
        ))}
    </div>
);

export default Board;
