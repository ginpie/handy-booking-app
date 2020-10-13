import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import Logo from "./components/Logo";
import Public from "./components/Public";
import Private from "./components/Private";
import BurgerMenu from "./components/BurgerMenu";
import LinkItem from "./components/LinkItem";

const Container = styled.div`
  height: 70px;
  width: 100vw;
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
  display: flex;
  align-items: center;
  flex-flow: row;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

function Header({ scrollAnime }) {
  const [header, setHeader] = useState(false);

  const showHeader = () => {
    if (window.scrollY > 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", showHeader);

  // Responsive layout
  const isBigScreen = useMediaQuery({ query: "(min-width:900px" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <Container
      className={
        header || !scrollAnime || !isBigScreen ? "header-solid" : "header-glass"
      }
    >
      {isBigScreen && (
        <Wrapper>
          <Logo />
          <Layout>
            <Public />
            <Private />
          </Layout>
        </Wrapper>
      )}
      {isSmallScreen && (
        <Wrapper>
          <BurgerMenu></BurgerMenu>
          <Logo />
          <LinkItem linkType={"button"} href="/join-us">
            Join us
          </LinkItem>
        </Wrapper>
      )}
    </Container>
  );
}

export default Header;
