import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 70px;
  height: 600px;
  width: 100%;
  background: url(https://res.cloudinary.com/dr99oorie/image/upload/v1602050260/henry-co-3coKbdfnAFg-unsplash_genvg1.jpg),
    #f9f7e7;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 25px;
  color: #fff;
  text-shadow: #888 1px 3px 6px;
`;

const Button = styled.button`
  margin: 10px 0;
  background: #ffda44;
  border: none;
  width: 140px;
  height: 40px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: medium;
  outline: none;
  cursor: pointer;
`;

const Remark = styled.p`
  font-size: 10px;
  color: #eee;
`;

const Banner = () => (
  <Container>
    <Title>Earn up to $5,000 a month on HandyMan* </Title>
    <Button>Join Tradie</Button>
    <Remark>*Based on the median top 50 Tradie's monthly earnings.</Remark>
  </Container>
);

export default Banner;
