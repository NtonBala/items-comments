import {SET_ACTIVE_ID, RESET_ACTIVE_ID} from './constants/actionTypes';

export const setActiveId = (id) => ({
    type: SET_ACTIVE_ID,
    activeId: id
});

export const resetActiveId = () => ({
    type: RESET_ACTIVE_ID
});
