import React from 'react';
import styled, { css } from 'styled-components';
import PersonalCard from '../PersonalCard';
import OrderLayout from '../OrderLayout';

const Layout = styled.div`
    display: flex;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    ${props => props.isClicked && css`
        width: 260px;
    `}
`;

const CardWrapper = ({
    current,
    data,
    handleClick,
    isClicked
}) => (
    <Layout>
        <Wrapper isClicked={isClicked}>
            {data.map(({name, label, rating}) => {
                return <PersonalCard action={handleClick} name={name} label={label} rating={rating} current={(current===name)?true:false} />
            })}
        </Wrapper>
        {isClicked && <OrderLayout />}
    </Layout>
);

export default CardWrapper;