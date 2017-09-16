import React from 'react';
import Item from './Item';
import Link from '../../../elements/Link';
import {commentsPath} from '../../../../helpers/routes/index';

const ItemsList = () => (
    <ul>
        <li>
            <Link to={commentsPath('1')}>
                <Item comments={132}>First item with custom name</Item>
            </Link>
        </li>
        <li>
            <Link to={commentsPath('2')}>
                <Item comments={3}>Second item is active</Item>
            </Link>
        </li>
    </ul>
);

export default ItemsList;
