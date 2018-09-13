import React from 'react';

const Card = ({ id, text, isLastColumn, onUpdateCardText, onDeleteCard, onMoveCard }) => {
    const handleDeleteCard = () => onDeleteCard(id);
    const handleCardTextChange = (e) => onUpdateCardText(id, e.target.value);
    const handleMoveClick = () => onMoveCard(id);
    return (
        <div className="board__column__card">
            <textarea
                className="board__column__card__text"
                onChange={handleCardTextChange}
                value={text}
            />
            <button className="board__column__card__delete-button" onClick={handleDeleteCard}>
                Delete Card
            </button>
            {!isLastColumn && (
                <button className="board__column__card__button--right" onClick={handleMoveClick}>
                    Move &gt;
                </button>
            )}
        </div>
    );
}

export default Card;
