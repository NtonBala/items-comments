import {structure} from './constants';
import store from '../../store';
import _ from 'lodash';
import update from 'immutability-helper';

export const fetchData = () => {
    const response = localStorage.getItem(structure);
    return response ? JSON.parse(response) : false;
};

const postData = (request) => {
    localStorage.setItem(structure, JSON.stringify(request));
};

export const postItem = (id, name) => {
    const state = store.getState();

    const request = _.assign({}, state, {
        items: [
            ...state.items,
            {
                id,
                name
            }
        ]
    });

    postData(request);
};

export const postComment = (id, text) => {
    const request = update(store.getState(), {comments: {$merge: {
        [id]: {$push: [text]}
    }}});

    postData(request);
};
