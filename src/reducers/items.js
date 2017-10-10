import {RECEIVE_ITEMS, RECEIVE_NO_ITEMS, ADD_ITEM, ADD_COMMENT} from '../actions/constants/actionTypes';
/*
as ES6 spread operator for objects is not currently supported by Babel,
so use assign from lodash as it is better supported by different browsers,
than standard one
*/
import _ from 'lodash';

const items = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ITEMS:
            return action.response;
        case ADD_ITEM:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    comments: []
                }
            ];
        case ADD_COMMENT:
            return _.map(state, (item) => (
                item.id !== action.id ? item : _.assign({}, item, {
                    comments: [
                        ...item.comments,
                        action.text
                    ]
                })
            ));
        case RECEIVE_NO_ITEMS:
        default:
            return state;
    }
};

export default items;
