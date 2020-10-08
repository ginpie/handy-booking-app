import React from "react";
import styled from "styled-components";
import Logo from "./components/Logo";
import Public from "./components/Public";
import Private from "./components/Private";

const Container = styled.div`
  background-color: rgb(253, 219, 58);
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: #888 0 1px 5px;
  z-index: 100;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  max-width: 1200px;
  margin: auto;
  background-color: rgb(253, 219, 58);
  display: flex;
  align-items: center;
  flex-flow: row;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const Header = ({ hovered }) => (
  <Container>
    <Wrapper>
      <Logo />
      <Layout>
        <Public />
        <Private />
      </Layout>
    </Wrapper>
  </Container>
);

export default Header;
