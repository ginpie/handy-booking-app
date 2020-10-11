import React from "react";
import PropTypes from "prop-types";
import NakedButton from "../../../../../NakedButton";
import Modal from "../../../Modal";
import FormItem from "../../../../../FormItem";
import Button from "../../../../../Button";
import Input from "../../../../../Input";
import styled from "styled-components";
import form from "./form";
import signUpUser from "../../../../../../apis/signUpUser";

import signUpCustomer from "../../../../../../apis/signUpCustomer";
import signUpTradie from "../../../../../../apis/signUpTradie";
import Alert from "../../../Alert";

const Form = styled.form`
  padding: 16px 0;
`;

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: false,
      userType: {
        value: "customer",
        touched: false,
      },
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
    this.handleChange = this.handleChange.bind(this);
  }
  getData() {
    const { formData } = this.state;
    const data = Object.keys(formData).reduce(
      (obj, key) => ({
        ...obj,
        [key]: formData[key].value,
      }),
      {}
    );
    return data;
  }

  getErrorMessage(target) {
    const { formData } = this.state;
    const data = this.getData();

    return form[target].getErrorMessage(formData[target].value, data);
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
    const { userType, formData } = this.state;
    const { onClose, onSignUpSuccess } = this.props;
    event.preventDefault();

    this.setState({
      error: null,
      loading: true,
    });

    if (!this.isFormValid()) {
      console.log("There are validation errors");

      return;
    }
    const data = this.getData();
    const email = formData.email.value;

    if (userType.value === "customer") {
      signUpUser(data)
        .then((res) => {
          this.setState({
            loading: false,
          });
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((user) => {
          onClose();
          onSignUpSuccess(user);
          signUpCustomer(email).then((res) => {
            if (!res.ok) {
              throw res;
            }
            return res.json();
          });
        })
        .catch((error) => {
          if (error.status === 409) {
            this.setState({
              error: "Email Existed",
            });
            return;
          }
          this.setState({
            error: "Something unexpect happen, try again later",
          });
          throw error;
        });
    } else if (userType.value === "tradie") {
      signUpUser(data)
        .then((res) => {
          this.setState({
            loading: false,
          });
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((user) => {
          onClose();
          onSignUpSuccess(user);
          signUpTradie(email).then((res) => {
            if (!res.ok) {
              throw res;
            }
            return res.json();
          });
        })
        .catch((error) => {
          if (error.status === 409) {
            this.setState({
              error: "Email Existed",
            });
            return;
          }

          this.setState({
            error: "Something unexpect happen, try again later",
          });
          throw error;
        });
    } else {
      signUpUser(data)
        .then((res) => {
          this.setState({
            loading: false,
          });
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((user) => {
          onClose();
          onSignUpSuccess(user);
          signUpCustomer(email).then((res) => {
            if (!res.ok) {
              throw res;
            }
            // return res.json();
          });
          signUpTradie(email).then((res) => {
            if (!res.ok) {
              throw res;
            }
            // return res.json();
          });
        })
        .catch((error) => {
          if (error.status === 409) {
            this.setState({
              error: "Email Existed",
            });
            return;
          }

          this.setState({
            error: "Something unexpect happen, try again later",
          });
          throw error;
        });
    }
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
  handleChange(event) {
    this.setState({ userType: { value: event.target.value } });
  }
  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    const { formData, error, loading, userType } = this.state;
    const { onClose, onSignIn } = this.props;
    return (
      <Modal onClose={onClose}>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleFormSubmit}>
            {error && (
              <FormItem>
                <Alert>{error}</Alert>
              </FormItem>
            )}
            {Object.keys(form).map((key) => {
              const { label, type } = form[key];

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
                    ref={(input) => {
                      if (form[key] === form.email) this.nameInput = input;
                    }}
                  />
                </FormItem>
              );
            })}
            <FormItem>
              <label>
                Who You Wanna To Be:
                <select value={userType.value} onChange={this.handleChange}>
                  <option value="customer">Customer</option>
                  <option value="tradie">Tradie</option>
                  <option value="both">Both</option>
                </select>
              </label>
            </FormItem>
            <FormItem>
              <Button
                disabled={!this.isFormValid() || loading}
                width="100%"
                variant="success"
              >
                {loading ? "loading" : "Sign up"}
              </Button>
            </FormItem>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          Already a member?&nbsp;
          <NakedButton variant="link" onClick={onSignIn}>
            Sign in now
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
