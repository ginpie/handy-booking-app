import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  font-size: 0.7rem;
  display: flex;
  margin: 5px 0;
`;

const Label = styled.label`
  width: 30%;
`;

const Input = styled.input`
  margin-left: 10px;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 2px;
  background-color: rgb(249, 251, 253);

  ${(props) => {
    const style = {
      number: css`
        width: 30%;
        max-width: 32px;
      `,
      text: css`
        width: 70%;
        max-width: 150px;
      `,
    }[props.type];
    return style;
  }}

  height: 20px;
`;

const OrderInput = (props) => (
  <Container>
    <Label htmlFor={props.name}>{props.children}</Label>
    <Input
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  </Container>
);

export default OrderInput;
