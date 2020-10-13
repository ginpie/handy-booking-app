import React from "react";
import Alert from "../../../Alert";
import PropTypes from "prop-types";
import Modal from "../../../Modal";
import NakedButton from "../NakedButton";
import styled from "styled-components";
import Button from "../../../../../Button";
import FormItem from "../../../../../FormItem";
import Input from "../../../../../Input";
import signIn, { error as Error } from "../../../../../../apis/signIn";
import withFetch from '../../../../../withFetch'
import withForm from '../../../../../withForm'
import form from "./form";
import compose from '../../../../../../utils/compose'
const Form = styled.form`
  padding: 16px 0;
`;

class SignInModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    const { onClose, onSignInSuccess,isFormValid,getData,fetch, } = this.props;
    event.preventDefault();
    if (!isFormValid()) {
      return;
    }
    const data = getData();
    fetch(()=>signIn(data),Error)
      .then((user) => {
        onClose();
        onSignInSuccess(user);
      })
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    const { onClose, 
      onSignUp,
      formData,
      getErrorMessage,
      handleFormDataChange,
      isFormValid, 
      error, 
      loading,
    
    } = this.props;
   
    return (
      <Modal onClose={onClose}>
        <Modal.Header>Sign In</Modal.Header>
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
              <Button
                disabled={!isFormValid() || loading}
                width="100%"
                variant="success"
              >
                {loading ? "loading" : "Sign In"}
              </Button>
            </FormItem>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          Not Member Yet?&nbsp;
          <NakedButton variant="link" onClick={onSignUp}>
            Sign Up now
          </NakedButton>
        </Modal.Footer>
      </Modal>
    );
  }
}
SignInModal.defaultProps = {
  error: undefined,
  loading: false,
};

SignInModal.propType = {
  onClose: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
  formData: PropTypes.objectOf(PropTypes.shape({
    value: PropTypes.string,
    touched: PropTypes.bool,
  })).isRequired,
  getData: PropTypes.func.isRequired,
  getErrorMessage: PropTypes.func.isRequired,
  handleFormDataChange: PropTypes.func.isRequired,
  isFormValid: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  error: PropTypes.shape({
    status: PropTypes.number,
  }),
  loading: PropTypes.bool,
};

const EnhancedSignInModal = compose(
  withForm(form),
  withFetch,
)(SignInModal);

export default EnhancedSignInModal;