import React from 'react';
import styled, { css } from 'styled-components';
import PersonalCard from '../PersonalCard';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;


    ${props => props.isClicked && css`
        margin-right: 10px;
    `}
`;

const CardWrapper = ({
    current,
    data,
    handleClick,
    isClicked,
}) => {
    return (
    <Wrapper isClicked={isClicked}>
        {data.map(({name, label, rating, comment}) => {
            return <PersonalCard action={handleClick} name={name} label={label} rating={rating} current={(current===name)?true:false} comment={comment} />
        })}
    </Wrapper>
    )
};

export default CardWrapper;