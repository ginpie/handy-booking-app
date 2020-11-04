import React from 'react';
import styled from 'styled-components';
import OrderInput from './component/OrderInput';
import withFetch from "../../../../../../../withFetch";
import withForm from "../../../../../../../withForm";
import compose from "../../../../../../../../utils/compose";
// import form from "./form";
import createInquiry from '../../../../../../../../apis/createInquiry'
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

class OrderForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inquiryForm:{
                smallFurniture: "",
                mediumFurniture: "",
                largeFurniture: "",
                name: "",
                email: "",
                phone: "",
                address1: "",
                address2: "",
                suburt: "",
                state: "",
                postcode: "",
                message: "",
            }
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        // return (event)=>{
        //     event.preventDefault();
        //     const {value} = event.target;
        //     this.setState((preState)=>({
        //         inquiryForm:{
        //             ...preState.inquiryForm,
        //             [target]:value
        //         }
        //     }));
        // }
        const target = event.target;
        
        const name = target.name;
        
        const value = target.value;
        
        this.setState((prevState)=>({
            inquiryForm:{
                ...prevState.inquiryForm,
                [name]: value}
          }));
        // this.setState({ inquiryForm: { value: event.target.value } });
      }
    handleFormSubmit(event){
        const { inquiryForm } = this.state;
        // const {
        //     fetch,
        //   } = this.props;
        event.preventDefault();
        // const {address1, address2} = 
        // const email = formData.email.value;
        // fetch(() => createInquiry(inquiryForm)).then((id) => {
        //     // customerSendInquiry(id)
        //   });
        createInquiry(inquiryForm)
    }
    render(){
        return (
        <Form onSubmit={this.handleFormSubmit}>
        <FormHeader>Order Details</FormHeader>
        <InputRow>
            <OrderInput name="smallFurniture" type="number"  value={this.state.inquiryForm.smallFurniture} onChange={this.handleChange}>Small Furniture:</OrderInput>
            <OrderInput name="mediumFurniture" type="number" value={this.state.inquiryForm.mediumFurniture} onChange={this.handleChange}>Medium Furniture:</OrderInput>
            <OrderInput name="largeFurniture" type="number" value={this.state.inquiryForm.largeFurniture} onChange={this.handleChange}>Large Furniture:</OrderInput>
        </InputRow>
        <InputRow>
            <OrderInput name="name" type="text" value={this.state.inquiryForm.name} onChange={this.handleChange}>Name:</OrderInput>
            <OrderInput name="email" type="text" value={this.state.inquiryForm.email} onChange={this.handleChange}>Email:</OrderInput>
        </InputRow>
        <InputRow>
            <OrderInput name="phone" type="text" value={this.state.inquiryForm.phone} onChange={this.handleChange}>Phone No:</OrderInput>
            <OrderInput name="address1" type="text" value={this.state.inquiryForm.address1} onChange={this.handleChange}>Address1:</OrderInput>
        </InputRow>
        <InputRow>
            <OrderInput name="address2" type="text" value={this.state.inquiryForm.address2} onChange={this.handleChange}>Address2:</OrderInput>
            <OrderInput name="suburt" type="text" value={this.state.inquiryForm.suburt} onChange={this.handleChange}>Suburb:</OrderInput>
        </InputRow>
        <InputRow>
            <OrderInput name="state" type="text" value={this.state.inquiryForm.state} onChange={this.handleChange}>State:</OrderInput>
            <OrderInput name="postcode" type="text" value={this.state.inquiryForm.postcode} onChange={this.handleChange}>Postcode:</OrderInput>
        </InputRow>
        <Label htmlFor="addition" >Additional Details</Label>
        <TextArea name="addition"  value={this.state.inquiryForm.addition} onChange={this.handleChange} />
        <SubmitWrapper>
            <SubmitBtn type="submit" value="GET PRICE NOW" />
        </SubmitWrapper>
    </Form>
        )
    }
}

// const EnhancedOrderForm = compose(
//     // withForm(form),
//     withFetch,
//   )(OrderForm);
  
  
// export default EnhancedOrderForm;
  
export default OrderForm;