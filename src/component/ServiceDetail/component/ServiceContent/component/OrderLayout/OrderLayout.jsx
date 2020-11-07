import React from 'react';
import styled from 'styled-components';
import TradiesDetail from './component/TradiesDetail';
import OrderForm from './component/OrderForm';
import Reviews from './component/Reviews';

const Layout = styled.div`
    margin-top: 20px;
    padding-left: 40px;
    padding-right: 40px;
    border: 2px rgb(196, 196, 196) solid;
    width: 600px;
    border-radius: 5px;
    position: absolute;
    right: 20px;
    max-height: 960px;
    overflow: scroll;
`;

const OrderLayout = (props) => (
    <Layout>
        <TradiesDetail data={props.currentTradie}/>
        <OrderForm tradieId={props.currentTradie ? props.currentTradie.tradieId : ''} />
        <Reviews />
    </Layout>
);

export default OrderLayout;