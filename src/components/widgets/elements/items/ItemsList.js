import React, {PropTypes} from 'react';
import Item from './Item';
import _ from 'lodash';

const ItemsList = ({items, activeId, setActiveItem}) => (
    <ul className='items-list'>
        {
            _.map(items, item => (
                <li key={item.id}>
                    <Item
                        key={item.id}
                        name={item.name}
                        commentsAmount={item.commentsAmount}
                        active={item.id === activeId}
                        setActiveItem={setActiveItem}
                    />
                </li>
            ))
        }
    </ul>
);

ItemsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(PropTypes.shape({
        id: Item.propTypes.id,
        name: Item.propTypes.name,
        commentsAmount: Item.propTypes.commentsAmount
    }))),
    activeId: PropTypes.number,
    setActiveItem: Item.propTypes.setActiveItem
};

export default ItemsList;
