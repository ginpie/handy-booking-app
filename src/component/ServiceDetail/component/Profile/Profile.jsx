import React from 'react';
import PersonalDetails from './component/PersonalDetails';
import Avatar from './component/Avatar';
import Photo from './component/assets/avatar.jpg';
import style from './Profile.module.scss';

const Profile = (props) => (
    <div className={props.className}>
        <div className={style.title}>
            <p>{props.order}</p>
        </div>
        <Avatar link={Photo} />
        <PersonalDetails rating={props.rating} />
    </div>
);

export default Profile;