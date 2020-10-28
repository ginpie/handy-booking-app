import React from "react";
import styled from "styled-components";
import Card from "../Card";

const FloatingContainer = styled.div`
  width: 100vw;
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
  width: auto;

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
  width: auto;

  &:hover {
    animation-play-state: paused;
  }

  animation: reverseSlide 300s linear infinite;

  @keyframes reverseSlide {
    0% {
      transform: translateX(-400px);
    }

    to {
      transform: translateX(1520px);
    }
  }
`;

const FloatingBox = ({ cards, hrefs }) => (
  <FloatingContainer>
    {/* This is the 1st row */}
    <FloatingRow1>
      {cards.slice(0, 10).map((i, e) => {
        return (
          <Card
            key={e}
            img={i.avatar}
            price={i.price}
            title={i.title}
            description={i.comment}
            href={hrefs}
            rating={i.rating}
          ></Card>
        );
      })}
    </FloatingRow1>
    {/* This is the 2nd row */}
    <FloatingRow2>
      {cards.slice(10, 20).map((i, e) => {
        return (
          <Card
            key={e}
            img={i.avatar}
            price={i.price}
            title={i.title}
            description={i.comment}
            href={hrefs}
            rating={i.rating}
          ></Card>
        );
      })}
    </FloatingRow2>
  </FloatingContainer>
);

export default FloatingBox;
