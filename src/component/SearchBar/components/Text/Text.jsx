import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  color: white;
  font-size: 50px;
  text-shadow: 2px 2px 5px gray;
  width: 150px;
  margin: 10px 0;
`;

const Subtitle = styled.h3`
  color: white;
  font-size: medium;
  text-shadow: 2px 2px 2px gray;
  margin: 10px 0;
`;

const Container = styled.div`
  margin: 0 auto 0 10%;
`;

const Text = ({ title, subtitle }) => (
  <Container>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

export default Text;
