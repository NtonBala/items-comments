import * as types from '../actions/constants/itemsActionTypes';

const items = (state = [], action) => {
    switch (action.type) {
        case types.RECEIVE_ITEMS:
            return action.response;
        case types.ADD_ITEM:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name
                }
            ];
        case types.RECEIVE_NO_ITEMS:
        default:
            return state;
    }
};

export default items;
