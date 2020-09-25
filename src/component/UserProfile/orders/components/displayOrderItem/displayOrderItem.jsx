import React from 'react';
import moreIcon from '../../../icons/more.png'
import './displayOrderItem.scss'

const DisplayOrderItem = ({order}) => {
    return (
        <div>
            {order &&
                <div className="displayOrderItem">
                    <div className="displayOrderItem__info">
                        <div className="displayOrderItem__info--orderName">
                            {order.orderName}
                        </div>
                        <div className="displayOrderItem__info--info">
                            <div className="displayOrderItem__info--info--orderNumber">{order.orderNumber}</div>
                            <div className="displayOrderItem__info--info--trader">{order.traderName}</div>
                            <div className="displayOrderItem__info--info--other">{order.otherInfo}</div>
                        </div>
                    </div>
                    <div className="displayOrderItem__status">
                        <div className="displayOrderItem__status--button">
                            {order.orderStatus}
                        </div>
                    </div>
                    <div className="displayOrderItem__price">
                        {order.orderPrice}
                    </div>
                    <div className="displayOrderItem__more">
                        <div className="displayOrderItem__more--button">
                            <img src={moreIcon} alt="MoreIcon"/>
                        </div>
                    </div>
                </div>
            } 
        </div>
     );
}
 
export default DisplayOrderItem;