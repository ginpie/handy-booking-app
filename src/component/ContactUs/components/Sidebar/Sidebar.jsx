import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  padding: 20px;
`;

const Box = styled.div`
  width: 90%;
  height: 400px;
  border: black solid 1px;
  box-sizing: border-box;
  padding: 10px 30px;
`;

const Title = styled.h3``;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  display: block;
  margin: 10px 0;
`;

const Link = styled.a``;

const SideBar = () => (
  <Container>
    <Box>
      <Title>Trade Categories</Title>
      <List>
        <Item>
          <Link href="">Cleaning</Link>
        </Item>
        <Item>
          <Link href="">Furniture Assembly</Link>
        </Item>
        <Item>
          <Link href="">Moving</Link>
        </Item>
        <Item>
          <Link href="">Electric Installation</Link>
        </Item>
        <Item>
          <Link href="">Handyman</Link>
        </Item>
      </List>
    </Box>
  </Container>
);

export default SideBar;
