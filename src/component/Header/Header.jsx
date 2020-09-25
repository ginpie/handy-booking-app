import React from 'react';
import styled from 'styled-components';
import Logo from './component/Logo';
import Public from './component/Public';
import Private from './component/Private';

const Container = styled.div`
    background-color: rgb(253, 219, 58);
    display: flex;
    align-items: center;
    height: 70px;
    flex-flow: row;
`;

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;

`;

const Header = ({
    hovered,
}) => (
    <Container>
        <Logo />
        <Layout>
            <Public />
            <Private />
        </Layout>
    </Container>
);

export default Header;