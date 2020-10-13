import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  & ~ & {
    margin-top: 16px;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #292b32;
  margin-bottom: 8px;

  @media screen and (max-width: 900px) {
    margin-bottom: 0;
    text-align: left;
  }

  ${(props) =>
    props.error &&
    css`
      color: #e0446d;
    `}
`;

const ErrorMessage = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: #e0446d;
`;

const FormItem = ({ label, htmlFor, children, errorMessage }) => (
  <Wrapper>
    {label && (
      <Label error={errorMessage} htmlFor={htmlFor}>
        {label}
      </Label>
    )}
    {children}
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </Wrapper>
);

FormItem.defaultProps = {
  label: undefined,
  htmlFor: undefined,
  errorMessage: undefined,
};

FormItem.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  errorMessage: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormItem;
