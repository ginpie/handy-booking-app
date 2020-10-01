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
const EMAIL_REGEXP = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const FORM = {
  email: {
    label: "Email",
    type: "text",
    getErrorMessage: (value) => {
      if (!value) {
        return "Please enter your email address";
      }

      if (!EMAIL_REGEXP.test(value)) {
        return "Please enter a valid email address";
      }

      return "";
    },
  },
  password: {
    key: "password",
    label: "Password",
    type: "password",
    getErrorMessage: (value) => {
      if (!value) {
        return "Please enter your password";
      }

      return "";
    },
  },
  confirmPassword: {
    key: "confirmPassword",
    label: "Confirm password",
    type: "password",
    getErrorMessage: (value, data) => {
      if (!value) {
        return "Please enter your confirm password";
      }

      if (value !== data.password) {
        return "Your confirm password does not match";
      }

      return "";
    },
  },
};
class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        email: {
          value: "",
          touched: false,
        },
        password: {
          value: "",
          touched: false,
        },
        confirmPassword: {
          value: "",
          touched: false,
        },
      },
    };
    this.handleFormDataChange = this.handleFormDataChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  getErrorMessage(target) {
    const { formData } = this.state;
    const data = Object.keys(formData).reduce(
      (obj, key) => ({
        ...obj,
        [key]: formData[key].value,
      }),
      {}
    );

    return FORM[target].getErrorMessage(formData[target].value, data);
  }

  handleFormDataChange(target) {
    return (event) => {
      event.preventDefault();
      const { value } = event.target;

      this.setState((prevState) => ({
        formData: {
          ...prevState.formData,
          [target]: {
            value,
            touched: true,
          },
        },
      }));
    };
  }

  handleFormSubmit(event) {
    const { formData } = this.state;

    event.preventDefault();

    if (!this.isFormValid()) {
      console.log("There are validation errors");

      return;
    }

    console.log("Sign up...", formData);
  }

  isFormValid() {
    const { formData } = this.state;

    const errorMessages = Object.keys(formData)
      .map((key) => {
        const errorMessage = this.getErrorMessage(key);

        return errorMessage;
      })
      .filter((v) => !!v);

    return !errorMessages.length;
  }

  render() {
    const { formData } = this.state;
    const { onClose, onSignIn } = this.props;

    return (
      <Modal onClose={onClose}>
        <Modal.Header>Sign-Up</Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleFormSubmit}>
            {Object.keys(FORM).map((key) => {
              const { label, type } = FORM[key];

              const { value, touched } = formData[key];

              const errorMessage = touched ? this.getErrorMessage(key) : "";

              return (
                <FormItem
                  key={key}
                  htmlFor={key}
                  label={label}
                  errorMessage={errorMessage}
                >
                  <Input
                    id={key}
                    type={type}
                    error={errorMessage}
                    value={value}
                    onChange={this.handleFormDataChange(key)}
                  />
                </FormItem>
              );
            })}
            <FormItem>
              <Button
                disabled={!this.isFormValid()}
                width="100%"
                variant="success"
              >
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
