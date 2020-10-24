import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
    font-size: 22px;
    color: white;
`;

const Logo = () => {
    return ( 
        <StyledLogo className="logo">LOGO.com</StyledLogo>
     );
}
 
export default Logo;