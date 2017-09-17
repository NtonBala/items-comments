import * as types from './constants/itemsActionTypes';
import {fetchData, postItem} from '../helpers/localStorage/index';

//GET ITEMS DATA FROM LOCAL STORAGE API
const receiveItems = (response) => ({
    type: types.RECEIVE_ITEMS,
    response
});

const receiveNoItems = () => ({
    type: types.RECEIVE_NO_ITEMS
});

export const fetchItems = () => (
    (dispatch) => {
        const response = fetchData();
        if (response) {
            dispatch(receiveItems(response.items));
        } else {
            dispatch(receiveNoItems());
        }
    }
);

//HANDLE ADDING ITEM
const addItem = (id, name) => ({
    type: types.ADD_ITEM,
    id,
    name
});

export const saveItem = (itemsCount, name) => (
    (dispatch) => {
        const id = `${itemsCount + 1}`;
        postItem(id, name);

        dispatch(addItem(id, name));
    }
);
