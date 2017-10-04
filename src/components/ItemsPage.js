import React from 'react';
import ItemsContainer from '../containers/ItemsContainer';

const ItemsPage = ({children}) => (
    <div className='content-container'>
        <div className='clearfix'>
            <ItemsContainer/>
            {children}
        </div>
    </div>
);

export default ItemsPage;
