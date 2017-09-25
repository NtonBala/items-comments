import React, {PropTypes} from 'react';
import Header from './Header.js';

const MainLayout = ({children}) => (
    <div className='main-flex-container'>
        <Header/>
        {children}
    </div>
);

MainLayout.propTypes = {
    children: PropTypes.node
};

export default MainLayout;
