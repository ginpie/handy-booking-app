import React from "react";
import styled from "styled-components";

const LogoContainer = styled.a`
  width: 150px;
  height: auto;
  margin-left: auto;
  margin-right: 30px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo = () => (
  <LogoContainer href="/">
    <Img src="https://res.cloudinary.com/dr99oorie/image/upload/v1602123495/1handyhandy_copy_bqibrg.png" />
  </LogoContainer>
);

export default Logo;
