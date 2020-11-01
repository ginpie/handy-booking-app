
import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const IconWrapper = styled.div`
    ${props => props.span && css`
        margin: 0 5px;
    `}
`;

const RatingRender = (rating, span) => {
    let ratingElements = [];
    for (let i = 0; i < rating; i++) {
        ratingElements.push(<IconWrapper span={span}><FontAwesomeIcon icon={faStar} color="rgb(253, 219, 58)" size="sm" /></IconWrapper>);
    }
    for (let j = 0; j < 5 - rating; j++) {
        ratingElements.push(<IconWrapper span={span}><FontAwesomeIcon icon={faStar} color="rgb(128, 128, 128)" size="sm" /></IconWrapper>);
    }
    return ratingElements;
}

export default RatingRender;