import React from 'react';
import styled from 'styled-components';
import StyledButton from '../StyledButton';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.div`
    font-size: 35px;
    font-weight: 700;
`;


const Header = ({children}) => {
    return ( 
        <Wrapper>
            {children}
        </Wrapper>
     );
}

Header.Title = Title;
Header.Button = StyledButton;

 
export default Header;