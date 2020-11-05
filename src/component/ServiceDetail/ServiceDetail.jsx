import React from "react";
import styled from "styled-components";
import ServiceFilter from "./component/ServiceFilter";
import ServiceContent from "./component/ServiceContent";
import Header from "../Header";
import Footer from "../Footer";

const Layout = styled.div`
  margin-top: 70px;
`;

const Container = styled.div``;

const ServiceDetail = ({ serviceType }) => (
  <Container>
    <Header scrollAnime={false} />
    <Layout>
      <ServiceFilter />
      <ServiceContent
        title={(serviceType && serviceType.toUpperCase()) || "service"}
      />
    </Layout>
    <Footer />
  </Container>
);

export default ServiceDetail;
