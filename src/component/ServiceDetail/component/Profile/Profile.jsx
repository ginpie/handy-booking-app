import React from 'react';
import PersonalDetails from './component/PersonalDetails';
import Avatar from './component/Avatar';
import Photo from './component/assets/avatar.jpg';

const Profile = () => (
    <div>
        <Avatar link={Photo} />
        <PersonalDetails />
    </div>
);

export default Profile;