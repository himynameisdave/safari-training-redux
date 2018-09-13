import React from 'react';
import Button from './button.jsx';
import Card from '../containers/card.jsx';


const Column = ({
    id,
    isLastColumn,
    numOfColumns,
    cards,
    title,
    onAddCard,
    onDeleteColumn,
    onUpdateColumnTitle,
}) => {
    const handleColumnTitleChange = (e) => onUpdateColumnTitle(e.target.value);
    return (
        <section className="board__column">
            <input
                type="text"
                className="board__column__heading"
                value={title}
                onChange={handleColumnTitleChange}
            />
            {cards.map(cardId => (
                <Card
                    id={cardId}
                    key={cardId}
                    columnId={id}
                    isLastColumn={isLastColumn}
                />
            ))}
            <div>
                <Button
                    className="board__column__add-card"
                    text="Add Card"
                    onClick={onAddCard}
                />
                {numOfColumns > 2 && (
                    <Button
                        className="board__column__delete-button"
                        text="Delete column"
                        onClick={onDeleteColumn}
                    />
                )}
            </div>
        </section>
    );


};

export default Column;
