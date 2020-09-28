import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%; */
  width: 500px;
  background: white;
`;

const Header = styled.div`
  padding: 16px 24px;
  text-align: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Close = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  position: absolute;
  padding-right: 24px;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Body = styled.div`
  padding: 16px 24px;
`;

const Footer = styled.div`
  padding: 16px 24px;
`;
const Hr = styled.hr`
  margin: 0;

  border-color: #dadada;
`;
const SignUpButton = styled.button`
  outline: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 0;
  color: #008fb4;
`;
const SignInModal = ({ onClose, onSignUp }) => (
  <Overlay onClick={onClose}>
    <Modal onClick={(event) => event.stopPropagation()}>
      <Header>
        <Title>SigninModall</Title>
        <Close onClick={onClose}>X</Close>
      </Header>
      <Hr />
      <Body>THi is Body</Body>
      <Hr />
      <Footer>
        Not a member yet?&nbsp;
        <SignUpButton onClick={onSignUp}>Sign-Up</SignUpButton>
      </Footer>
    </Modal>
  </Overlay>
);
SignInModal.propType = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};
export default SignInModal;
