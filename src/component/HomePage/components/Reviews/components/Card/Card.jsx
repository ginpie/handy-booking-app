import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const LinkContainer = styled.a`
  width: 280px;
  min-width: 270px;
  max-width: 290px;
  height: 140px;
  padding: 5px 10px;
  margin: 10px 10px;
  text-decoration: none;
  color: #000;
  border: 2px white solid;
  border-radius: 3px;
  box-shadow: #999999 0px 0px 5px 1px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  background-color: #f5f8fc;
  justify-content: space-around;
`;

const Title = styled.p`
  margin: 0;
  align-self: center;
  font-weight: bolder;
`;

const Price = styled.div`
  align-self: center;

  &::before {
    content: "$";
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 25%;
  width: 100%;
  margin: auto;
  font-size: 20px;
`;

const CardHeader = ({ title, price }) => (
  <Header>
    <Title>{title}</Title>
    <Price>{price}</Price>
  </Header>
);

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const Body = styled.div`
  height: 50%;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Description = styled.div`
  width: 70%;
  margin-left: 10px;
  padding: 10px;
`;

const CardBody = ({ img, description }) => (
  <Body>
    <Img src={img} alt="portrait"></Img>
    <Description>{description}</Description>
  </Body>
);

const RatingBox = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
`;

const Stars = styled(ReactStars)`
  box-shadow: #efefef 1px 2px 2px;
`;

const Rating = ({ num }) => (
  <RatingBox>
    <Stars count={5} onChange={null} size={24} activeColor="#ffda44" />
  </RatingBox>
);

const Card = ({ img, price, title, description, href, num }) => (
  <LinkContainer href={href} target="_blank">
    <CardHeader title={title} price={price}></CardHeader>
    <CardBody img={img} description={description}></CardBody>
    <Rating num={num}></Rating>
  </LinkContainer>
);

export default Card;
