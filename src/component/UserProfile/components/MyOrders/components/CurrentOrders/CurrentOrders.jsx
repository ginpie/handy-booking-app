import React, {useState, useEffect, Fragment} from 'react';
import BoxContainer from '../../../BoxContainer';
import CustomEmptyContent from '../../../CustomEmptyContent';
import OrderItem from '../OrderItem';
import boxIcon from '../../../icons/box.png';

const CurrentOrders = () => {
    const [currentOrders, setCurrentOrders] = useState([]);

    // useEffect(()=>{
    //     const fakeFetchCurrentOrderData = async() => {
    //         setCurrentOrders([
    //             {
    //                 orderName: "Furniture Assembly",
    //                 orderNumber: "Order1234",
    //                 traderName: "Long Ge",
    //                 otherInfo:"Lorem ipsum dolor sit",
    //                 orderStatus: "Completed",
    //                 orderPrice: "$200"
    //             }
    //         ]);
    //     }
    //     fakeFetchCurrentOrderData()
    // },[])


    return ( 
        <BoxContainer 
            title="Current orders"
            needSearchBar
        >
            {(currentOrders.length !== 0) ? (
                currentOrders.map((order=>(
                    <Fragment key={order.orderNumber}>
                        <OrderItem order={order} key={order.Number}/>
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
        </BoxContainer>
     );
}
 
export default CurrentOrders;