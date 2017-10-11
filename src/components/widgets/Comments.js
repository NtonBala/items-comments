import React, {PropTypes} from 'react';
import Title from './elements/comments/Title';
import CommentsList from './elements/comments/CommentsList';
import Form from './elements/comments/Form';

const Comments = ({commentedItem, addComment}) => (
    commentedItem === undefined ?
        <div className='content-container-item'>
            <Title>Item Comments</Title>
        </div> :
        <div className='content-container-item'>
            <Title>
                {`Comments #${commentedItem.id}`}
            </Title>
            <CommentsList comments={commentedItem.comments}/>
            <Form addComment={addComment}/>
        </div>
);

Comments.propTypes = {
    activeItem: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        comments: CommentsList.propTypes.comments
    }),
    addComment: Form.propTypes.addComment
};

export default Comments;
