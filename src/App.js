import React from 'react';
import {Router, match, browserHistory} from 'react-router';
import routes from './routes';
import store from './store';
import {Provider} from 'react-redux';
import {prepareData} from './helpers/routes/index';

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

const App = () => (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
);

export default App;
