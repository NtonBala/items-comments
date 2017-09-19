import {connect} from 'react-redux';
import Items from '../components/widgets/Items';
import {saveItem} from '../actions/itemsActionCreators';
import {bindActionCreators} from 'redux';

const stateToProps = (state) => ({
    items: state.items,
});

const actionsToProps = (dispatch) => ({
    saveItem: bindActionCreators(saveItem, dispatch)
});

const mergeProps = (stateProps, actionsProps) => ({
    items: stateProps.items,
    addItem: (name) => actionsProps.saveItem(stateProps.items.length, name)
});

export default connect(stateToProps, actionsToProps, mergeProps)(Items);
