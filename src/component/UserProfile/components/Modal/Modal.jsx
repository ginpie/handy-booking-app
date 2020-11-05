import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    top: 0;
    right: 0;
    left: 0;
    right: 0; 
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledModal = styled.div`
    position: absolute;
    width: 400px;
    background: white;
    position: relative; 
`;

const Header = styled.div`
    padding: 8px 16px;
    text-align: center;
    font-size: 15px;
`;


const Close = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    padding:10px 24px 0 0;
    display: flex;
    align-items: center;
    outline: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    font-size: 25px;
    font-weight: 600;
    &:hover {
        opacity: 0.6;
    }
`;

const Body = styled.div`
    padding: 8px 16px;
    margin-top: 10px;
`;

const Footer = styled.div`
    padding: 8px 16px;
    border-top: 1px solid #dadada;
`;


  
const Modal = ({
    onClose,
    children,
}) => {
    return ( 
        <Overlay onClick={onClose}>
            <StyledModal onClick={(event) => event.stopPropagation()}>
                {children}
                <Close onClick={onClose}>X</Close>
            </StyledModal>
        </Overlay>
     );
}


Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer; 
 
export default Modal;