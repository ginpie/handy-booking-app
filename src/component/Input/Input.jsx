import styled, { css } from "styled-components";

const Input = styled.input`
  display: block;

  box-sizing: border-box;
  color: #292b32;
  font-size: 14px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dadada;
  width: 100%;
  ${(props) =>
    props.error &&
    css`
      color: #e0466d;
      border-color: #e0466d;
    `}
`;

export default Input;
