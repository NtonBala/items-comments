import React, {PropTypes} from 'react';
import Comment from './Comment';
import _ from 'lodash';

const CommentsList = ({comments}) => (
    <ul>
        {
            _.map(comments, (comment, i) => (
                <li key={i}>
                    <Comment>{comment}</Comment>
                </li>
            ))
        }
    </ul>
);

CommentsList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string)
};

export default CommentsList;
