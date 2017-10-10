import React from 'react';
import Title from './elements/items/Title';
import Form from './elements/items/Form';
import ItemsList from './elements/items/ItemsList';

const Items = ({items, activeId, setActiveItem, addItem}) => (
    <div className='content-container-item'>
        <Title/>
        <Form addItem={addItem}/>
        <ItemsList
            items={items}
            activeId={activeId}
            setActiveItem={setActiveItem}
        />
    </div>
);

Items.propTypes = {
    items: ItemsList.propTypes.items,
    activeId: ItemsList.propTypes.activeId,
    setActiveItem: ItemsList.propTypes.setActiveItem,
    addItem: Form.propTypes.addItem
};

export default Items;
