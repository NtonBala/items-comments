import React from 'react';
import {Router, match, browserHistory} from 'react-router';
import routes from './routes';
import store from './store';
import {Provider} from 'react-redux';
import {prepareData} from './helpers/routes/index';
import DevTools from './containers/DevTools';
import ReactDOM from 'react-dom';

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

ReactDOM.render(
    <DevTools store={store}/>,
    document.getElementById('devtools')
);

export default App;
