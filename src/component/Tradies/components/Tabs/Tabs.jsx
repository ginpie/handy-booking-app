import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import TradieCard from "../TradieCard";

import "./react-tabs.css";

const p4 =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1601461565/p4_mqsmvq.jpg";

const p5 =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1601461559/p1_yheyhg.jpg";

const p6 =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1601461559/p6_llhv2d.jpg";

const p7 =
  "https://res.cloudinary.com/dr99oorie/image/upload/v1601461558/p2_ukti3b.jpg";

export default () => (
  <Tabs>
    <TabList>
      <Tab>Alice</Tab>
      <Tab>Benedict</Tab>
      <Tab>Catherine</Tab>
      <Tab>Dennis</Tab>
    </TabList>

    <TabPanel>
      <TradieCard
        title="Alice"
        num={5}
        img={p4}
        content="A sparky by trade, Alice jumped onboard when he went back to studying. Here's how Handyman fit in with her busy lifestyle..."
        service="handyman, electrician, delivery"
      ></TradieCard>
    </TabPanel>
    <TabPanel>
      <TradieCard
        title="Benedict"
        num={5}
        img={p5}
        content="In-between jobs, Benedict was looking for a way to earn some extra cash... Maybe even using his clown school skills!"
        service="handyman, electrician, delivery"
      ></TradieCard>
    </TabPanel>
    <TabPanel>
      <TradieCard
        title="Catherine"
        num={5}
        img={p6}
        content="Returning to the workforce as a single mum, Catherine had to find something that could be flexible and cover the cost of childcare."
        service="handyman, electrician, delivery"
      ></TradieCard>
    </TabPanel>
    <TabPanel>
      <TradieCard
        title="Dennis"
        num={5}
        img={p7}
        content="In-between jobs, Dennis was looking for a way to earn some extra cash... Maybe even using his clown school skills!"
        service="handyman, electrician, delivery"
      ></TradieCard>
    </TabPanel>
  </Tabs>
);
