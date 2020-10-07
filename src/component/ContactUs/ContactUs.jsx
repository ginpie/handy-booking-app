import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "./components/Sidebar";

const Container = styled.div``;

const Title = styled.h3`
  color: #555;
  text-align: left;
  font-size: 25px;
`;

const TextBox = styled.div`
  margin-top: 70px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 30px;
  display: flex;
  justify-content: space-around;
`;

const TextWrapper = styled.div`
  width: 70%;
  padding: 20px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #02367f;
  font-weight: 800;
  margin-top: 30px;
`;

const Content = styled.p`
  font-size: 15px;
`;

const ContactUs = () => (
  <Container>
    <Header />
    <TextBox>
      <Sidebar />
      <TextWrapper>
        <Title>Contact Us</Title>
        <Subtitle>Support Hours</Subtitle>
        <Content>Monday to Sunday - 9am to 6pm (AEST)</Content>
        <Subtitle>Address</Subtitle>
        <Content>
          Handyman
          <br /> Level 1 123 News St Sydney NSW 2000 Australia
        </Content>
        <Subtitle>Postal information</Subtitle>
        <Content>
          Handyman <br />
          P.O Box 1234 News St Sydney NSW 2000 Australia
        </Content>
        <Content> Phone: (02) 1234 5678 Fax: (02) 1234 5678</Content>
      </TextWrapper>
    </TextBox>
    <Footer />
  </Container>
);

export default ContactUs;
