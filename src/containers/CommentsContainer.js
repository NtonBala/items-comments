import {connect} from 'react-redux';
import Comments from '../components/widgets/Comments';
import {updateActiveItem} from '../actions/itemsActionCreators';
import _ from 'lodash';

const stateToProps = (state) => ({
    commentedItem: _.find(state.items, {id: state.activeId})
});

const dispatchToProps = (dispatch) => ({
    addComment: (id, text) => dispatch(
        updateActiveItem(id, text)
    )
});

const mergeProps = (stateToProps, dispatchToProps) => ({
    commentedItem: stateToProps.commentedItem,
    addComment: (text) => dispatchToProps.addComment(
        stateToProps.commentedItem.id,
        text
    )
});

export default connect(stateToProps, dispatchToProps, mergeProps)(Comments);
