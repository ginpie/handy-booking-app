import React from 'react';
import styled from 'styled-components';
import ServiceFilter from './component/ServiceFilter';
import ServiceContent from './component/ServiceContent';

const Layout = styled.div`

`;

const ServiceDetail = () => (
    <Layout>
        <ServiceFilter />
        <ServiceContent />
    </Layout>
);

export default ServiceDetail;