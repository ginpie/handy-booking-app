import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NakedButton from "../../../NakedButton";
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
  z-index: 100;
`;

const StyledModal = styled.div`
  width: 500px;
  background: white;
  position: relative;
`;

const Header = styled.div`
  padding: 16px 24px;
  text-align: center;
  /* position: relative; */
`;

// const Title = styled.div`
//   font-size: 18px;
// `;

const Close = styled(NakedButton)`
  position: absolute;
  padding: 16px 24px 0 0;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
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

const Modal = ({ onClose, children }) => (
  <Overlay onClick={onClose}>
    <StyledModal onClick={(event) => event.stopPropagation()}>
      {children}
      <Close onClick={onClose}>X</Close>
    </StyledModal>
  </Overlay>
);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
export default Modal;
