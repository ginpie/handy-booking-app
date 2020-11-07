import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { store } from 'react-notifications-component';
import deleteInquiry from '../../../../../../apis/deleteInquiry';
import acceptInquiry from '../../../../../../apis/acceptInquiry';
import addPriceToInquiry from '../../../../../../apis/addPriceToInquiry';
import arrowIcon from '../../../icons/updownarrow.png';

const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-bottom: 2px solid #c7c7c7;
    font-size: 13px;
    display: flex;
    justify-content: center;
    position: relative;
    height: 250px;
    transition: 0.3s;
    ${(props)=>props.inquiry.tradie && css`
        height: 330px;
    `}
    ${(props) => props.inquiry.totalPrice && props.inquiry.customer && css`
        height: 320px;
    `}
    @media screen and (max-width: 768px) {
        height: 300px;
        font-size: 10px;
        ${(props) => !props.showAll && css`
        height: 80px;
    `}}
    ${(props) => !props.showAll && css`
        height: 80px;
    `}
`;

const ContentContainer = styled.div`
    width: 90%;
    margin-bottom: 10px;
    ${(props) => props.showAll === false && css`
        display: flex;
        justify-content: space-between;
    `}
`;


const InfoRow = styled.div`
    margin-top: 10px;
    display: flex;
    max-height: 50px;
    align-items:center;
`;

const MessageBox = styled.textarea`
    margin-top: 10px;
`;

const StatusButton = styled.button`
    border: none;
    color: white;
    padding: 6px 15px;
    background-color: #32c2ad;
    font-size: 13px;
    border-radius: 10px;
    cursor: pointer;
    :focus {
        outline:0;
    }
    ${(props)=>props.type==="red" && css`
        background-color:#e65b65;
        margin:0px;
    `}
`;

const ArrowButton = styled.button`
    position: absolute;
    top:10px;
    right:2.5%;
    width: 50px;
    border: none;
    background: transparent;
    cursor: pointer;
    :focus {
        outline: 0;
    }
`;

const ArrowIcon = styled.img`
    width: 100%;
`;

const ServiceName = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

const Right = styled.div`
    margin-right: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 500px) {
        margin-right: 20%;
    }
`;

const Left = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const LeftBottom = styled.div`
    display: flex;
    margin-left: -10px;
    @media screen and (max-width: 500px) {
        margin-left: 0px;
    }
`;

const LeftBottomItem = styled.div`
    color: #c7c7c7;
    border-right: 1px solid #c7c7c7;
    padding: 0px 10px;
    ${(props) => props.border === "none" && css`
        border: none;
    `}
    @media screen and (max-width: 500px) {
        display: none;
    }
`;

const Price = styled.div`
    color: #c7c7c7;
    @media screen and (min-width: 500px) {
        display: none;
    }
`;

const Title = styled.div`
    font-weight: 500;
`;

const Info = styled.div`
    margin-left: 5px;
    text-decoration:underline;
`;

const AddPrice = styled.input`
    width: 60px;
    margin-left: 10px;
`;


const ShowInquiery = ({inquiry}) => {
    const [showAll, setShowAll] = useState(false)
    const [price, setPrice] = useState('')

    const handleShow = (event) => {
        event.preventDefault();
        setShowAll(!showAll)
    }

    const handleDelete = async(event) => {
        event.preventDefault();
        await deleteInquiry(inquiry._id);
        window.location.reload();
    }

    const handleAccept = async(event) => {
        event.preventDefault();
        await acceptInquiry(inquiry._id);
        store.addNotification({
            title:"Succusful",
            message:"Succusful Accept inqury",
            type:"info",
            container: "top-center",
            animationIn: ["animate__animated", "animate__zoomIn"],
            animationOut: ["animate__animated", "animate__zoomOut"],
            dismiss: {
              duration: 2000,
              onScreen: true
            }
          })
        //   window.location.reload();
    }

    const handleSubmitPrice = async(event) => {
        event.preventDefault();
        const data = {
            "totalPrice" : price
        }
        await addPriceToInquiry(inquiry._id, data)
        store.addNotification({
            title:"Succusful",
            message:"Succusful update price",
            type:"info",
            container: "top-center",
            animationIn: ["animate__animated", "animate__zoomIn"],
            animationOut: ["animate__animated", "animate__zoomOut"],
            dismiss: {
              duration: 2000,
              onScreen: true
            }
          })
        //   window.location.reload();
    }
    return ( 
        <Container showAll={showAll} inquiry={inquiry}>
            {showAll ? (
                <ContentContainer>
                    <InfoRow>
                        <ServiceName>
                            {inquiry._id}
                        </ServiceName>
                    </InfoRow>
                    <InfoRow>
                        <Title>From:</Title>
                        <Info>{inquiry.name}</Info>
                        &nbsp; &nbsp;
                        <Title>Phone:</Title>
                        <Info>{inquiry.contactNo}</Info>
                    </InfoRow>
                    <InfoRow>
                        <Title>Email:</Title>
                        <Info>{inquiry.email}</Info>
                    </InfoRow>
                    <InfoRow>
                        <Title>
                            Message:
                        </Title>
                    </InfoRow>
                    <MessageBox
                        value={inquiry.message}
                        cols="30" 
                        rows="5"
                        readOnly 
                    />
                    {inquiry.totalPrice && inquiry.customer && (
                        <>
                        <InfoRow>
                            <Title>Price:</Title>
                            <Info>{`${inquiry.totalPrice}$`}</Info>
                        </InfoRow>
                        <InfoRow>
                            <StatusButton onClick={handleAccept}>Accept Order</StatusButton>
                        </InfoRow>
                        </>
                    )}
                    {inquiry.tradie && (
                        <InfoRow>
                            <Title>Address: </Title>
                            <Info>{`${inquiry.address.address1}, ${inquiry.address.suburb}, ${inquiry.address.state}, ${inquiry.address.zipCode || ""}`}</Info>
                        </InfoRow>
                    )}
                    {inquiry.customer && (
                        <InfoRow>
                            <StatusButton type="red" onClick={handleDelete}>Delete Inquiry</StatusButton>
                        </InfoRow>
                    )}
                    {inquiry.tradie && inquiry.totalPrice &&(
                        <InfoRow>
                            <Title>Current Price:</Title>
                            <Info>{`${inquiry.totalPrice}$`}</Info>
                        </InfoRow>
                    )}
                    {inquiry.tradie && (
                        <>
                            <InfoRow>
                                <Title>Enter Your Price:</Title>
                                <AddPrice type="number" value={price} onChange={(event) => setPrice(event.currentTarget.value)}/>
                            </InfoRow>
                            <InfoRow>
                                <StatusButton onClick={handleSubmitPrice} >Submit</StatusButton>
                            </InfoRow>
                        </>
                    )}
                    <ArrowButton
                        onClick={handleShow}
                    >
                        <ArrowIcon src={arrowIcon} alt="arrow"/>
                    </ArrowButton>
                </ContentContainer>
            ):(
                <ContentContainer showAll={showAll}>
                    <ArrowButton
                        onClick={handleShow}
                    >
                        <ArrowIcon src={arrowIcon} alt="arrow"/>
                    </ArrowButton>
                    <Left>
                        <ServiceName>
                            {inquiry._id}
                        </ServiceName>
                        <LeftBottom>
                            <LeftBottomItem>{inquiry.name}</LeftBottomItem>
                            <LeftBottomItem>{inquiry.email}</LeftBottomItem>
                            <LeftBottomItem border="none">{inquiry.contactNo}</LeftBottomItem>
                            {inquiry.totalPrice && (
                                <Price>Price: {inquiry.totalPrice}$</Price>
                            )}
                        </LeftBottom>
                    </Left>
                    <Right>
                        {inquiry.customer &&(
                            <StatusButton type="red" onClick={handleDelete}>Delete</StatusButton>
                        )}
                    </Right>
                </ContentContainer>
            )}
        </Container>
     );
}
 
export default ShowInquiery;