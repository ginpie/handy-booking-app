import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import TradieCard from "../TradieCard";
import { tradieData } from "./tradieData";
import "./react-tabs.css";

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
        title={tradieData.tradie1.title}
        num={tradieData.tradie1.num}
        img={tradieData.tradie1.img}
        content={tradieData.tradie1.content}
        service={tradieData.tradie1.service}
      ></TradieCard>
    </TabPanel>
    <TabPanel>
      <TradieCard
        title={tradieData.tradie2.title}
        num={tradieData.tradie2.num}
        img={tradieData.tradie2.img}
        content={tradieData.tradie2.content}
        service={tradieData.tradie2.service}
      ></TradieCard>
    </TabPanel>
    <TabPanel>
      <TradieCard
        title={tradieData.tradie3.title}
        num={tradieData.tradie3.num}
        img={tradieData.tradie3.img}
        content={tradieData.tradie3.content}
        service={tradieData.tradie3.service}
      ></TradieCard>
    </TabPanel>
    <TabPanel>
      <TradieCard
        title={tradieData.tradie4.title}
        num={tradieData.tradie4.num}
        img={tradieData.tradie4.img}
        content={tradieData.tradie4.content}
        service={tradieData.tradie4.service}
      ></TradieCard>
    </TabPanel>
  </Tabs>
);
