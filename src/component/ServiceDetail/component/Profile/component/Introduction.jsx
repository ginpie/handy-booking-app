import React from 'react';
import style from '../Profile.module.scss';

const Introduction = (props) => (
    <div className={style.intro}>
        <p>{props.children}</p>
    </div>
);

export default Introduction;