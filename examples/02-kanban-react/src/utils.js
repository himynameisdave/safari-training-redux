import uuid from 'uuid/v4';


export const createColumn = () => ({
    id: uuid(),
    title: 'Untitled Column',
    cards: [],
});

export const createCard = () => ({
    id: uuid(),
    text: 'Card',
});
