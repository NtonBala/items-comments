import React from 'react';
import Items from './widgets/Items';

const ItemsPage = ({children}) => (
    <div>
        <Items/>
        {children}
    </div>
);

export default ItemsPage;
