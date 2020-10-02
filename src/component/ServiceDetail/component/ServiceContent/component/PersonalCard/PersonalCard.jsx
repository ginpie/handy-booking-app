import React from 'react';
import styled from 'styled-components';
import photo from '../../assets/sample_avatar.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Card = styled.div`
    width: 230px;
    border: 1px rgb(175, 173, 173) solid;
    border-radius: 4px;
    padding: 8px;
    margin-right: 30px;
    margin-top: 20px;
    box-shadow: 1px 0px 1px rgb(172, 170, 170, 0.6), 0px 2px 2px rgb(142, 142, 146, 0.4);
    position: relative;
`;

const Title = styled.p`
    font-size: 0.7rem;
    font-weight: bolder;
    margin: 0;
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-right: 15px;
`;

const Label = styled.p`
    margin-bottom: 0;
    margin-right: 5px;
    font-size: 0.8rem;
    background-color: rgb(14, 135, 151);
    color: white;
    padding: 0 3px;
    margin: 2px 5px 2px 0;
    border-radius: 2px;
`;

const LableSets = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const ChooseBar = styled.div`
    width: 4px;
    height: 100%;
    background-color: rgb(14, 135, 151);
    position: absolute;
    top: 0px;
    right: 0px;
`;

const Stars = styled.div``;


const PersonalCard = () => (
    <Card>
        <Title>Name</Title>
        <Info>
            <Avatar src={photo} alt="Avatar" />
            <LableSets>
                <Label>lable</Label>
                <Label>lable</Label>
                <Label>lable</Label>
                <Label>lable</Label>
            </LableSets>
        </Info>
        <Stars>
            <FontAwesomeIcon icon={faStar} color="rgb(253, 219, 58)" size="sm" />
            <FontAwesomeIcon icon={faStar} color="rgb(253, 219, 58)" size="sm"  />
            <FontAwesomeIcon icon={faStar} color="rgb(253, 219, 58)" size="sm"  />
        </Stars>
        <ChooseBar />
    </Card>
);

export default PersonalCard;