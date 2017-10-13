import {RECEIVE_ITEMS, RECEIVE_NO_ITEMS, ADD_ITEM, ADD_COMMENT} from './constants/actionTypes';
import {getItemsData, postItemData, putItemData} from '../helpers/localStorage/index';

//GET ITEMS DATA FROM LOCAL STORAGE
const receiveItems = (response) => ({
    type: RECEIVE_ITEMS,
    response
});

const receiveNoItems = () => ({
    type: RECEIVE_NO_ITEMS
});

export const fetchItems = () => (
    (dispatch) => {
        const response = getItemsData();
        if (response) {
            dispatch(receiveItems(response));
        } else {
            dispatch(receiveNoItems());
        }
    }
);

//HANDLE ADDING ITEM
const addItem = (id, name) => ({
    type: ADD_ITEM,
    id,
    name
});

export const saveNewItem = (itemsCount, name) => (
    (dispatch) => {
        const id = `${itemsCount + 1}`;
        postItemData(id, name);
        dispatch(addItem(id, name));
    }
);

//HANDLING ADDING COMMENT
const addComment = (id, text) => ({
    type: ADD_COMMENT,
    id,
    text
});

export const updateActiveItem = (id, text) => (
    (dispatch) => {
        putItemData(id, text);

        dispatch(addComment(id, text));
    }
);
