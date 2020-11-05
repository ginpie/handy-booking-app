import React, {useState, useEffect, Fragment} from 'react';
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

const ClosedOrders = () => {
    const [closedOrders, setClosedOrders] = useState([])

    useEffect(()=>{
        const fakeFetchClosedOrderData = async() => {
            setClosedOrders([
                {
                    orderName: "Furniture Assembly",
                    orderNumber: "Order1234",
                    traderName: "Long Ge",
                    otherInfo:"Lorem ipsum dolor sit",
                    orderStatus: "Completed",
                    orderPrice: "$200"
                }
            ]);
        }
        fakeFetchClosedOrderData()
    },[])

    return (
        <BoxContainer 
            title="Closed orders"
            needSearchBar
        >
            <Container>
                {(closedOrders.length !== 0)? (
                    closedOrders.map((order=>(
                        <Fragment key={order.orderNumber}>
                            <OrderItem order={order}/>
                        </Fragment>
                    )))
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