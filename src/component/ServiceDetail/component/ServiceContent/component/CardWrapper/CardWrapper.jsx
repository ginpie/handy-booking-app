import React from 'react';
import styled, { css } from 'styled-components';
import PersonalCard from '../PersonalCard';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-height: 960px;
    overflow: scroll;


    ${props => props.isClicked && css`
        margin-right: 10px;
    `}
`;

const CardWrapper = ({
    current,
    handleClick,
    isClicked,
    tradiesData
}) => {
    return (
    <Wrapper isClicked={isClicked}>
        {tradiesData.map((item) => {
                return <PersonalCard action={handleClick} data={item} current={(current===item.tradieId)?true:false} comment={null} />
        })}
    </Wrapper>
    )
};

export default CardWrapper;