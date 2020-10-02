import React from 'react';
import styled from 'styled-components';
import PersonalCard from '../PersonalCard';

const Layout = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const CardWrapper = ({
    current,
    data,
}) => (
    <Layout>
        {data.map(({name, label, rating}) => {
            return <PersonalCard name={name} label={label} rating={rating} current={(current===name)?true:false} />
        })}
    </Layout>
);

export default CardWrapper;