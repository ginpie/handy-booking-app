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

const DropSet = (type, content) => {
  return ( {
    "link": (
      (content != null)? content.map((item) => {
        return (
          <DropdownItem>
            <DropdownLink href={`/${item}`}>{item}</DropdownLink>
          </DropdownItem>
        )
      }) : null
    ),
    "calendar": <DropCalendar type="date"/>,
  }[type]);
}

const Dropdown = (props) => (
  <Container>
    {console.log({"link":1, "calendar": 2}["link"])}
    {DropSet(props.type, props.content)}
  </Container>
);

export default Dropdown;
