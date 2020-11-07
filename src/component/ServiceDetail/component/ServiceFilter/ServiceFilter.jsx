import React from "react";
import styled from "styled-components";
import FilterBar from "./component/FilterBar";
import Search from "./component/Search";

const Layout = styled.div`
  width: 100vw;
  min-height: 70px;
  padding: 10px;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const ServiceDetail = () => (
  <Layout>
    <FilterBar />
    <Search />
  </Layout>
);

export default ServiceDetail;
