import React from 'react';
import Comment from './Comment';

const CommentsList = () => (
    <ul>
        <li>
            <Comment>Lorem ipsum dolor sit amet, consectetur...</Comment>
        </li>
        <li>
            <Comment>Cras a scelerisque ex, vel tempus dui.</Comment>
        </li>
        <li>
            <Comment>Phasellus in neque placerat velit tincidunt...</Comment>
        </li>
    </ul>
);

export default CommentsList;
