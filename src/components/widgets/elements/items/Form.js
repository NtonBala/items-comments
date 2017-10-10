import React, {PropTypes} from 'react';
import _ from 'lodash';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddItem = _.bind(this.handleAddItem, this);
    }
    handleAddItem(e) {
        e.preventDefault();
        const name = this.input.value;
        if (name.trim()) {
            this.props.addItem(name.trim());
        }
        this.form.reset();
    }
    render() {
        return (
            <form
                ref={(node) => {this.form = node;}}
                onSubmit={this.handleAddItem}
                className='items-form'
            >
                <input
                    ref={(node) => {this.input = node;}}
                    type='text'
                    placeholder='Type name here...'
                />
                <input
                    type='submit'
                    value='Add new'
                />
            </form>
        );
    }
}

Form.propTypes = {
    addItem: PropTypes.func
};

export default Form;
