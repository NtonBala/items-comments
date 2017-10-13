import React, {PropTypes} from 'react';
import Title from './elements/items/Title';
import Form from './elements/items/Form';
import ItemsList from './elements/items/ItemsList';
import {fetchItems} from '../../actions/itemsActionCreators';

class Items extends React.Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchItems());
    }
    render() {
        const {items, activeId, setActiveItem, addItem} = this.props;
        return (
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
    }
}

Items.propTypes = {
    items: ItemsList.propTypes.items,
    activeId: ItemsList.propTypes.activeId,
    setActiveItem: ItemsList.propTypes.setActiveItem,
    addItem: Form.propTypes.addItem,
    dispatch: PropTypes.func
};

export default Items;
