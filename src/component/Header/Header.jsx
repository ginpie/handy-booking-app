import React from 'react';
import styled from 'styled-components';
import Logo from './component/Logo';
import LinkItem from './component/LinkItem';

const Container = styled.div`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    height: 70px;
    flex-flow: row;
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;

`;

const SideBar = styled.div`
    /* justify-content: space-evenly; */
`;

const Header = () => (
    <Container>
        <Logo />
        <NavBar>
            <SideBar>
                <LinkItem href="/home" linkType={"nav"}>Home</LinkItem>
                <LinkItem href="/service" linkType={"nav"}>Service</LinkItem>
                <LinkItem href="/contact" linkType={"nav"}>Contact Us</LinkItem>
            </SideBar>
            <SideBar>
                <LinkItem href="/signUp">Sign Up</LinkItem>
                <LinkItem href="/logIn">Log In</LinkItem>
                <LinkItem href="/logIn" linkType={"button"}>Become a Tradie</LinkItem>
            </SideBar>
        </NavBar>
    </Container>
);

export default Header;