import React from 'react';
import Item from './Item';

const ItemsList = () => (
    <ul>
        <li><Item comments={132}>First item with custom name</Item></li>
        <li><Item comments={3}>Second item is active</Item></li>
    </ul>
);

export default ItemsList;
