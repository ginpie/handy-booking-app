import React from 'react';
import style from '../Profile.module.css';

const Avatar = (props) => (
    <div>
        <img alt="avatar" src={props.link} className={style.avatar} />
    </div>
);

export default Avatar;