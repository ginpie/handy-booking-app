import React, {Fragment} from 'react';
import styled from 'styled-components'; 
import BoxContainer from '../../../BoxContainer';
import OrderItem from '../OrderItem';
import CustomEmptyContent from '../../../CustomEmptyContent';
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

const ClosedOrders = ({closedOrders, closedTradieOrders}) => {
    const showOrders = () => {
        if(closedOrders.length !== 0 && closedTradieOrders.length !== 0) {
            return (
                closedOrders.concat(closedTradieOrders).map(((order,index)=>(
                    <Fragment key={index}>
                        <OrderItem order={order} orderType="closed"/>
                    </Fragment>
                )))
            )
        } else if (closedOrders.length !== 0) {
            return (
                closedOrders.map((order=>(
                    <Fragment key={order._id}>
                        <OrderItem order={order} orderType="closed"/>
                    </Fragment>
                )))
            )
        } else if (closedTradieOrders.length !== 0) {
            closedTradieOrders.map((order=>(
                <Fragment key={order._id}>
                    <OrderItem order={order} orderType="closed"/>
                </Fragment>
            )))
        }
    }
    return (
        <BoxContainer 
            title="Closed orders"
            needSearchBar
        >
            <Container>
                {(closedOrders.length !== 0)? (
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
 
export default ClosedOrders;