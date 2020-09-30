import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Wrapper = styled.div`
  & ~ & {
    margin-top: 16px;
  }
`;
const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  color: #292b32;
`;

const FormItem = ({ label, htmlFor, children }) => (
  <Wrapper>
    {label && <Label htmlFor={htmlFor}>{label}</Label>}
    {children}
  </Wrapper>
);

FormItem.defaultProps = {
  label: undefined,
  htmlFor: undefined,
};
FormItem.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
};



export default FormItem;
