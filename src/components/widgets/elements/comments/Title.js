import React, {PropTypes} from 'react';

const Title = ({id}) => (
    <h2>
        {`Comment ${id}`}
    </h2>
);

Title.propTypes = {
    id: PropTypes.string
}

export default Title;
