import React, {PropTypes} from 'react';
import _ from 'lodash';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddComment = _.bind(this.handleAddComment, this);
    }
    handleAddComment(e) {
        e.preventDefault();
        const text = this.textArea.value;
        if (text.trim()) {
            this.props.addComment(text.trim());
        }
        this.form.reset();
    }
    render() {
        return (
            <form
                className='comments-form clearfix'
                ref={(node) => {this.form = node;}}
                onSubmit={this.handleAddComment}
            >
                <span className='comment-pic'/>
                <div className='textarea-wrapper'>
                    <textarea rows={6} ref={(node) => {this.textArea = node;}}/>
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
