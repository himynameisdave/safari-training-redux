import initalState from './initial-state.js';
import actionTypes from '../actions/action-types.js';
import { createColumn, createCard } from '../../utils.js';


const actionsMap = {
    [actionTypes.addColumn]: (state) => ({
        ...state,
        columns: state.columns.concat([createColumn()])
    }),
    [actionTypes.deleteColumn]: (state, action) =>  ({
        ...state,
        columns: state.columns.filter(column => column.id !== action.columnId),
    }),
    [actionTypes.updateColumnTitle]: (state, action) => ({
        ...state,
        columns: state.columns.map(column => column.id !== action.columnId ? column : ({
            ...column,
            title: action.title,
        })),
    }),
    [actionTypes.addCard]: (state, action) => ({
        ...state,
        columns: state.columns.map(column => column.id !== action.columnId ? column : ({
            ...column,
            cards: column.cards.concat([createCard()]),
        })),
    }),
    [actionTypes.deleteCard]: (state, action) => ({
        ...state,
        columns: state.columns.map(column => column.id !== action.columnId ? column : ({
            ...column,
            cards: column.cards.filter(card => card.id !== action.cardId),
        })),
    }),
    [actionTypes.updateCardText]: (state, action) => ({
        ...state,
        columns: state.columns.map(column => column.id !== action.columnId ? column : ({
            ...column,
            cards: column.cards.map(card => card.id !== action.cardId ? card : ({
                ...card,
                text: action.text,
            })),
        })),
    }),
    [actionTypes.moveCard]: (state, action) => {
        const oldColumnIndex = state.columns.findIndex(column => column.id === action.columnId);
        const oldCard = state.columns[oldColumnIndex].cards.find(c => c.id === action.cardId);
        return {
            ...state,
            columns: state.columns.map((column, index) => {
                if (index === oldColumnIndex) {
                    return {
                        ...column,
                        cards: column.cards.filter(card => card.id !== action.cardId),
                    };
                }
                if (index === oldColumnIndex + 1) {
                    return {
                        ...column,
                        cards: column.cards.concat([oldCard]),
                    };
                }
                return column;
            }),
        };
    },
};

const reducer = (state = initalState, action) => {
    const reducerFn = actionsMap[action.type];
    if (reducerFn) {
        return reducerFn(state, action);
    }
    return state;
};

export default reducer;
