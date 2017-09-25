import React, {PropTypes} from 'react';
import Item from './Item';
import _ from 'lodash';

const ItemsList = ({items, addItem}) => (
    <ul className='items-list'>
        {
            _.map(items, item => (
                <li key={item.id}>
                    <Item
                        item={item}
                        addItem={addItem}
                    />
                </li>
            ))
        }
    </ul>
);

ItemsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)),
    addItem: PropTypes.func
};

export default ItemsList;
