import React from "react";
import PropTypes from "prop-types";
import NakedButton from "../../../../../NakedButton";
import Modal from "../../../Modal";
import FormItem from "../../../../../FormItem";
import Button from "../../../../../Button";
import Input from "../../../../../Input";
import styled from "styled-components";

const Form = styled.form`
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
      error: "",
      loading: false,
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
    event.preventDefault();

    this.setState({
      error: "",
      loading: true,
    });

    if (!this.isFormValid()) {
      console.log("There are validation errors");

      return;
    }
    const data = this.getData();

    fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        this.setState({
          loading: false,
        });
        if (res.status !== 200) {
          throw res;
        }
        return res.json();
      })
      .then(() => {
        console.log("User Created");
      })
      .catch((error) => {
        if (error.status === 409) {
          this.setState({
            error: "Email Existed",
          });
          return;
        }

        this.setState({ error: "Something unexpect happen, try again later" });
      });
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
    const { formData, error, loading } = this.state;
    const { onClose, onSignIn } = this.props;

    return (
      <Modal onClose={onClose}>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleFormSubmit}>
            {error}
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
