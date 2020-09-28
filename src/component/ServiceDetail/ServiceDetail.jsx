import React from 'react';
import styled from 'styled-components';
import FilterBar from './component/FilterBar';
import Search from './component/Search';

const Layout = styled.div`
    width: 100vw;
    height: 70px;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    display: flex;
    align-items: center;
`;

const ServiceDetail = () => (
    <Layout>
        <FilterBar />
        <Search />
    </Layout>
);

export default ServiceDetail;