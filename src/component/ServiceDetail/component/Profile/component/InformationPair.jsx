import React from 'react';

const InformationPair = (props) => (
    <tr>
        <td>{props.children}</td>
        <td>{props.content}</td>
    </tr>
);

export default InformationPair;