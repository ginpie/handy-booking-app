import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
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
  font-family: $font;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 28px;
  font-family: "Roboto Condensed";
`;

const Button = styled.button`
  margin: 20px auto;
  background-color: #ffda44;
  border: none;
  border-radius: 20px;
  width: 140px;
  height: 40px;
  font-family: "Roboto Condensed";
  font-size: medium;
  cursor: pointer;
  outline: none;
`;

const ReviewTasks = styled.div`
  height: 320px;
  width: 100%;
`;

const Reviews = () => (
  <Container>
    <Title>See what the others are getting done</Title>
    <Tabs></Tabs>
    <ReviewTasks></ReviewTasks>
    <Button className="get-started">Get started now</Button>
  </Container>
);

export default Reviews;
