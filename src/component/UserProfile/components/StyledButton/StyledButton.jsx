import React from 'react';
import styled from 'styled-components';
import addIcon from '../icons/placeOrder.png';

const Wrapper = styled.button`
    border: none;
    background-color: #fddb3a;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    cursor: pointer;
    @media screen and (max-width: 500px) {
        width: 100px;
    }
`;

const IconWrapper = styled.div`
    width: 16px;
`;

const Icon = styled.img`
    width: 100%;
`;

const Text = styled.div`
    font-size: 17px;
    font-weight: 500;
    margin-left: 10px;
    @media screen and (max-width: 500px) {
        font-size: 12px;
        margin-left: 10px;
    }
`;


const StyledButton = ({children, onClick}) => {
    return ( 
        <Wrapper onClick={onClick}>
            <IconWrapper>
                <Icon src={addIcon} alt="icon"/>
            </IconWrapper>
            <Text>{children}</Text>
        </Wrapper>
     );
}

export default StyledButton;