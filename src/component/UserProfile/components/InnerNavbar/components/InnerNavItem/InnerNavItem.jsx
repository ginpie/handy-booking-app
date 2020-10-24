import React from 'react';
import styled, { css } from 'styled-components';

const NavLink = styled.button`
    font-size: 16px;
    font-weight: 500;
    padding: 10px 16px;
    border: none;
    background-color: transparent;
    &:focus {
        outline: 0;
    }
    &:hover {
        color: #41a1ad;
        cursor: pointer;
    }

    ${(props)=>props.isActive && css`
        color: #41a1ad;
        box-shadow:inset 0px -2px 0px 0px  #41a1ad;
    `}
`;

const InnerNavItem = ({value, setCurrentInnerPage, isActive}) => {
    return ( 
        <NavLink isActive={isActive} onClick={()=>setCurrentInnerPage(value)}>
            {value}
        </NavLink>
     );
}
 
export default InnerNavItem;