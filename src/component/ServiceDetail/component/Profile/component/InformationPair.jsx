import React from 'react';
import style from '../Profile.module.scss';

const InformationPair = (props) => (
    <tr>
        <td className={style.key}>{props.children}</td>
        <td>{props.content}</td>
    </tr>
);

export default InformationPair;