import React from 'react';

const Card = ({ id, text, isLastColumn, onUpdateCardText, onDeleteCard, onMoveCard }) => {
    const handleUpdateCardText = (e) => onUpdateCardText(e.target.value);
    return (
        <div className="board__column__card">
            <textarea
                className="board__column__card__text"
                onChange={handleUpdateCardText}
                value={text}
            />
            <button className="board__column__card__delete-button" onClick={onDeleteCard}>
                Delete Card
            </button>
            {!isLastColumn && (
                <button className="board__column__card__button--right" onClick={onMoveCard}>
                    Move &gt;
                </button>
            )}
        </div>
    );
}

export default Card;
