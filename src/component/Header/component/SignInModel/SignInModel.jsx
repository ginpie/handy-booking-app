import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Model = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  background-color: #fff;
  transform: translate(-50%, -50%);
`;

const Header = styled.div`
  padding: 16px 24px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Body = styled.div`
  padding: 16px 24px;
  height: 500px;
`;

const Footer = styled.div`
  padding: 16px 24px;
`;

const SignInModel = () => (
  <Overlay>
    <Model>
      <Header>
        <Title>Sign In / Sign Up</Title>
      </Header>
      <Body>Body</Body>

      <Footer>Footer</Footer>
    </Model>
  </Overlay>
);

export default SignInModel;
