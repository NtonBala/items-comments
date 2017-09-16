import * as types from '../actions/constants/commentsActionTypes';
/*
as ES6 spread operator for objects is not currently supported by Babel,
use assign from lodash as it is better supported by different browsers,
than standard one
*/
import _ from 'lodash';

const itemComments = (state = [], action) => {
    switch (action.type) {
        case types.ADD_COMMENT:
            return [
                ...state,
                action.text
            ];
        default:
            return state;
    }
};

const comments = (state = {}, action) => {
    switch (action.type) {
        case types.RECEIVE_COMMENTS:
            return action.response;
        case types.ADD_COMMENT:
            return _.assign({}, state, {
                [action.id]: itemComments(state[action.id], action)
            });
        case types.RECEIVE_NO_COMMENTS:
        default:
            return state;
    }
};

export default comments;
