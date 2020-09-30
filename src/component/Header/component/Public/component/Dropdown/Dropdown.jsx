import styled from "styled-components";
import React from "react";

const Container = styled.ul`
  background-color: #ffffff;
  position: absolute;
  left: 0;
  padding: 0;
  /* margin-top: 10px; */
  transition: ease 0.2s;
  border-radius: 5px;
  z-index: 100;
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

const DropCalendar = styled.input`
`;

const DropSet = (type, content, click) => {
  return ( {
    "link": (
      (content != "")? content.map((item) => {
        return (
          <DropdownItem>
            <DropdownLink href={`/${item}`} onClick={click}>{item}</DropdownLink>
          </DropdownItem>
        )
      }) : null
    ),
    "calendar": <DropCalendar type="date"/>,
    "nav": (
      (content != "")? content.map((item) => {
        return (
          <DropdownItem>
            <DropdownLink href={`/${item}`}>{item}</DropdownLink>
          </DropdownItem>
        )
      }) : null
    )
  }[type]);
}

const Dropdown = ({
  content,
  type,
  clickTicket
}) => (
  <Container>
    {DropSet(type, content, clickTicket)}
  </Container>
);

export default Dropdown;
