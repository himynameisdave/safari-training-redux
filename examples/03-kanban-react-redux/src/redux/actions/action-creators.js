import actionTypes from './action-types.js';


//  Column-related actions
export const addColumn = () => ({
    type: actionTypes.addColumn,
});

export const deleteColumn = (columnId) => ({
    type: actionTypes.deleteColumn,
    columnId,
});

export const updateColumnTitle = (columnId, title) => ({
    type: actionTypes.updateColumnTitle,
    columnId,
    title,
});

//  Card-related actions
export const addCard = (columnId) => ({
    type: actionTypes.addCard,
    columnId,
});

export const deleteCard = (columnId, cardId) => ({
    type: actionTypes.deleteCard,
    columnId,
    cardId,
});

export const updateCardText = (columnId, cardId, text) => ({
    type: actionTypes.updateCardText,
    columnId,
    cardId,
    text,
});

export const moveCard = (columnId, cardId) => ({
    type: actionTypes.moveCard,
    columnId,
    cardId,
});
