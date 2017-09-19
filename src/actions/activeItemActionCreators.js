import * as types from './constants/actionTypes';
import {getItemData, putItemData} from '../helpers/localStorage/index';

const receiveActiveItem = (response) => ({
    type: types.RECEIVE_ACTIVE_ITEM,
    response
});

export const fetchActiveItem = (id) => (
    (dispatch) => {
        const response = getItemData(id);
        dispatch(receiveActiveItem(response));
    }
);

const addComment = (id, text) => ({
    type: types.ADD_COMMENT,
    id,
    text
});

export const updateActiveItem = (id, text) => (
    (dispatch) => {
        putItemData(id, text);

        dispatch(addComment(id, text));
    }
);
