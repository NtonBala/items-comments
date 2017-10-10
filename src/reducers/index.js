import {combineReducers} from 'redux';
import items from './items';
import activeId from './activeId';

const rootReducer = combineReducers({
    items,
    activeId
});

export default rootReducer;
