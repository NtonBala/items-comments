import {structure} from './constants';
import {getState} from '../../store';
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
    const state = getState();

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
    const request = update(getState(), {comments: {$merge: {
        [id]: {$push: [text]}
    }}});

    postData(request);
};
