import React, { Fragment } from 'react';
import styled from 'styled-components';
import BoxContainer from '../../../BoxContainer';
import CustomEmptyContent from '../../../CustomEmptyContent';
import OrderItem from '../OrderItem';
import boxIcon from '../../../icons/box.png';

const Container = styled.div`
    width: 100%;
    overflow:auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    &::-webkit-scrollbar-thumb {
        background: #888; 
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

`;

const CurrentOrders = ({currentOrders, currentTradieOrders}) => {

    const showOrders = () => {
        if(currentOrders.length !== 0 && currentTradieOrders.length !== 0) {
            return (
                currentOrders.concat(currentTradieOrders).map((order=>(
                    <Fragment key={order._id}>
                        <OrderItem order={order} orderType="current"/>
                    </Fragment>
                )))
            )
        } else if (currentOrders.length !== 0) {
            return (
                currentOrders.map((order=>(
                    <Fragment key={order._id}>
                        <OrderItem order={order} orderType="current"/>
                    </Fragment>
                )))
            )
        } else if (currentTradieOrders.length !== 0) {
            currentTradieOrders.map((order=>(
                <Fragment key={order._id}>
                    <OrderItem order={order} orderType="current"/>
                </Fragment>
            )))
        }
    }

    return ( 
        <BoxContainer 
            title="Current orders"
            needSearchBar
        >   
            <Container>
                {(currentOrders.length !== 0 || currentTradieOrders.length !== 0) ? (
                    showOrders()
                ):(
                    <CustomEmptyContent>
                        <CustomEmptyContent.Icon src={boxIcon}/>
                        <CustomEmptyContent.Title>Nothing Here</CustomEmptyContent.Title>
                        <CustomEmptyContent.Text>Your opened orders appears here when you create first order</CustomEmptyContent.Text>
                        <CustomEmptyContent.Button>Place order</CustomEmptyContent.Button>
                    </CustomEmptyContent>
                )}
            </Container>
        </BoxContainer>
     );
}
 
export default CurrentOrders;