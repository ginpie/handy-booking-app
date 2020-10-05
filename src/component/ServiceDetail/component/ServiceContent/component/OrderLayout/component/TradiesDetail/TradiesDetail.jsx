import React from 'react';
import styled from 'styled-components';
import samplePhoto from '../../../../assets/sample_avatar.jpg';
import TradiesInfo from '../TradiesInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Layout  = styled.div`
    display: flex;
`;

const Left = styled.div`
    width: 250px;
    text-align: center;
`;

const Right = styled.div`
    width: 350px;
`;

const Avatar = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 110px;
    margin: 30px 0;
`;

const Rating = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    margin: 0 auto;
`;

const RatingText = styled.p`
    margin: 0;
    font-size: 0.8rem;
`;

const AddressWrapper = styled.div`
    display: flex;
    width: 60%;
    padding-top: 10px;
    margin: 0 auto;
    text-align: left;
`;

const Address = styled.p`
    font-size: 0.8rem;
    margin-left: 20px;
    color: rgb(139, 137, 137);
    line-height: 1.4em;
`;

const IconWrapper = styled.div`
    margin: 0 5px;
`;

const TradiesDetail = () => (
    <Layout>   
        <Left>
            <Avatar src={samplePhoto} />
            <Rating>
                <RatingText>Rating:</RatingText>
                <IconWrapper><FontAwesomeIcon icon={faStar} color="rgb(253, 219, 58)" size="sm" /></IconWrapper>
                <IconWrapper><FontAwesomeIcon icon={faStar} color="rgb(253, 219, 58)" size="sm" /></IconWrapper>
                <IconWrapper><FontAwesomeIcon icon={faStar} color="rgb(253, 219, 58)" size="sm" /></IconWrapper>
            </Rating>
            <AddressWrapper>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" />
                <Address>
                    South Yarra VIC, <br/>
                    Australia<br/>
                    Member since 12th <br/>
                    Mar 2018
                </Address>
            </AddressWrapper>
        </Left>
        <Right><TradiesInfo /></Right>
    </Layout>
);

export default TradiesDetail;