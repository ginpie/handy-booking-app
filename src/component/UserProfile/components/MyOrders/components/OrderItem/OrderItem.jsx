import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import arrowIcon from '../../../icons/updownarrow.png';
import StarIcon from '@material-ui/icons/Star';

const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-bottom: 2px solid #c7c7c7;
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 13px;
    height: 500px;
    transition: 0.3s;
    ${(props) => !props.showAll && css`
        height: 80px;
    `}
    @media screen and (max-width: 768px) {
        height: 580px;
        ${(props) => !props.showAll && css`
        height: 80px;
    `}
    }
`;

const ContentContainer = styled.div`
    width: 90%;
    margin-bottom: 10px;
    ${(props) => props.showAll === false && css`
        display: flex;
        justify-content: space-between;
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

const InfoRow = styled.div`
    margin-top: 10px;
    display: flex;
    max-height: 50px;
    align-items: center;
`;

const Title = styled.div`
    font-weight: 500;
`;

const Info = styled.div`
    margin-left: 5px;
    text-decoration:underline;
`;

const MessageBox = styled.textarea`
    margin-top: 10px;
`;

const ArrowIcon = styled.img`
    width: 100%;
`;

const Right = styled.div`
    margin-right: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        margin-right: 20%;
    }
`;

const Left = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ServiceName = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

const LeftBottom = styled.div`
    display: flex;
    margin-left: -10px;
    @media screen and (max-width: 768px) {
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
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Date = styled.div`
    color: #c7c7c7;
    @media screen and (min-width: 768px) {
        display: none;
    }
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

const Star = styled(StarIcon)`
    color:#e4e5e9;
    ${(props) => props.ratingvalue <= (props.hoverrating || props.rating) && css`
        color: #ffc107;
    `}
`;

const StarLabel = styled.label`
    input[type="radio"] {
        display: none;   
    }
    cursor: pointer;
`;

const SubmitButton = styled.button`
    border: none;
    cursor: pointer;
    background: #fddb3a;
    padding: 8px 10px;
    border-radius: 5px;
`;

const DisplayOrderItem = ({order}) => {
    const [showAll, setShowAll] = useState(false);
    const [rating, setRating] = useState(null);
    const [hoverRating, setHoverRating] = useState(null);
    const [comment, setComment] = useState(null);

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
                            clean house
                        </ServiceName>
                    </InfoRow>
                    <InfoRow>
                        <Title>From:</Title>
                        <Info>Mingxin Dong</Info>
                        &nbsp; &nbsp;
                        <Title>Phone</Title>
                        <Info>0468925504</Info>     
                    </InfoRow>
                    <InfoRow>
                        <Title>Email:</Title>
                        <Info>Ming@trade.com</Info>
                        &nbsp; &nbsp;
                        <Title>Id:</Title>
                        <Info>order123456</Info>
                    </InfoRow>
                    <InfoRow>
                        <Title>
                            Message:
                        </Title>
                    </InfoRow>
                    <MessageBox
                        value="aaaaaaaaa"
                        cols="30" 
                        rows="5"
                        readOnly 
                    />
                    <InfoRow>
                        <Title>Price:</Title>
                        <Info>600$</Info>
                    </InfoRow>
                    <InfoRow>
                        <Title>Order Status:</Title>
                        <StatusButton>Completed</StatusButton>
                    </InfoRow>
                    <InfoRow>
                        <Title>date: </Title> 
                        <Info>08/10/2020</Info>
                    </InfoRow>
                    <InfoRow>
                        <Title>What do you think about the sevice</Title>
                    </InfoRow>
                    <InfoRow>
                        Rating: &nbsp;
                        {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1;
                            return (
                                <StarLabel key={i}>
                                    <input 
                                        type="radio" 
                                        name="rating" 
                                        value={ratingValue}
                                        onClick={()=>setRating(ratingValue)}
                                    />
                                    <Star 
                                        ratingvalue={ratingValue} 
                                        rating={rating} 
                                        hoverrating={hoverRating}
                                        onMouseEnter={() => setHoverRating(ratingValue)}
                                        onMouseLeave={()=>setHoverRating(null)}
                                    />
                                </StarLabel>
                            )
                        })}
                    </InfoRow>
                    <MessageBox
                        value={comment || ""}
                        onChange={(event) => setComment(event.target.value)}
                        cols="30" 
                        rows="5"
                        placeholder="Describe your experience.." 
                    />
                    <InfoRow>
                        <SubmitButton>Submit</SubmitButton>
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
                                clean house
                            </ServiceName>
                            <LeftBottom>
                                <LeftBottomItem>order123456</LeftBottomItem>
                                <LeftBottomItem>Suzy Denial</LeftBottomItem>
                                <LeftBottomItem border="none">08/10/2020</LeftBottomItem>
                                <Date>08/10/2020</Date>
                            </LeftBottom>
                        </Left>
                        <Right>
                            <StatusButton>completed</StatusButton>
                        </Right>
                    </ContentContainer>
             )}
        </Container>    
    );
}
 
export default DisplayOrderItem;