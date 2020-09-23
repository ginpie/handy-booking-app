import React from 'react';
import styled from 'styled-components';
import Logo from './component/Logo';
import LinkItem from './component/LinkItem';

const Container = styled.div`
    background-color: rgb(253, 219, 58);
    display: flex;
    align-items: center;
`;

const Left = styled.div`
    width: 40%;
`;

const Right = styled.div`
    width: 30%;

`;

const Header = () => (
    <Container>
        <Logo />
        <Left>
            <LinkItem href="/home">Home</LinkItem>
            <LinkItem href="/service">Service</LinkItem>
            <LinkItem href="/contact">Contact Us</LinkItem>
        </Left>
        <Right>
            <LinkItem href="/signUp">Sign Up</LinkItem>
            <LinkItem href="/logIn">Log In</LinkItem>
        </Right>
    </Container>
);

export default Header;