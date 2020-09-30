import React from "react";
import PropTypes from "prop-types";
import NakedButton from "../../../../../NakedButton";
import Modal from "../../../Modal";
import FormItem from "../../../../../FormItem";
import Button from "../../../../../Button";
import Input from "../../../../../Input";
import styled from "styled-components";

const Form = styled.div`
  padding: 16px 0;
`;

const SignInModal = ({ onClose, onSignUp }) => (
  <Modal onClose={onClose}>
    <Modal.Header>Sign-In</Modal.Header>
    <Modal.Body>
      <Form>
        <FormItem htmlFor="email" label="Email">
          <Input id="email" />
        </FormItem>
        <FormItem htmlFor="password" label="Password">
          <Input id="password" type="password" />
        </FormItem>
        <FormItem>
          <Button width="100%" variant="success">
            Sign In
          </Button>
        </FormItem>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      Not a member yet?&nbsp;
      <NakedButton variant="link" onClick={onSignUp}>
        Sign-Up
      </NakedButton>
    </Modal.Footer>
  </Modal>
);
SignInModal.propType = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};
export default SignInModal;
