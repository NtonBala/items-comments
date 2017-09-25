import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppContainer} from 'react-hot-loader';
import './style.css';

const app = document.getElementById('app');

ReactDOM.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    app
);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;

        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            app
        );
    });
}
