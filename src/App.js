import React from 'react';
import {Router, match, browserHistory} from 'react-router';
import routes from './routes';
import store from './store';
import {Provider} from 'react-redux';
import {prepareData} from './helpers/routes/index';
import Root from './components/Root';

/*
const historyCallback = location => {
    match(
        {location, routes},
        (err, redirect, state) => {
            if (!err && !redirect) {
                prepareData(store, state);
            }
        }
    );
};

browserHistory.listenBefore(historyCallback);

historyCallback(window.location);
*/

const App = () => (
    <Provider store={store}>
        <Root/>
    </Provider>
);

export default App;
