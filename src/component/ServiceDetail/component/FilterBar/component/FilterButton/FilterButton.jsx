import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    padding-left: 20px;
`;

const Button = styled.span`
    outline: none;
    background-color: white;
    border: transparent;
    cursor: pointer;
    padding-right: 5px;
`;

const FilterButton = ({
    type,
    children
}) => (
    <Container>
        <Button>{children}</Button>
        <FontAwesomeIcon icon={faCaretDown} color="rgb(253, 219, 58)"/>
    </Container>
);

export default FilterButton;