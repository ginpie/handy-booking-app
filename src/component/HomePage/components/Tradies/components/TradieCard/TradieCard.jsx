import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 300px;
  display: flex;
  flex-direction: row;
  background-color: #f5f5f5;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: #999999 1px 4px 5px 1px;
  font-family: sans-serif;
`;

const Details = styled.div`
  width: 60%;
  height: 100%;
  margin: 0;
  padding: 25px;
`;

const Title = styled.p`
  height: 15%;
  font-size: 30px;
  font-weight: bolder;
  margin: 0;
`;

const RatingBox = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
`;

const Rating = ({ num }) => (
  <RatingBox>
    <ReactStars count={num} onChange={null} size={24} activeColor="#ffda44" />
  </RatingBox>
);

const Description = styled.p`
  height: 50%;
  padding: 0;
`;

const Display = styled.div`
  width: 40%;
  height: 100%;
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Service = styled.p`
  margin: 0 0 10px 0;
  font-style: italic;
`;

const TradieCard = ({ title, num, img, content, service }) => (
  <Container>
    <Details>
      <Title>{title}</Title>
      <Service>Specialty: {service}</Service>
      <Rating num={num}></Rating>
      <Description>{content}</Description>
    </Details>
    <Display>
      <Image src={img} alt="image of tradies" />
    </Display>
  </Container>
);

export default TradieCard;
