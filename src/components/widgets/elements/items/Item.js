import React, {PropTypes} from 'react';
import Link from '../../../elements/Link';
import {commentsPath} from '../../../../helpers/routes/constants';
import '../../../../style.css';

const Item = ({item}) => (
    <div>
        <Link to={commentsPath(item.id)} activeClassName='active-link'>
            {item.name}
        </Link>
        <span>({item.comments})</span>
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
