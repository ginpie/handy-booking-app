import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Card from "../Card";

import "./react-tabs.css";

const p1 =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1601449699/p3_okn4y4.png";
const p2 =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1601449699/p1_swqc8p.png";

const p4 =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1601461565/p4_mqsmvq.jpg";

const p5 =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1601461559/p1_yheyhg.jpg";

const p6 =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1601461559/p6_llhv2d.jpg";

const p7 =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1601461558/p2_ukti3b.jpg";

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

export default () => (
  <Tabs>
    <TabList>
      <Tab>Alice</Tab>
      <Tab>Benedict</Tab>
      <Tab>Catherine</Tab>
      <Tab>Dennis</Tab>
    </TabList>

    <TabPanel>
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
    </TabPanel>
    <TabPanel></TabPanel>
    <TabPanel></TabPanel>
    <TabPanel></TabPanel>
  </Tabs>
);
