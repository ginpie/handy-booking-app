import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Tab from "./components/Tab";

const p1 =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1601449699/p3_okn4y4.png";
const p2 =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1601449699/p1_swqc8p.png";

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

const FloatingContainer = styled.div`
  width: 100%;
  height: 310px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const FloatingRow1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 1800px;

  &:hover {
    animation-play-state: paused;
  }

  animation: slide 300s linear infinite;

  @keyframes slide {
    0% {
      transform: translateX(0);
    }

    to {
      transform: translateX(-1920px);
    }
  }
`;

const FloatingRow2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 1800px;

  &:hover {
    animation-play-state: paused;
  }

  animation: reverseSlide 300s linear infinite;

  @keyframes reverseSlide {
    0% {
      transform: translateX(-920px);
    }

    to {
      transform: translateX(900px);
    }
  }
`;

const Reviews = () => (
  <Container>
    <Title>See what the others are getting done</Title>
    <Tab></Tab>
    <ReviewTasks>
      <FloatingContainer>
        {/* This is the 1st row */}
        <FloatingRow1>
          {/* card 1 */}
          <Card
            img={p1}
            price="823"
            title="Delivery"
            description="Moving queen size bed"
            href=""
            num="3"
          ></Card>
          {/* card 2 */}
          <Card
            img={p1}
            price="823"
            title="Delivery"
            description="Moving queen size bed"
            href=""
            num="3"
          ></Card>
          {/* card 3 */}
          <Card
            img={p1}
            price="823"
            title="Delivery"
            description="Moving queen size bed"
            href=""
            num="3"
          ></Card>
          {/* card 4 */}
          <Card
            img={p1}
            price="823"
            title="Delivery"
            description="Moving queen size bed"
            href=""
            num="3"
          ></Card>
          {/* card 5 */}
          <Card
            img={p1}
            price="823"
            title="Delivery"
            description="Moving queen size bed"
            href=""
            num="3"
          ></Card>
          {/* card 6 */}
          <Card
            img={p1}
            price="823"
            title="Delivery"
            description="Moving queen size bed"
            href=""
            num="3"
          ></Card>
        </FloatingRow1>
        {/* This is the 2nd row */}
        <FloatingRow2>
          {/* card 1 */}
          <Card
            img={p2}
            price="823"
            title="Delivery"
            description="Moving queen size bed"
            href=""
            num="3"
          ></Card>
          {/* card 2 */}
          <Card
            img={p2}
            price="823"
            title="Delivery"
            description="Moving queen size bed"
            href=""
            num="3"
          ></Card>
          {/* card 3 */}
          <Card
            img={p2}
            price="823"
            title="Delivery"
            description="Moving queen size bed"
            href=""
            num="3"
          ></Card>
          {/* card 4 */}
          <Card
            img={p2}
            price="823"
            title="Delivery"
            description="Moving queen size bed"
            href=""
            num="3"
          ></Card>
          {/* card 5 */}
          <Card
            img={p2}
            price="823"
            title="Delivery"
            description="Moving queen size bed"
            href=""
            num="3"
          ></Card>
          {/* card 6 */}
          <Card
            img={p2}
            price="823"
            title="Delivery"
            description="Moving queen size bed"
            href=""
            num="3"
          ></Card>
        </FloatingRow2>
      </FloatingContainer>
    </ReviewTasks>
    <Button className="get-started">Get started now</Button>
  </Container>
);

export default Reviews;
