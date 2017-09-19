import React, {PropTypes} from 'react';

const Comment = ({children}) => (
    <div>
        <span/>
        {children}
    </div>
);

Comment.propTypes = {
    children: PropTypes.string
};

export default Comment;
