import {structure} from './constants';
import _ from 'lodash';

//direct interaction with Local Storage
const readData = () => {
    const response = localStorage.getItem(structure);
    return response ? JSON.parse(response) : false;
};

const writeData = (request) => {
    localStorage.setItem(structure, JSON.stringify(request));
};

//getting items data
export const getItemsData = () => {
    const items = readData();
    return !items ? false : items;
};
//add new item
export const postItemData = (id, name) => {
    const newItem = {
        id,
        name,
        comments: []
    };

    let items = readData();
    items = items ? [...items, newItem] : [newItem];

    writeData(items);
};
//update item (add comment)
export const putItemData = (id, text) => {
    const edittedItems = _.map(readData(),
        (item) => (item.id !== id ? item : _.assign(
            item,
            {
                comments: [
                    ...item.comments,
                    text
                ]
            }
        ))
    );

    writeData(edittedItems);
};
