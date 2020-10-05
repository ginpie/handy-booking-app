import React from 'react';
import styled, { css } from 'styled-components';
import PersonalCard from '../PersonalCard';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const CardWrapper = ({
    current,
    data,
    handleClick,
    isClicked
}) => (
    <Wrapper isClicked={isClicked}>
        {data.map(({name, label, rating}) => {
            return <PersonalCard action={handleClick} name={name} label={label} rating={rating} current={(current===name)?true:false} />
        })}
    </Wrapper>
);

export default CardWrapper;