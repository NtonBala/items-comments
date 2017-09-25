import React from 'react';
import Title from './elements/items/Title';
import Form from './elements/items/Form';
import ItemsList from './elements/items/ItemsList';

const Items = ({items, addItem}) => (
    <div className='flex-item'>
        <Title/>
        <Form addItem={addItem}/>
        <ItemsList
            items={items}
            addItem={addItem}
        />
    </div>
);

Items.propTypes = {
    items: ItemsList.propTypes.items,
    addItem: Form.propTypes.addItem
};

export default Items;
