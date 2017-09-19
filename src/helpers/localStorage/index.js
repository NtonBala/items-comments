import {structure} from './constants';
import _ from 'lodash';

//interaction with Local Storage
const readData = () => {
    const response = localStorage.getItem(structure);
    return response ? JSON.parse(response) : false;
};

const writeData = (request) => {
    localStorage.setItem(structure, JSON.stringify(request));
};

//handling items
export const getItemsData = () => {
    const items = readData();
    if (items) {
        return _.map(items, item => ({
            id: item.id,
            name: item.name,
            comments: item.comments.length
        }));
    } else {
        return false;
    }
};

export const postItemData = (id, name) => {
    const newItem = {
        id,
        name,
        comments: []
    };

    let items = readData();
    items ? items.push(newItem) : items = [newItem];

    writeData(items);
};

//handling active item
export const getItemData = (id) => (
    _.find(readData(), {id})
);

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
