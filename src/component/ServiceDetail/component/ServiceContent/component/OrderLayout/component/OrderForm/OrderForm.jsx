import React from 'react';
import styled from 'styled-components';
import OrderInput from './component/OrderInput';

const Form = styled.form`
    margin: 40px 46px 0 46px;
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

const OrderForm = () => (
    <Form>
        <FormHeader>Order Details</FormHeader>
        <InputRow>
            <OrderInput name="small_furniture" type="number">Small Furniture:</OrderInput>
            <OrderInput name="medium_furniture" type="number">Medium Furniture:</OrderInput>
            <OrderInput name="large_furniture" type="number">Large Furniture:</OrderInput>
        </InputRow>
        <InputRow>
            {/* <OrderInput name="name" type="text">Name:</OrderInput> */}
            <OrderInput name="name" type="text">Name:</OrderInput>
            <OrderInput name="email" type="text">Email:</OrderInput>
        </InputRow>
        <InputRow>
            <OrderInput name="phone" type="text">Phone No:</OrderInput>
            <OrderInput name="address" type="text">Address:</OrderInput>
        </InputRow>
        <InputRow>
            <OrderInput name="address2" type="text">Address2:</OrderInput>
            <OrderInput name="suburt" type="text">Suburb:</OrderInput>
        </InputRow>
        <InputRow>
            <OrderInput name="state" type="text">State:</OrderInput>
            <OrderInput name="postcode" type="text">Postcode:</OrderInput>
        </InputRow>
        <Label for="addition">Additional Details</Label>
        <TextArea name="addition" />
        <SubmitWrapper>
            <SubmitBtn type="submit" value="GET PRICE NOW" />
        </SubmitWrapper>
    </Form>
);

export default OrderForm;