import React from 'react';

const InformationPair = (props) => (
    <div>
        <p>{props.children}</p>
        <p>{props.content}</p>
    </div>
);

export default InformationPair;