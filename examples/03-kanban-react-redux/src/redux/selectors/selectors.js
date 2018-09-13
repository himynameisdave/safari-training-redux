
export const getColumns = (state) => state.columns;
export const getColumnIds = (state) => getColumns(state).map(col => col.id);
export const getColumnById = (state, columnId) => getColumns(state).find(col => col.id === columnId);
export const getColumnTitle = (state, columnId) => getColumnById(state, columnId).title;
export const getColumnCards = (state, columnId) => getColumnById(state, columnId).cards;
export const getColumnCardIds = (state, columnId) => getColumnCards(state, columnId).map(card => card.id);
export const getCards = (state, columnId) => getColumnById(state, columnId).cards;
export const getCardById = (state, columnId, cardId) => getCards(state, columnId).find(card => card.id === cardId);
export const getCardText = (state, columnId, cardId) => getCardById(state, columnId, cardId).text;
