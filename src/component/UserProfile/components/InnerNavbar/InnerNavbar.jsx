import React, { Fragment } from 'react';
import styled from 'styled-components';
import InnerNavItem from './components/InnerNavItem';

const Wrapper = styled.div`
    width: 100%;
`;

const StyledHeader = styled.div`
    border-bottom: 2px solid #eaeaea;
`;

const InnerNavBar = ({navItems, currentInnerPage, setCurrentInnerPage}) => {
    return ( 
        <Wrapper>
            <StyledHeader>
                {navItems && navItems.map(item=>(
                    <Fragment key={item.key}>
                        <InnerNavItem 
                            value={item.value}
                            isActive={currentInnerPage===item.value}
                            setCurrentInnerPage={setCurrentInnerPage}
                        />
                    </Fragment>
                ))}
            </StyledHeader>
        </Wrapper>
     );
}
 
export default InnerNavBar;