import React, {PropTypes} from 'react';

class Comment extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.children !== nextProps.children ||
            this.state !== nextState);
    }
    render() {
        return (
            <div className='comments-wrapper clearfix'>
                <span className='comment-pic'/>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

Comment.propTypes = {
    children: PropTypes.string
};

export default Comment;
