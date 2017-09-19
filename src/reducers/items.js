import * as types from '../actions/constants/actionTypes';
import _ from 'lodash';

const items = (state = [], action) => {
    switch (action.type) {
        case types.RECEIVE_ITEMS:
            return action.response;
        case types.ADD_ITEM:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    comments: 0
                }
            ];
        case types.ADD_COMMENT:
            return _.map(state, (item) => (
                item.id !== action.id ? item : _.assign({}, item, {
                    comments: item.comments + 1
                })
            ));
        case types.RECEIVE_NO_ITEMS:
        default:
            return state;
    }
};

export default items;
