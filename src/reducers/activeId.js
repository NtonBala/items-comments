import {SET_ACTIVE_ID, RESET_ACTIVE_ID, RECEIVE_ITEMS, ADD_ITEM} from '../actions/constants/actionTypes';

const activeId = (state = 0, action) => {
    switch (action.type) {
        case SET_ACTIVE_ID:
            return action.activeId;
        case RESET_ACTIVE_ID:
            return 0;
        case RECEIVE_ITEMS:
            return action.response[0].id;
        case ADD_ITEM:
            return action.id;
        default:
            return state;
    }
};

export default activeId;
