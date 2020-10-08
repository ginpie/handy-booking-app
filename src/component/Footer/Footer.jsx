import React from "react";
import styled from "styled-components";
import Link from "./components/Link";

const Container = styled.footer`
  height: 300px;
  padding: 30px 50px;
  background-color: #a0a0a0;
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

const Title = styled.h5`
  font-size: 18px;
  font-weight: 400;
`;

const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  font-size: 13px;
  margin: 0 0 20px 0;
`;

const Text = styled.p`
  font-size: 13px;
  margin: 0;
`;

const Icon = styled.i`
  font-size: 25px;
  margin-right: 10px;
  color: ${(props) => props.color};
`;

const Footer = () => (
  <Container>
    <Wrapper>
      <Title>Our Advantage</Title>
      <Link href="/join-us">WHY CHOOSE US?</Link>
      <Link href="/service">Compare Trading Accounts</Link>
      <Link href="/contact">24 Support</Link>
    </Wrapper>

    <Wrapper>
      <Title>CONTACT US</Title>
      <Box>
        <Text>Call us</Text>
        <Text>1400-000-000</Text>
      </Box>
      <Box>
        <Text>Email us</Text>
        <Link href="mailto:info@1handyhandy.com">info@1handyhandy.com</Link>
      </Box>
    </Wrapper>

    <Wrapper>
      <Title>FOLLOW US ON</Title>
      <Box>
        <Link href="www.facebook.com">
          <Icon className="fab fa-facebook-square" color="#1b77f2"></Icon>
        </Link>
        <Link href="www.twitter.com">
          <Icon className="fab fa-twitter-square" color="#1fa1f1"></Icon>
        </Link>
        <Link href="www.instagram.com">
          <Icon className="fab fa-instagram-square" color="#c53466"></Icon>
        </Link>
      </Box>
    </Wrapper>
  </Container>
);

export default Footer;
