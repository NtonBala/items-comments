import React, {PropTypes} from 'react';
import Title from './elements/comments/Title';
import CommentsList from './elements/comments/CommentsList';
import Form from './elements/comments/Form';

const Comments = ({activeItem, addComment}) => (
    <div className='flex-item'>
        <Title id={activeItem.id}/>
        <CommentsList comments={activeItem.comments}/>
        <Form addComment={addComment}/>
    </div>
);

Comments.propTypes = {
    activeItem: PropTypes.shape({
        id: Title.propTypes.id,
        name: PropTypes.string,
        comments: CommentsList.propTypes.comments
    }),
    addComment: Form.propTypes.addComment
};

export default Comments;
