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

const FORM = [
  {
    key: "email",
    label: "Email",
  },
  {
    key: "password",
    label: "Password",
    type: "password",
  },
  {
    key: "confimpassword",
    label: "Confim-Password",
    type: "password",
  },
];

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        email: "",
        password: "",
        confirmpassword: "",
      },
    };
    this.handleFormDataChange = this.handleFormDataChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormDataChange(target) {
    return (event) => {
      const { value } = event.target;
      event.preventDefault();

      this.setState((prevState) => ({
        forData: {
          ...prevState.formData,
          [target]: value,
        },
      }));
    };
  }

  handleFormSubmit(event) {
    const { formData } = this.state;
    event.preventDefault();
    console.log(formData);
  }
  render() {
    const { onClose, onSignIn } = this.props;
    return (
      <Modal onClose={onClose}>
        <Modal.Header>Sign-Up</Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleFormSubmit}>
            {FORM.map(({ key, label, type }) => (
              <FormItem key={key} htmlFor={key} label={label}>
                <Input
                  onChange={this.handleFormDataChange(key)}
                  id={key}
                  type={type}
                />
              </FormItem>
            ))}
            <FormItem>
              <Button width="100%" variant="success">
                Sign Up
              </Button>
            </FormItem>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          Already Member?&nbsp;
          <NakedButton variant="link" onClick={onSignIn}>
            Sign-In
          </NakedButton>
        </Modal.Footer>
      </Modal>
    );
  }
}

SignUpModal.propType = {
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};
export default SignUpModal;
