import React from 'react';
import style from '../Profile.module.scss';

const Avatar = (props) => (
    <div className={style.avatar_container}>
        <img alt="avatar" src={props.link} className={style.avatar} />
    </div>
);

export default Avatar;