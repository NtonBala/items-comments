import React from 'react';

const Title = ({itemNumber}) => (
    <h1>
        Comments {itemNumber && `#${itemNumber}`}
    </h1>
);

export default Title;
