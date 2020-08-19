import React from 'react';
import style from '../Profile.module.css';

const InformationPair = (props) => (
    <tr>
        <td>{props.children}</td>
        <td>{props.content}</td>
    </tr>
);

export default InformationPair;