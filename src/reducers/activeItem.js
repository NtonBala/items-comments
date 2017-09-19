import * as types from '../actions/constants/actionTypes';
/*
as ES6 spread operator for objects is not currently supported by Babel,
so use assign from lodash as it is better supported by different browsers,
than standard one
*/
import _ from 'lodash';

const activeItem = (state = {}, action) => {
    switch (action.type) {
        case types.RECEIVE_ACTIVE_ITEM:
            return action.response;
        case types.ADD_COMMENT:
            return _.assign({}, state, {
                comments: [
                    ...state.comments,
                    action.text
                ]
            });
        default:
            return state;
    }
};

export default activeItem;
