import {SET_ACTIVE_ID, RESET_ACTIVE_ID} from '../actions/constants/actionTypes';

const activeId = (state = 0, action) => {
    switch (action.type) {
        case SET_ACTIVE_ID:
            return action.activeId;
        case RESET_ACTIVE_ID:
            return 0;
        default:
            return state;
    }
};

export default activeId;
