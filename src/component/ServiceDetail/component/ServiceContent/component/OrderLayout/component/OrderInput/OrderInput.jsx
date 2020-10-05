import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    font-size: 0.7rem;
    display: flex;
`;

const Label = styled.label``;

const Input = styled.input`
    margin-left: 20px;
    border: 1px solid rgb(228, 228, 228);
    border-radius: 2px;
    background-color: rgb(249, 251, 253);

    ${props => {
        const style = {
            number: css`
                width: 32px;
            `,
            text: css`
                width: 150px;
            `,
        }[props.type]
        return style;
    }}
    
    height: 20px;
`;

const OrderInput = (props) => (
    <Container>
        <Label for={props.name}>{props.children}</Label>
        <Input name={props.name} type={props.type} />
    </Container>
);

export default OrderInput;