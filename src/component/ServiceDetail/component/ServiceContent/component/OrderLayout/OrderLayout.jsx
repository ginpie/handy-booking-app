import React from "react";
import styled from "styled-components";
import TradiesDetail from "./component/TradiesDetail";
import OrderForm from "./component/OrderForm";
import Reviews from "./component/Reviews";

const Layout = styled.div`
  box-sizing: border-box;
  margin-top: 0;
  padding: 0 30px 0 30px;
  border: 2px rgb(196, 196, 196) solid;
  width: 65%;
  height: 100%;
  border-radius: 5px;
  max-height: 960px;
  overflow: scroll;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const OrderLayout = (props) => (
  <Layout>
    <TradiesDetail data={props.currentTradie} />
    <OrderForm
      tradieId={props.currentTradie ? props.currentTradie.tradieId : ""}
    />
    <Reviews />
  </Layout>
);

export default OrderLayout;
