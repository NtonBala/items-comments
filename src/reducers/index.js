import {combineReducers} from 'redux';
import items from './items';
import activeItem from './activeItem';

const rootReducer = combineReducers({
    items,
    activeItem
});

export default rootReducer;
