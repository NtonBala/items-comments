import React, {PropTypes} from 'react';
import Header from './Header.js';
import Message from '../widgets/Message';

const MainLayout = ({children}) => (
    <div className='main-container'>
        <Header/>
        {typeof(Storage) !== 'undefined' ? children : <Message/>}
    </div>
);

MainLayout.propTypes = {
    children: PropTypes.node
};

export default MainLayout;
