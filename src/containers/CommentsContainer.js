import {connect} from 'react-redux';
import Comments from '../components/widgets/Comments';
import {updateActiveItem} from '../actions/activeItemActionCreators';

const stateToProps = (state) => ({
    activeItem: state.activeItem
});

const actionsToProps = (dispatch, ownProps) => ({
    addComment: (text) => dispatch(
        updateActiveItem(ownProps.params.item_id, text)
    )
});

export default connect(stateToProps, actionsToProps)(Comments);
