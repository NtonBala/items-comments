import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import MainLayout from './components/layout/MainLayout';

const App = () => (
    <Provider store={store}>
        <MainLayout/>
    </Provider>
);

export default App;
