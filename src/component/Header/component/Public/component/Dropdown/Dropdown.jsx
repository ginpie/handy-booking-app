import styled from "styled-components";
import React from "react";

const Container = styled.ul`
  background-color: #ffffff;
  position: absolute;
  left: 0;
  padding: 0;
  margin-top: 10px;
  transition: ease 0.2s;
  border-radius: 5px;
  display: flex;
  min-height: 300px;
  overflow: hidden;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #efefef;
  width: 200px;
`;

const Title = styled.h4`
  margin: 20px 20px 0 20px;
`;

const Description = styled.p`
  margin: 10px 20px 20px 20px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const DropdownItem = styled.li`
  list-style-type: none;
  padding: 10px 20px;
  font-size: 0.8rem;

  &:hover {
    text-decoration: none;
    background-color: #cdcdcd;
  }
`;

const DropdownLink = styled.a`
  text-decoration: none;
  color: #626262;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
`;

const Dropdown = () => (
  <Container>
    <LeftWrapper>
      <Title>What are you looking for?</Title>
      <Description>Pick a type of task.</Description>
    </LeftWrapper>
    <RightWrapper>
      <DropdownItem>
        <DropdownLink href="/cleaning">Cleaning</DropdownLink>
      </DropdownItem>
      <DropdownItem>
        <DropdownLink href="/furnitureassembly">
          Furniture Assembly
        </DropdownLink>
      </DropdownItem>
      <DropdownItem>
        <DropdownLink href="/moving">Moving</DropdownLink>
      </DropdownItem>
      <DropdownItem>
        <DropdownLink href="/electricalinstallation">
          Electrical installation
        </DropdownLink>
      </DropdownItem>
      <DropdownItem>
        <DropdownLink href="/handyman">Handyman</DropdownLink>
      </DropdownItem>
    </RightWrapper>
  </Container>
);

export default Dropdown;
