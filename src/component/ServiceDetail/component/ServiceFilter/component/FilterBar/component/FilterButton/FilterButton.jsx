import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`

    cursor: pointer;
`;

const Button = styled.span`
    outline: none;
    background-color: white;
    border: transparent;

    padding-right: 10px;
`;

const FilterButton = ({
    title,
    clickMethod,
    children
}) => (
    <Container>
        <Button onClick={clickMethod} id={title}>{children}</Button>
        <FontAwesomeIcon icon={faCaretDown} color="rgb(253, 219, 58)" size="lg"/>
    </Container>
);

export default FilterButton;