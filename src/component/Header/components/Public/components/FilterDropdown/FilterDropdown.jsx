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
  box-shadow: rgba(0, 0, 0, 0.4) 10px 25px 50px 0;
  z-index: 100;
`;

const DropdownItem = styled.li`
  width: 100px;
  list-style-type: none;
  font-size: 0.8rem;
  overflow: hidden;
`;

const DropdownLink = styled.a`
  display: block;
  width: 100%;
  text-decoration: none;
  color: #626262;
  padding: 20px 0 20px 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #0270c2;
    cursor: pointer;
    background-color: #ccc;
  }
`;

const DropCalendar = styled.input`
  width: 250px;
  height: 50px;
  font-size: 20px;
  color: #626262;
`;

const DropSet = (type, content, click) => {
  return {
    link:
      content !== ""
        ? content.map((item) => {
            return (
              <DropdownItem>
                <DropdownLink href={`/${item}`} onClick={click}>
                  {item}
                </DropdownLink>
              </DropdownItem>
            );
          })
        : null,
    calendar: <DropCalendar type="date" min="2019-01-01" max="2025-12-31" />,
    nav:
      content !== ""
        ? content.map((item) => {
            return (
              <DropdownItem>
                <DropdownLink href={`/${item}`}>{item}</DropdownLink>
              </DropdownItem>
            );
          })
        : null,
  }[type];
};

const Dropdown = ({ content, type, clickTicket }) => (
  <Container>{DropSet(type, content, clickTicket)}</Container>
);

export default Dropdown;
