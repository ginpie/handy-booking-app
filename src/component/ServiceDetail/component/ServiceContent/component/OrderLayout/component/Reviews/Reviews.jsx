import React from 'react';
import styled from 'styled-components';
import CardWrapper from '../../../CardWrapper';

const Layout = styled.div``;

const Header = styled.h2`
    font-size: 0.8rem;
`;

const tradiesData = [
    {name: "Ian Yin", label: ["Cleaning", "Furniture Assembly", "House Moving", "Installation"], rating: 3},
    {name: "David", label: ["Cleaning", "Furniture Assembly", "House Moving"], rating: 5},
    {name: "Jinpei", label: ["Cleaning", "Furniture Assembly", "House Moving"], rating: 4},
    {name: "Ming", label: ["Cleaning", "Furniture Assembly"], rating: 5},
];

const Reviews = () => (
        <Layout>
            <Header>Reviews:</Header>
            <CardWrapper data={tradiesData} />
        </Layout>
);

export default Reviews;