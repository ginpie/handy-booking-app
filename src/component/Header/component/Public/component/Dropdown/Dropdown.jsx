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
`;

const DropdownItem = styled.li`
  list-style-type: none;
  padding: 10px 20px;
  font-size: 0.8rem;
`;

const DropdownLink = styled.a`
  text-decoration: none;
  color: #626262;
  font-weight: bold;

  &:hover {
    color: #000000;
    cursor: pointer;
  }
`;

const Dropdown = () => (
  <Container>
    <DropdownItem>
      <DropdownLink href="/cleaning">Cleaning</DropdownLink>
    </DropdownItem>
    <DropdownItem>
      <DropdownLink>Furniture Assembly</DropdownLink>
    </DropdownItem>
    <DropdownItem>
      <DropdownLink>Moving</DropdownLink>
    </DropdownItem>
    <DropdownItem>
      <DropdownLink>Electrical installation</DropdownLink>
    </DropdownItem>
    <DropdownItem>
      <DropdownLink>Handyman</DropdownLink>
    </DropdownItem>
  </Container>
);

export default Dropdown;
