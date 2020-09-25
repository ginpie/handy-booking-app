import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
    width: 50px;
    padding-left: 50px;
    padding-right: 50px;
`

const Img = styled.img`
    width: 80%;
`

const Logo = () => (
    <LogoContainer>
        <Img src='https://res.cloudinary.com/dfcalhv9i/image/upload/v1600845305/handyman/logo_egnpb4.png' />
    </LogoContainer>
)

export default Logo;