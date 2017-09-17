import React from 'react';
import Link from '../../../elements/Link';
import {commentsPath} from '../../../../helpers/routes/constants';

const Item = ({comments, children}) => (
    <div>
        <Link to={commentsPath('1')}>
            {children}
        </Link>
        <span>({comments})</span>
        <button>Delete</button>
    </div>
);

export default Item;
