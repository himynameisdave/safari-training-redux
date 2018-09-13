import actionTypes from '../actions/action-types.js';
import initalState from '../initial-state.js';

const actionMap = {
    [actionTypes.updateDescription]: (state, action) => ({
        ...state,
        description: action.description,
    }),
    [actionTypes.updateLocation]: (state, action) => ({
        ...state,
        location: action.location,
    }),
    [actionTypes.toggleFullTime]: (state, action) => ({
        ...state,
        fullTime: !state.fullTime,
    }),
    [actionTypes.searchPending]: (state) => ({
        ...state,
        isSearching: true,
        error: null,
        results: [],
    }),
    [actionTypes.searchSuccess]: (state, action) => ({
        ...state,
        isSearching: false,
        results: action.results,
    }),
    [actionTypes.searchFailed]: (state, action) => ({
        ...state,
        isSearching: false,
        error: action.error,
    }),
};

export default (state = initalState, action) => {
    const reducerFn = actionMap[action.type];
    if (reducerFn) {
        return reducerFn(state, action);
    }
    return state;
};
