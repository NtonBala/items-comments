import React, {PropTypes} from 'react';
import Link from '../../../elements/Link';
import {commentsPath} from '../../../../helpers/routes/constants';
import '../../../../style.css';

const Item = ({item}) => (
    <div className='items-wrapper clearfix'>
        <Link to={commentsPath(item.id)} activeClassName='active-item-link'>
            <span className='item-text'>{item.name}</span>
            <span className='comments-count'>{item.comments}</span>
        </Link>
        <button>Delete</button>
    </div>
);

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        comments: PropTypes.number
    })
};

export default Item;
