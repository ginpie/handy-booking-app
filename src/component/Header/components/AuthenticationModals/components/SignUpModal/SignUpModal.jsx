import React from "react";
import PropTypes from "prop-types";
import NakedButton from "../NakedButton";
import Modal from "../../../Modal";
import FormItem from "../../../../../FormItem";
import Button from "../../../../../Button";
import Input from "../../../../../Input";
import styled from "styled-components";
import form from "./form";
import signUpUser from "../../../../../../apis/signUpUser";
import withFetch from "../../../../../withFetch";
import withForm from "../../../../../withForm";
import signUpCustomer from "../../../../../../apis/signUpCustomer";
import signUpTradie from "../../../../../../apis/signUpTradie";
import Alert from "../../../Alert";
import compose from "../../../../../../utils/compose";
import withAuthentication from '../../../../../withAuthentication';
const Form = styled.form`
  padding: 16px 0;
`;

const Label = styled.label`
  font-size: 18px;
`;

const Select = styled.select`
  margin-left: 5px;
  height: 25px;
`;

const ERROR = {
  409: "Email Existed",
  400: "Please dont Hack ",
  404: "Something unexpect happen, try again later",
  500: "Something unexpect happen, try again later",
};



class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: {
        value: "customer",
        touched: false,
      },
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(event) {
    const { userType } = this.state;
    const {
      onClose,
      formData,
      isFormValid,
      getData,
      fetch,
      authentication,
    } = this.props;
    event.preventDefault();

    if (!isFormValid()) {
      return;
    }
    const data = getData();
    const email = formData.email.value;

    if (userType.value === "customer") {
      fetch(() => signUpUser(data)).then((user) => {
        onClose();
        authentication.setUser(user);
        
        signUpCustomer(email);

      });
    } else if (userType.value === "tradie") {
      fetch(() => signUpUser(data)).then((user) => {
        onClose();
        authentication.setUser(user);
        signUpTradie(email);

      });
    } else {
      fetch(() => signUpUser(data)).then((user) => {
        onClose();
        authentication.setUser(user);
        signUpCustomer(email);
        signUpTradie(email);


      });
    }
  }

  handleChange(event) {
    this.setState({ userType: { value: event.target.value } });
  }
  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    const { userType } = this.state;
    const {
      onClose,
      onSignIn,
      formData,
      getErrorMessage,
      handleFormDataChange,
      isFormValid,
      error,
      loading,
    } = this.props;
    return (
      <Modal onClose={onClose}>
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleFormSubmit}>
            {error && (
              <FormItem>
                <Alert>{ERROR[error.status]}</Alert>
              </FormItem>
            )}
            {Object.keys(form).map((key) => {
              const { label, type } = form[key];

              const { value, touched } = formData[key];

              const errorMessage = touched ? getErrorMessage(key) : "";

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
                    onChange={handleFormDataChange(key)}
                    ref={(input) => {
                      if (form[key] === form.email) this.nameInput = input;
                    }}
                  />
                </FormItem>
              );
            })}
            <FormItem>
              <Label>
                Sign up as:
                <Select value={userType.value} onChange={this.handleChange}>
                  <option value="customer">Customer</option>
                  <option value="tradie">Tradie</option>
                  <option value="both">Both</option>
                </Select>
              </Label>
            </FormItem>
            <FormItem>
              <Button
                disabled={!isFormValid() || loading}
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
SignUpModal.defaultProps = {
  error: undefined,
  loading: false,
};
SignUpModal.propType = {
  onClose: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
  formData: PropTypes.objectOf(
    PropTypes.shape({
      value: PropTypes.string,
      touched: PropTypes.bool,
    })
  ).isRequired,
  getData: PropTypes.func.isRequired,
  getErrorMessage: PropTypes.func.isRequired,
  handleFormDataChange: PropTypes.func.isRequired,
  isFormValid: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  authentication: PropTypes.shape({
    setUser: PropTypes.func,
  }).isRequired,
  error: PropTypes.shape({
    status: PropTypes.number,
  }),
  loading: PropTypes.bool,
};
const EnhancedSignUpModal = compose(
  withForm(form),
  withFetch,
  withAuthentication,
)(SignUpModal);


export default EnhancedSignUpModal;
