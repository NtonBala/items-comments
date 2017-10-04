import React, {PropTypes} from 'react';

const Comment = ({children}) => (
    <div className='comments-wrapper clearfix'>
        <span className='comment-pic'/>
        <p>{children}</p>
    </div>
);

Comment.propTypes = {
    children: PropTypes.string
};

export default Comment;
