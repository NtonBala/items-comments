import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        DevTools.instrument()
    )
);

export default store;
