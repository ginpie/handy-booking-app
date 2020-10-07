import React from "react";
import styled from "styled-components";

const LogoContainer = styled.a`
  width: 50px;
  height: 50px;
  margin-left: 40px;
  margin-right: 30px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo = () => (
  <LogoContainer href="/">
    <Img src="https://res.cloudinary.com/dfcalhv9i/image/upload/v1600845305/handyman/logo_egnpb4.png" />
  </LogoContainer>
);

export default Logo;
