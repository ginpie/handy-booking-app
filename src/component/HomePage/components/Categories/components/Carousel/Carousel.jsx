import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 150px;
`;

const StyledCell = styled.div`
  width: 20%;
  height: 200px;
  margin-right: 10px;
  counter-increment: gallery-cell;
`;

const Link = styled.a`
  text-decoration: none;
  color: #000;
  width: 200px;
`;

const IconBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffda44;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.i`
  text-align: center;
  font-size: 40px;
`;

const Cell = ({ href, icon, description }) => (
  <StyledCell>
    <Link href={href}>
      <IconBox>
        <Icon className={icon}></Icon>
      </IconBox>
      <Job>{description}</Job>
    </Link>
  </StyledCell>
);

const Job = styled.p`
  width: 100px;
  text-align: center;
`;

const Carousel = ({ href, icon, description }) => (
  <Wrapper>
    <Cell href={href} icon={icon} description={description}></Cell>
  </Wrapper>
);

export default Carousel;
