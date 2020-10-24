import React, {useState, Fragment} from 'react';
import styled from 'styled-components';
import Header from '../Header';
import InnerNavBar from '../InnerNavbar';
import CurrentInquiry from './components/CurrentInquiry';
import ClosedInquiry from './components/ClosedInquiry';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderWrapper = styled.div`
    width: 90%;
    margin-top: 30px;
`;

const InnerNavBarWrapper = styled.div`
    width: 90%;
    margin-top: 30px;
`;

const ContentWrapper = styled.div`
    width: 85%;
    margin-top: 30px;
    height: 500px;
    @media screen and (min-width: 1200px) {
        width: 80%;
    }
`;

const MyInquiry = () => {
    const [currentInnerPage, setCurrentInnerPage] = useState('CURRENT');

    const innerNavItems = [
        {key:"CURRENT", value:"CURRENT", content:(<CurrentInquiry />)},
        {key:"CLOSED", value:"CLOSED", content:(<ClosedInquiry />)},
    ]
    return ( 
        <Container>
            <HeaderWrapper>
                <Header>
                    <Header.Title>My Inquiry</Header.Title>
                </Header>
            </HeaderWrapper>
            <InnerNavBarWrapper>
                <InnerNavBar 
                    navItems={innerNavItems}
                    currentInnerPage={currentInnerPage}
                    setCurrentInnerPage={setCurrentInnerPage}
                />
            </InnerNavBarWrapper>
            <ContentWrapper>
                {innerNavItems.map(item=>{
                    if(currentInnerPage!==item.value){
                        return null
                    }
                    return (
                        <Fragment key={item.key}>
                            {item.content}
                        </Fragment>
                    )
                })}
            </ContentWrapper>
        </Container>
     );
}
 
export default MyInquiry;