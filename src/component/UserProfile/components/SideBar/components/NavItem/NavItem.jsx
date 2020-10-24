import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.button`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0px 10px 0px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    @media screen and (min-width: 1050px) {
        padding: 15px 0px 15px 0px;
    }
    &:focus {
        outline: 0;
    }
    ${(props)=>props.isActive && css`
        background-color: white;
        box-shadow:inset -3px 0px 0px 0px #41a1ad;
    `}
`;

const IconWrapper = styled.div`
    width:20px;
    display: flex;
    align-items: center;
    margin-left: 10%;
    @media screen and (min-width: 1050px) {
        width:25px;
    }
`;

const Icon = styled.img`
    width: 100%;
`;

const Text = styled.div`
    font-size: 17px;
    margin-left: 10px;
    font-weight: 500;
    display: flex;
    align-items: center;
    @media screen and (min-width: 1200px) {
        font-size: 20px;
        margin-left: 15px;
    }
`

const NavItem = ({icon, value, isActive, onPageChange}) => {
    return ( 
        <Wrapper isActive={isActive} onClick={()=>onPageChange(value)}>
            <IconWrapper>
                <Icon src={icon} alt="nav-icon"/>
            </IconWrapper>
            <Text>{value}</Text>
        </Wrapper>
     );
}
 
export default NavItem;