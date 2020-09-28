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

const StyledModal = styled.div`
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
  &:active {
    outline: 0;
    border: 0;
  }
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

const Modal = ({ onClose, title, content, footer }) => (
  <Overlay onClick={onClose}>
    <StyledModal onClick={(event) => event.stopPropagation()}>
      <Header>
        <Title> {title}</Title>
        <Close onClick={onClose}>X</Close>
      </Header>
      <Hr />
      <Body>{content}</Body>
      <Hr />
      <Footer>{footer}</Footer>
    </StyledModal>
  </Overlay>
);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default Modal;
