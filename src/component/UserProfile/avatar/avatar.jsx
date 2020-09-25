import React from 'react';
import fakeAvatar from '../icons/users.png';
import './avatar.scss';

const Avatar = () => {
    return ( 
        <div className="avatar">
            <img src={fakeAvatar} alt="avatar" className="avatar__img"/>
        </div>
     );
}
 
export default Avatar;