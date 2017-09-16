import React from 'react';
import Title from './elements/comments/Title';
import CommentsList from './elements/comments/CommentsList';
import Form from './elements/comments/Form';

const Comments = () => (
    <div>
        <Title itemNumber={2}/>
        <CommentsList/>
        <Form/>
    </div>
);

export default Comments;
