import {connect} from 'react-redux';
import Items from '../components/widgets/Items';
import {setActiveId} from '../actions/activeIdActionCreators';
import {saveNewItem} from '../actions/itemsActionCreators';
import {bindActionCreators} from 'redux';
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
    bindActionCreators({
        setActiveId,
        saveNewItem
    }, dispatch)
);

const mergeProps = (stateProps, dispatchToProps) => ({
    items: stateProps.items,
    setActiveItem: (id) => dispatchToProps.setActiveId(id),
    addItem: (name) => dispatchToProps.saveNewItem(
        stateProps.items.length,
        name
    )
});

export default connect(stateToProps, dispatchToProps, mergeProps)(Items);
