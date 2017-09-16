import React from 'react';

const Item = ({comments, children}) => (
    <div>
        {children}
        <span>({comments})</span>
        <button>Delete</button>
    </div>
);

export default Item;
