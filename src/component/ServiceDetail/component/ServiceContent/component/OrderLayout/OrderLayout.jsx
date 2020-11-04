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
`;

const OrderLayout = (props) => (
    <Layout>
        <TradiesDetail data={props.currentTradie}/>
        {console.log(props.currentTradie)}
        <OrderForm tradieId={props.currentTradie ? props.currentTradie.tradieId : ''} />
        <Reviews />
    </Layout>
);

export default OrderLayout;