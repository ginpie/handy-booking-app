import React from 'react';
import styled from 'styled-components';
import PersonalCard from '../PersonalCard';

const Layout = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const CardWrapper = () => (
    <Layout>
        <PersonalCard />
        <PersonalCard />
        <PersonalCard />
        <PersonalCard />
    </Layout>
);

export default CardWrapper;