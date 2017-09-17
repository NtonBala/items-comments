import * as types from './constants/commentsActionTypes';
import {fetchData, postComment} from '../helpers/localStorage/index';

//GET COMMENTS DATA FROM LOCAL STORAGE API
const receiveComments = (response) => ({
    type: types.RECEIVE_COMMENTS,
    response
});

const receiveNoComments = () => ({
    type: types.RECEIVE_NO_COMMENTS
});

export const fetchComments = (id) => (
    (dispatch) => {
        const response = fetchData();
        if (response && response.comments[id]) {
            dispatch(receiveComments(response.comments[id]));
        } else {
            dispatch(receiveNoComments());
        }
    }
);

//HANDLE ADDING COMMENT
const addComment = (id, text) => ({
    type: types.ADD_COMMENT,
    id,
    text
});

export const saveComment = (id, text) => (
    (dispatch) => {
        postComment(id, text);

        dispatch(addComment(id, text));
    }
);
