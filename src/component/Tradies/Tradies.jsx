import React from "react";
import styled from "styled-components";
import Tab from "./components/Tab";
import Tabs from "./components/Tabs";
import TradieCard from "./components/TradieCard";

const p4 =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1601461565/p4_mqsmvq.jpg";

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

const Button = styled.button`
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
  outline: none;
`;

const Tradies = () => (
  <Container>
    <Title>Meet some tradies!</Title>
    <Tabs></Tabs>
    <Button>Become a tradie now</Button>
  </Container>
);

export default Tradies;
