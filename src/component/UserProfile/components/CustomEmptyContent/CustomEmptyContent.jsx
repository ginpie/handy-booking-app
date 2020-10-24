import React from 'react';
import StyledButton from '../StyledButton';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Icon = styled.img`
    width: 120px;
    margin-top: 100px;

    ${(props) => props.size && css`
        width: ${props.size};
        margin-top: 20px;
    `}
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 650;
    margin-top: 20px;
`;

const Text = styled.div`
    font-size: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const CustomEmptyContent = ({children}) => (<Wrapper>{children}</Wrapper>);

CustomEmptyContent.Icon = ({src, size}) => (
    <Icon src={src} size={size} alt="box-icon"/>
);
CustomEmptyContent.Title = Title
CustomEmptyContent.Text = Text
CustomEmptyContent.Button = StyledButton;
 
export default CustomEmptyContent;