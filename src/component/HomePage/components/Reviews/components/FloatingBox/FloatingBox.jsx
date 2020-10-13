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

const FloatingBox = ({ images, prices, titles, descriptions, hrefs, nums }) => (
  <FloatingContainer>
    {/* This is the 1st row */}
    <FloatingRow1>
      {Object.keys(images).map((i) => {
        return (
          <Card
            key={i}
            img={images[i]}
            price={prices[i]}
            title={titles[i]}
            description={descriptions[i]}
            href={hrefs[i]}
            num={nums[i]}
          ></Card>
        );
      })}
    </FloatingRow1>
    {/* This is the 2nd row */}
    <FloatingRow2>
      {Object.keys(images).map((i) => {
        return (
          <Card
            key={i}
            img={images[i]}
            price={prices[i]}
            title={titles[i]}
            description={descriptions[i]}
            href={hrefs[i]}
            num={nums[i]}
          ></Card>
        );
      })}
    </FloatingRow2>
  </FloatingContainer>
);

export default FloatingBox;
