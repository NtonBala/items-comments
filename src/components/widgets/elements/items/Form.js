import React, {PropTypes} from 'react';
import _ from 'lodash';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddItem = _.bind(this.handleAddItem, this);
    }
    handleAddItem(e) {
        e.preventDefault();
        const name = this.refs.itemName.value;
        if (name.trim()) {
            this.props.addItem(name.trim());
        }
        this.refs.itemForm.reset();
    }
    render() {
        return (
            <form
                ref='itemForm'
                onSubmit={this.handleAddItem}
                className='items-form'
            >
                <input
                    ref='itemName'
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
