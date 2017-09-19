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
                ref='commentForm'
                onSubmit={this.handleAddComment}
            >
                <span/>
                <textarea ref='commentText' rows={4} cols={50}/>
                <input type='submit' value='Comment'/>
            </form>
        );
    }
}

Form.propTypes = {
    addComment: PropTypes.func
};

export default Form;
