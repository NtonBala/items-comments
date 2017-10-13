//ITEMS
//got items from localStorage - set state + set first item as active
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
//no items in localStorage found - set state
export const RECEIVE_NO_ITEMS = 'RECEIVE_NO_ITEMS';
//set items state after adding new item to Local Storage + set activeId state
export const ADD_ITEM = 'ADD_ITEM';
//set state after updating item in Local Storage
export const ADD_COMMENT = 'ADD_COMMENT';

//ACTIVE ITEM ID
export const SET_ACTIVE_ID = 'SET_ACTIVE_ITEM_ID';
export const RESET_ACTIVE_ID = 'RESET_ACTIVE_ITEM_ID';
