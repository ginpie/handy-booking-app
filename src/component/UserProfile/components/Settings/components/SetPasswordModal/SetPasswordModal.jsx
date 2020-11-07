import React from 'react';
import { store } from 'react-notifications-component';
import styled, {css} from 'styled-components';
import Modal from '../../../Modal';


const Row = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.label`
    width: 70%;
    font-size: 14px;
    color: #292b32;
    margin-bottom: 8px;
`;

const Input = styled.input`
    width: 60%;
    padding: 10px 15px;
    border-radius: 2px;
    :focus {
        background: #e8f0fe;
    }
`;

const Button = styled.button`
    padding: 10px 100px;
    border: none;
    border-radius: 25px;
    background: #0270c2;
    cursor: pointer;
    color: white;
    font-size: 15px;
    margin-top: 10px;
    :focus {
        outline: 0;
    }
`;

const Error = styled.div`
    display: none;
    ${(props)=>props.error && css`
        display: block;
        color: red;
        width: 70%;
        font-size: 13px;
    `}
`;

const SetPasswordModal = ({
    onClose, 
    handleUpdatePassword, 
    password, setPassword, 
    confirmPassword, 
    setConfirmPassword,
    displayError
}) => {
    return ( 
        <Modal onClose={onClose}>
            <Modal.Header>Set Password</Modal.Header>
            <Modal.Body>
                <Row>
                    <Label htmlFor="newpass">New password</Label>
                    <Input type="password" id="newpass" value={password||""} onChange={(event) => setPassword(event.target.value)}/>
                    <Error error={password==="" && displayError===true ? true : false}>please enter a valid password</Error>
                </Row>
                <Row>
                    <Label htmlFor="confirmpass">Confirm password</Label>
                    <Input type="password" id="confirmpass" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
                    <Error error={password!==confirmPassword && displayError===true ? true : false} >confirm password is not match</Error>
                </Row>
                <Row>
                    <Button onClick={handleUpdatePassword}>Confirm</Button>
                </Row>
                <Row></Row>
            </Modal.Body>
        </Modal>
     );
}
 
export default SetPasswordModal;