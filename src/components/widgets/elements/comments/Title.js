import React, {PropTypes} from 'react';

const Title = ({id}) => (
    <h1 className='content-item-title'>
        {`Comments #${id}`}
    </h1>
);

Title.propTypes = {
    id: PropTypes.string
};

export default Title;
