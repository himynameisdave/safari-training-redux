import actionTypes from './action-types.js';


export const updateDescription = (description) => ({
    type: actionTypes.updateDescription,
    description,
});

export const updateLocation = (location) => ({
    type: actionTypes.updateLocation,
    location,
});

export const toggleFullTime = () => ({
    type: actionTypes.toggleFullTime,
});
