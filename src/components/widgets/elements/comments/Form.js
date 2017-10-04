import React, {PropTypes} from 'react';
import _ from 'lodash';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddComment = _.bind(this.handleAddComment, this);
    }
    handleAddComment(e) {
        e.preventDefault();
        const text = this.refs.commentText.value;
        if (text.trim()) {
            this.props.addComment(text.trim());
        }
        this.refs.commentForm.reset();
    }
    render() {
        return (
            <form
                className='comments-form clearfix'
                ref='commentForm'
                onSubmit={this.handleAddComment}
            >
                <span className='comment-pic'/>
                <div className='textarea-wrapper'>
                    <textarea rows={6} ref='commentText'/>
                    <input type='submit' value='Comment'/>
                </div>
            </form>
        );
    }
}

Form.propTypes = {
    addComment: PropTypes.func
};

export default Form;
