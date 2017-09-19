import React from 'react';
import ItemsContainer from '../containers/ItemsContainer';

const ItemsPage = ({children}) => (
    <div>
        <ItemsContainer/>
        {children}
    </div>
);

export default ItemsPage;
