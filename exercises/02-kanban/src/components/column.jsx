import React from 'react';
import Button from './button.jsx';
import Card from './card.jsx';


const Column = ({
    id,
    cards,
    title,
    isLastColumn,
    numOfColumns,
    onAddCard,
    onDeleteCard,
    onDeleteColumn,
    onUpdateColumnTitle,
    onUpdateCardText,
    onMoveCard
}) => {
    const handleInputChange = (e) => onUpdateColumnTitle(id, e.target.value);
    const handleAddCard = () => onAddCard(id);
    const handleDeleteColumn = () => onDeleteColumn(id);
    const handleDeleteCard = (cardId) => onDeleteCard(id, cardId);
    const handleUpdateCardText = (cardId, cardText) => onUpdateCardText(id, cardId, cardText);
    const handleMoveCard = (cardId) => onMoveCard(id, cardId);
    return (
        <section className="board__column">
            <input
                type="text"
                className="board__column__heading"
                value={title}
                onChange={handleInputChange}
            />
            {cards.map(card => (
                <Card
                    {...card}
                    key={card.id}
                    isLastColumn={isLastColumn}
                    onDeleteCard={handleDeleteCard}
                    onUpdateCardText={handleUpdateCardText}
                    onMoveCard={handleMoveCard}
                />
            ))}
            <div>
                <Button
                    className="board__column__add-card"
                    text="Add Card"
                    onClick={handleAddCard}
                />
                {numOfColumns > 2 && (
                    <Button
                        className="board__column__delete-button"
                        text="Delete column"
                        onClick={handleDeleteColumn}
                    />
                )}
            </div>
        </section>
    );
};

export default Column;
