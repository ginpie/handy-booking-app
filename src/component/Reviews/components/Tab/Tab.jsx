import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const TabsWrapper = styled.div``;

const Tabs = styled.ul`
  list-style-type: none;
  display: flex;

  .active {
    color: #0270c2;

    &:after {
      opacity: 1;
      transform: translateY(1px);
    }
  }
`;

const TabItem = styled.p`
  width: auto;
  margin: 0 20px;
  cursor: pointer;
  font-size: 20px;
  padding-bottom: 5px;
  border-bottom: transparent 10px solid;

  &:hover {
    color: #0270c2;

    &:after {
      opacity: 1;
      transform: translateY(1px);
      transition: linear 0.3s;
    }
  }

  &:after {
    content: "";
    position: relative;
    display: block;
    top: 6px;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background: #0270c2;
    transition: all 0.15s cubic-bezier(0.615, 0.19, 0.305, 0.91);
    transform: translateY(-4px);
    opacity: 0;
  }
`;

const Tab = () => (
  <Container>
    <TabsWrapper>
      <Tabs>
        <li>
          <TabItem>Moving home</TabItem>
        </li>
        <li>
          <TabItem>Cleaning Service</TabItem>
        </li>
        <li>
          <TabItem>Furniture Assembly</TabItem>
        </li>
        <li>
          <TabItem>Gardening</TabItem>
        </li>
      </Tabs>
    </TabsWrapper>
  </Container>
);

export default Tab;
