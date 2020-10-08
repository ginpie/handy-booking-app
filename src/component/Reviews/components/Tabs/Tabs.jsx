import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FloatingBox from "../FloatingBox/FloatingBox";

import "./react-tabs.css";

import { cardData } from "./cardData";

export default () => (
  <Tabs>
    <TabList>
      <Tab>Cleaning</Tab>
      <Tab>Moving</Tab>
      <Tab>Furniture Assembly</Tab>
      <Tab>Installation</Tab>
    </TabList>

    <TabPanel>
      <FloatingBox
        images={cardData.tab1.row1.images}
        prices={cardData.tab1.row1.prices}
        titles={cardData.tab1.row1.titles}
        descriptions={cardData.tab1.row1.descriptions}
        hrefs={cardData.tab1.row1.hrefs}
        nums={cardData.tab1.row1.nums}
      />
    </TabPanel>
    <TabPanel>
      <FloatingBox
        images={cardData.tab2.row1.images}
        prices={cardData.tab2.row1.prices}
        titles={cardData.tab2.row1.titles}
        descriptions={cardData.tab2.row1.descriptions}
        hrefs={cardData.tab2.row1.hrefs}
        nums={cardData.tab2.row1.nums}
      />
    </TabPanel>
    <TabPanel>
      <FloatingBox
        images={cardData.tab3.row1.images}
        prices={cardData.tab3.row1.prices}
        titles={cardData.tab3.row1.titles}
        descriptions={cardData.tab3.row1.descriptions}
        hrefs={cardData.tab3.row1.hrefs}
        nums={cardData.tab3.row1.nums}
      />
    </TabPanel>
    <TabPanel>
      <FloatingBox
        images={cardData.tab4.row1.images}
        prices={cardData.tab4.row1.prices}
        titles={cardData.tab4.row1.titles}
        descriptions={cardData.tab4.row1.descriptions}
        hrefs={cardData.tab4.row1.hrefs}
        nums={cardData.tab4.row1.nums}
      />
    </TabPanel>
  </Tabs>
);
