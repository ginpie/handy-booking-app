import React from "react";
import styled from "styled-components";

import Tabs from "./components/Tabs";

const Container = styled.section`
  height: 600px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-image: url(https://res.cloudinary.com/dr99oorie/image/upload/v1601449701/wood_background_ke6set.jpg);
  background-size: cover;
  font-family: "Roboto Condensed", sans-serif;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 28px;
  font-family: "Roboto Condensed", sans-serif;
`;

const GetStart = styled.a`
  margin: 20px auto;
  background-color: #ffda44;
  border: none;
  border-radius: 20px;
  width: 140px;
  height: 40px;
  font-family: "Roboto Condensed";
  font-size: medium;
  color: #000;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
`;

const Reviews = () => (
  <Container>
    <Title>See what the others are getting done</Title>
    <Tabs></Tabs>
    <GetStart href="/service">Get started now</GetStart>
  </Container>
);

export default Reviews;
