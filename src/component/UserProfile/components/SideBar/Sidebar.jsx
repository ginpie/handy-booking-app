import React from 'react';
import styled, {css} from 'styled-components';
import Avatar from '../Avatar';
import NavItem from './components/NavItem';

const Wrapper = styled.div`
    flex:1;
    min-height: 100vh;
    background-color: #fddb3a;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px) {
        display:initial;
        position: absolute;
        width: 0;
        height: 100%;
        z-index: 1;
        overflow: hidden;
        transition: 0.5s;
        ${(props) => props.displaySidebar ? (css` width: 300px;`) : (css`width: 0px;`)}
    }
`;

const AvatarWrapper = styled.div`
    width: 30%;
    margin-top: 30px;
    @media screen and (max-width: 768px) {
        display: none;
    }    
`;

const Name = styled.div`
    margin-top: 10px;
    font-size: 18px;
    font-weight: 650;
    @media screen and (min-width: 1024px){
        font-size: 22px;
    }
    @media screen and (min-width: 1200px){
        font-size: 28px;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavItemsWrapper = styled.div`
    width: 100%;
    margin-top: 15px;
    @media screen and (max-width: 768px) {
        margin-top: 100px;
    }
`;

const CloseSidebarButton = styled.button`
    position: absolute;
    top:10px;
    right:20px;
    font-size: 36px;
    border:none;
    background: transparent;
    cursor: pointer;
    :focus {
        outline: 0;
    }
    @media screen and (min-width: 769px) {
        display: none;
    }
`;

const SideBar = ({fakeUserData: { firstName, lastName }, navItems, currentPage, onPageChange, displaySidebar, onCloseSidebar}) => {
    return ( 
        <Wrapper displaySidebar={displaySidebar}>
            <CloseSidebarButton onClick={onCloseSidebar}>x</CloseSidebarButton>
            <AvatarWrapper>
                <Avatar />
            </AvatarWrapper>
            <Name>
                {firstName}&nbsp;
                {lastName}
            </Name>
            <NavItemsWrapper>
                {navItems && navItems.map(item => (
                    <NavItem 
                        value={item.value}
                        icon={item.icon}
                        isActive={currentPage === item.value}
                        onPageChange={onPageChange}
                        key={item.key}
                    />
                ))}
            </NavItemsWrapper>
        </Wrapper>
     );
}
 
export default SideBar;
