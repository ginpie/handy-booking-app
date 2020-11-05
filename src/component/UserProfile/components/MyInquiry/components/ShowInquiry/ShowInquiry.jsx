import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import arrowIcon from '../../../icons/updownarrow.png';

const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-bottom: 2px solid #c7c7c7;
    font-size: 13px;
    display: flex;
    justify-content: center;
    position: relative;
    height: 300px;
    transition: 0.3s;
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
    margin-left: 10px;
    :focus {
        outline:0;
    }
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


const ShowInquiery = ({inquiry}) => {
    const [showAll, setShowAll] = useState(false)

    const handleShow = (event) => {
        event.preventDefault();
        setShowAll(!showAll)
    }
    return ( 
        <Container showAll={showAll}>
            {showAll ? (
                <ContentContainer>
                    <InfoRow>
                        <ServiceName>
                            {inquiry.serviceName}
                        </ServiceName>
                    </InfoRow>
                    <InfoRow>
                        <Title>From:</Title>
                        <Info>{inquiry.tradie}</Info>
                        &nbsp; &nbsp;
                        <Title>Phone:</Title>
                        <Info>{inquiry.phoneNumber}</Info>
                    </InfoRow>
                    <InfoRow>
                        <Title>Email:</Title>
                        <Info>{inquiry.email}</Info>
                        &nbsp; &nbsp;
                        <Title>OrderId:</Title>
                        <Info>{inquiry.inquiryId}</Info>
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
                    <InfoRow>
                        <Title>Price:</Title>
                        <Info>{inquiry.price}</Info>
                    </InfoRow>
                    <InfoRow>
                        <Title>Order Status:</Title>
                        <StatusButton>{inquiry.status}</StatusButton>
                    </InfoRow>
                    <InfoRow>
                        <Title>Date:</Title>
                        <Info>{inquiry.createTime}</Info>
                    </InfoRow>
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
                            {inquiry.serviceName}
                        </ServiceName>
                        <LeftBottom>
                            <LeftBottomItem>{inquiry.tradie}</LeftBottomItem>
                            <LeftBottomItem>{inquiry.inquiryId}</LeftBottomItem>
                            <LeftBottomItem border="none">{inquiry.price}</LeftBottomItem>
                            <Price>Price: {inquiry.price}</Price>
                        </LeftBottom>
                    </Left>
                    <Right>
                        <StatusButton>{inquiry.status}</StatusButton>
                    </Right>
                </ContentContainer>
            )}
        </Container>
     );
}
 
export default ShowInquiery;