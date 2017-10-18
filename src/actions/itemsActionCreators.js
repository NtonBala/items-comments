import * as types from './constants/actionTypes';
import {getItemsData, postItemData} from '../helpers/localStorage/index';
import {browserHistory} from 'react-router';
import {commentsPath} from '../helpers/routes/constants';

//GET ITEMS DATA FROM LOCAL STORAGE API
const receiveItems = (response) => ({
    type: types.RECEIVE_ITEMS,
    response
});

const receiveNoItems = () => ({
    type: types.RECEIVE_NO_ITEMS
});

export const fetchItems = (isFirstActive) => (
    (dispatch) => {
        const response = getItemsData();
        if (response) {
            dispatch(receiveItems(response));

            /*if current rout is '/' and there's items already in Local
            Storage, display first item as active*/
            if (isFirstActive && response[0]) {
                browserHistory.push(commentsPath(response[0].id));
            }
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
        postItemData(id, name);

        dispatch(addItem(id, name));

        //synchronize items and comments views when adding a new item
        browserHistory.push(commentsPath(id));
    }
);
