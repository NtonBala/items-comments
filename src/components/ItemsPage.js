import React from 'react';
import ItemsContainer from '../containers/ItemsContainer';

const ItemsPage = ({children}) => (
    <div className='content-flex-container'>
        <ItemsContainer/>
        {children}
    </div>
);

export default ItemsPage;
