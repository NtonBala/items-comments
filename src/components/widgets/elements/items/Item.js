import React, {PropTypes} from 'react';

class Item extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    }
    render() {
        const {id, name, commentsAmount, active, setActiveItem} = this.props;
        return (
            <div className='items-wrapper clearfix'>
                <a
                    ref={(node) => {this.item = node;}}
                    href='#'
                    className={!active ? '' : 'active-item-link'}
                    onClick={(e) => {
                        e.preventDefault();
                        setActiveItem(id);
                    }}
                >
                    <span className='item-text'>{name}</span>
                    <span className='comments-count'>{commentsAmount}</span>
                </a>
                <button>Delete</button>
            </div>
        );
    }
}

Item.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    commentsAmount: PropTypes.number,
    active: PropTypes.bool,
    setActiveItem: PropTypes.func
};

export default Item;
