import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import OrderInput from "./component/OrderInput";
import createInquiry from "../../../../../../../../apis/createInquiry";
import { AuthenticationContext } from "../../../../../../../withAuthentication";
import AuthenticationModals from "../../../../../../../Header/components/AuthenticationModals";
import withAuthentication from "../../../../../../../withAuthentication";
import compose from "../../../../../../../../utils/compose";
const Form = styled.form`
  margin: 40px 0;
`;

const FormHeader = styled.h2`
  font-size: 0.9rem;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  flex-wrap: wrap;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid rgb(228, 228, 228);
  border-radius: 2px;
  background-color: rgb(249, 251, 253);
`;

const Label = styled.label`
  margin-top: 15px;
  font-size: 0.7rem;
`;

const SubmitWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const SubmitBtn = styled.input`
  background-color: rgb(31, 169, 187);
  width: 160px;
  height: 40px;
  color: white;
  font-size: 0.8rem;
  font-weight: bolder;
  border: 1px transparent solid;
  border-radius: 5px;
`;

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inquiryForm: {
        smallFurniture: 0,
        mediumFurniture: 0,
        largeFurniture: 0,
        name: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        suburb: "",
        state: "",
        postcode: "",
        message: "",
      },
      authenticationModal: null,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setAuthenticationModal = this.setAuthenticationModal.bind(this);
  }

  setAuthenticationModal(target) {
    return (event) => {
      if (event) {
        event.preventDefault();
      }

      this.setState({
        authenticationModal: target,
      });
    };
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState((prevState) => ({
      inquiryForm: {
        ...prevState.inquiryForm,
        [name]: value,
      },
    }));
  }
  handleFormSubmit(event) {
    const {
      smallFurniture,
      mediumFurniture,
      largeFurniture,
      name,
      email,
      phone,
      address1,
      address2,
      suburb,
      state,
      postcode,
      message,
    } = this.state.inquiryForm;
    const { authentication } = this.props;
    const tradieId = this.props.tradieId;
    const customerId = authentication.user.email;

    const inquiryData = {
      address: {
        address1,
        address2,
        suburb,
        state,
        zipCode: postcode,
      },
      contactNo: phone,
      email,
      name,
      message: `small furniture: ${smallFurniture} medium furniture: ${mediumFurniture} large furniture: ${largeFurniture} ${message}`,
      tradies: tradieId,
      customers: customerId,
    };
    if (authentication.user) {
      createInquiry(inquiryData);
    }
  }
  render() {
    const { authenticationModal } = this.state;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormHeader>Order Details</FormHeader>
        <InputRow>
          <OrderInput
            name="smallFurniture"
            type="number"
            value={this.state.inquiryForm.smallFurniture}
            onChange={this.handleChange}
          >
            Small Furniture:
          </OrderInput>
          <OrderInput
            name="mediumFurniture"
            type="number"
            value={this.state.inquiryForm.mediumFurniture}
            onChange={this.handleChange}
          >
            Medium Furniture:
          </OrderInput>
          <OrderInput
            name="largeFurniture"
            type="number"
            value={this.state.inquiryForm.largeFurniture}
            onChange={this.handleChange}
          >
            Large Furniture:
          </OrderInput>
        </InputRow>
        <InputRow>
          <OrderInput
            name="name"
            type="text"
            value={this.state.inquiryForm.name}
            onChange={this.handleChange}
          >
            Name:
          </OrderInput>
          <OrderInput
            name="email"
            type="text"
            value={this.state.inquiryForm.email}
            onChange={this.handleChange}
          >
            Email:
          </OrderInput>
        </InputRow>
        <InputRow>
          <OrderInput
            name="phone"
            type="text"
            value={this.state.inquiryForm.phone}
            onChange={this.handleChange}
          >
            Phone No:
          </OrderInput>
          <OrderInput
            name="address1"
            type="text"
            value={this.state.inquiryForm.address1}
            onChange={this.handleChange}
          >
            Address1:
          </OrderInput>
        </InputRow>
        <InputRow>
          <OrderInput
            name="address2"
            type="text"
            value={this.state.inquiryForm.address2}
            onChange={this.handleChange}
          >
            Address2:
          </OrderInput>
          <OrderInput
            name="suburb"
            type="text"
            value={this.state.inquiryForm.suburb}
            onChange={this.handleChange}
          >
            Suburb:
          </OrderInput>
        </InputRow>
        <InputRow>
          <OrderInput
            name="state"
            type="text"
            value={this.state.inquiryForm.state}
            onChange={this.handleChange}
          >
            State:
          </OrderInput>
          <OrderInput
            name="postcode"
            type="text"
            value={this.state.inquiryForm.postcode}
            onChange={this.handleChange}
          >
            Postcode:
          </OrderInput>
        </InputRow>
        <Label htmlFor="message">Additional Details</Label>
        <TextArea
          name="message"
          value={this.state.inquiryForm.message}
          onChange={this.handleChange}
        />
        <SubmitWrapper>
          <AuthenticationContext.Consumer>
            {(Authentication) =>
              Authentication.user ? (
                <SubmitBtn
                  type="submit"
                  value="GET PRICE NOW"
                  onClick={this.handleFormSubmit}
                />
              ) : (
                <>
                  <SubmitBtn
                    type="submit"
                    value="Sign In"
                    onClick={this.setAuthenticationModal("signIn")}
                  />
                  {authenticationModal && (
                    <CSSTransition
                      in={!(authenticationModal === null)}
                      appear={true}
                      timeout={1000}
                      classNames="model"
                    >
                      <AuthenticationModals
                        initialModal={authenticationModal}
                        onClose={this.setAuthenticationModal()}
                      />
                    </CSSTransition>
                  )}
                </>
              )
            }
          </AuthenticationContext.Consumer>
        </SubmitWrapper>
      </Form>
    );
  }
}

const EnhancedOrderForm = compose(withAuthentication)(OrderForm);

export default EnhancedOrderForm;
