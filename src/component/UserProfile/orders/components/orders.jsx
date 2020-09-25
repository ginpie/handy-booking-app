import React, {Fragment, useState} from 'react';
import ContentHeader from '../../contentHeader/contentHeader';
import InnerNavBar from '../../innerNavbar/innerNavbar';
import CurrentOrders from './currentOrders/currentOrders';
import DraftOrders from './draftsOrder/draftsOrder';
import ClosedOrders from './closedOrders/closedOrders';
import '../style/components/orders.scss'

const MyOrders = () => {
    const [currentInnerPage, setCurrentInnerPage] = useState('CURRENT');

    const innerNavItems = [
        {key:"CURRENT", value:"CURRENT", content:(<CurrentOrders />)},
        {key:"DRAFTS", value:"DRAFTS", content:(<DraftOrders />)},
        {key:"CLOSED", value:"CLOSED", content:(<ClosedOrders />)},
    ]

    return ( 
        <div className="orders">
            <div className="orders__top">
                <ContentHeader buttonName="New order">My Orders</ContentHeader>
            </div>
            <div className="orders__nav">
                <InnerNavBar 
                navItems={innerNavItems}
                currentInnerPage={currentInnerPage}
                setCurrentInnerPage={setCurrentInnerPage}
                />
            </div>
            <div className="orders__box">
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
            </div>
        </div>
     );
}
 
export default MyOrders;