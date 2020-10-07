import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Footer from "../Footer";

const Container = styled.div``;

const JoinUs = () => (
  <Container>
    <Header />
    <Banner />
    <FAQ />
    <Footer />
  </Container>
);

export default JoinUs;
