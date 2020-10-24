import React from 'react';
import styled from 'styled-components';
import Modal from '../../../Modal';

const Label = styled.label`
    display: block;
    font-size: 14px;
    color: #292b32;
    margin-bottom: 8px;
`;

const Input = styled.input`

`;

const SetPasswordModal = ({onClose}) => {
    return ( 
        <Modal onClose={onClose}>
            <Modal.Header>Reset Password</Modal.Header>
            <Modal.Body>
                <Label>New password</Label>
                <Input type="text"/>
                <Label>Confirm new password</Label>
                <Input type="text"/>
            </Modal.Body>
        </Modal>
     );
}
 
export default SetPasswordModal;