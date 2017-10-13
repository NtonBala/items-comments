import {connect} from 'react-redux';
import Items from '../components/widgets/Items';
import {setActiveId} from '../actions/activeIdActionCreators';
import {saveNewItem} from '../actions/itemsActionCreators';
import _ from 'lodash';

const stateToProps = (state) => ({
    items: _.map(state.items, (item) => ({
        id: item.id,
        name: item.name,
        commentsAmount: item.comments.length
    })),
    activeId: state.activeId
});

const dispatchToProps = (dispatch) => (
    {
        setActiveId: (id) => dispatch(setActiveId(id)),
        saveNewItem: (itemsCount, name) => dispatch(saveNewItem(itemsCount, name)),
        dispatch
    }
);

const mergeProps = (stateToProps, dispatchToProps) => ({
    items: stateToProps.items,
    activeId: stateToProps.activeId,
    setActiveItem: (id) => dispatchToProps.setActiveId(id),
    addItem: (name) => dispatchToProps.saveNewItem(
        stateToProps.items.length,
        name
    ),
    dispatch: (action) => dispatchToProps.dispatch(action)
});

export default connect(stateToProps, dispatchToProps, mergeProps)(Items);
