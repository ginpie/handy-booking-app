import React from 'react';
import styled from 'styled-components';
import TradiesDetail from './component/TradiesDetail';
import OrderForm from './component/OrderForm';

const Layout = styled.div`
    margin-top: 20px;
    padding-left: 40px;
    border: 2px rgb(175, 173, 173) solid;
    width: 600px;
    border-radius: 5px;
`;

const OrderLayout = () => (
    <Layout>
        <TradiesDetail />
        <OrderForm />
    </Layout>
);

export default OrderLayout;