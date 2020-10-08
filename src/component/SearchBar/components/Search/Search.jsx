import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  width: 100%;
  border: none;
  padding: 0;
  margin: 0 1px;
  display: flex;
  background-color: white;
`;

const Icon = ({ className }) => <i className={className}></i>;

const StyledIcon = styled(Icon)`
  width: 50px;
  font-size: 22px;
  align-self: center;
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  padding: 0 0 0 5px;
  font-size: small;

  &:focus {
    outline: none;
  }
`;

const StyledInput = ({ placeholder }) => (
  <Input type="text" placeholder={placeholder}></Input>
);

const Search = ({ icon, placeholder }) => (
  <Container>
    <StyledIcon className={icon}></StyledIcon>
    <StyledInput placeholder={placeholder}></StyledInput>
  </Container>
);

export default Search;
