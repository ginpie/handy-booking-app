import React from 'react';
import styled from 'styled-components';
import Modal from '../../../Modal';

const Container = styled.div`
    height: 200px;
`;

const NewOrderModal = ({onClose}) => {
    return ( 
        <Modal onClose={onClose}>
            <Container>
            </Container>
        </Modal>
     );
}
 
export default NewOrderModal;