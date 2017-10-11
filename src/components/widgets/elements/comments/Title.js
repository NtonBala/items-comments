import React, {PropTypes} from 'react';

const Title = ({children}) => (
    <h1 className='content-item-title'>
        {children}
    </h1>
);

Title.propTypes = {
    children: PropTypes.node
};

export default Title;
