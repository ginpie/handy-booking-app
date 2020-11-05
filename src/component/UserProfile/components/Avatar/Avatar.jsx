import React from 'react';
import styled from 'styled-components';
import avatar from '../icons/man.png';
const AvatarWrapper = styled.div`
    width: 100%;
    border-radius: 50%;
`;

const Photo = styled.img`
    width: 100%;
    border-radius: 50%;
`;

const Avatar = () => {
    return ( 
        <AvatarWrapper>
            <Photo src={avatar} alt="avatar"/>
        </AvatarWrapper>
     );
}
 
export default Avatar;