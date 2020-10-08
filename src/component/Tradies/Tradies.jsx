import React from "react";
import styled from "styled-components";
import Tabs from "./components/Tabs";

const Container = styled.div`
  height: 600px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #ffda44;
  background-size: cover;
  font-family: "Roboto Condensed", sans-serif;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 28px;
  font-family: "Roboto Condensed";
`;

const GetStart = styled.a`
  margin: 20px auto;
  background-color: #0270c2;
  border: none;
  border-radius: 20px;
  width: 190px;
  height: 40px;
  font-family: "Roboto Condensed", sans-serif;
  color: #f5f5f5;
  font-size: medium;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
`;

const Tradies = () => (
  <Container>
    <Title>Meet some tradies!</Title>
    <Tabs></Tabs>
    <GetStart href="/join-us">Become a tradie now</GetStart>
  </Container>
);

export default Tradies;
