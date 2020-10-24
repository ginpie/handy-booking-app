import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import Header from '../Header';
import InnerNavBar from '../InnerNavbar';
import CurrentOrders from './components/CurrentOrders';
import ClosedOrders from './components/ClosedOrders';
import NewOrderModal from './components/NewOrderModal';

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

const MyOrders = () => {
    const [currentInnerPage, setCurrentInnerPage] = useState('CURRENT');
    const [showModal, setShowModal] = useState(false)

    const innerNavItems = [
        {key:"CURRENT", value:"CURRENT", content:(<CurrentOrders />)},
        {key:"CLOSED", value:"CLOSED", content:(<ClosedOrders />)},
    ]

    const handleShowModal = (event) => {
        event.preventDefault();
        setShowModal(!showModal);
    }
    return ( 
        <Container>
            <HeaderWrapper>
                <Header>
                    <Header.Title>My Order</Header.Title>
                    <Header.Button onClick={handleShowModal}>New order</Header.Button>
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
            {showModal && <NewOrderModal onClose={handleShowModal}/>}
        </Container>
     );
}
 
export default MyOrders;