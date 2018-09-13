import qs from 'query-string';
import actionTypes from './action-types.js';
import { getDescription, getLocation, getFullTime } from '../selectors/index.js';


const searchPending = () => ({
    type: actionTypes.searchPending,
});

const searchSuccess = (results) => ({
    type: actionTypes.searchSuccess,
    results,
});

const searchFailed = (error) => ({
    type: actionTypes.searchSuccess,
    error,
});

export const search = () => {
    return (dispatch, getState) => {
        const state = getState();
        const queryParams = qs.stringify({
            description: getDescription(state),
            location: getLocation(state),
            full_time: getFullTime(state),
        });

        //  Start by dispatching our pending action
        dispatch(searchPending());
        return fetch(`http://localhost:3001/api?${queryParams}`)
            .then(res => res.json())
            //  Dispatch success action with parsed results
            .then(results => dispatch(searchSuccess(results)))
            //  Dispatch failed action with error
            .catch(error => dispatch(searchFailed(error)));
    };
};
