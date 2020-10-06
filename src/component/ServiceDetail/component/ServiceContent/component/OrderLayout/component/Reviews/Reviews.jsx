import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../../../CardWrapper';

const Layout = styled.div`
    margin-bottom: 20px;
`;

const Header = styled.h2`
    font-size: 0.8rem;
`;

const tradiesData = [
    {name: "Ian Yin", comment: "The service is great", rating: 3},
    {name: "David", comment: "The service is great", rating: 5},
    {name: "Jinpei", comment: "The service is great", rating: 4},
    {name: "Ming", comment: "The service is great", rating: 5},
];

const Reviews = () => (
        <Layout>
            <Header>Reviews:</Header>
            <CardWrapper data={tradiesData} />
        </Layout>
);

export default Reviews;