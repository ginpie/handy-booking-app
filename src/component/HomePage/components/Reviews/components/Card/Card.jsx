import React from "react";
import styled from "styled-components";

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
  font-size: 17px;
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

const StarChecked = styled.i`
  color: #ffd943;
  font-size: 16px;
`;

const StarUnchecked = styled.i`
  color: #aaa;
  font-size: 16px;
`;

const Rating = (rating) => {
  if (rating.rating) {
    return (
      <RatingBox>
        {[...Array(rating.rating)].map((e, i) => (
          <StarChecked className="fa fa-star" key={i} />
        ))}
        {[...Array(5 - rating.rating)].map((e, i) => (
          <StarUnchecked className="fa fa-star" key={i} />
        ))}
      </RatingBox>
    );
  } else {
    return <></>;
  }
};

const Card = ({ img, price, title, description, href, rating }) => (
  <LinkContainer href={href} target="_blank">
    <CardHeader title={title} price={price}></CardHeader>
    <CardBody img={img} description={description}></CardBody>
    <Rating rating={rating}></Rating>
  </LinkContainer>
);

export default Card;
