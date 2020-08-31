import React from 'react';
import Order from './component/Order';
import Profile from './component/Profile';

import style from './ServiceDetail.module.scss';

class ServiceDetail extends React.Component {
    constructor(props) {
        super(props);
        const order = "Furniture Assembly";
        const rating = [
            {orderId: 1, comment: "Great", rating: 5},
            {orderId: 2, comment: "Wonderful", rating: 5},
            {orderId: 3, comment: "Not Bad", rating: 4},
        ];
        this.state = {
            order,
            rating,
        }
    }

    render() {
        const order = this.state.order;
        const rating = this.state.rating;
        return (
            <div className={style.page}>
                <Profile className={style.column} order={order} rating={rating} />
                <Order className={style.order_form}>{order}</Order>
            </div>
        )
    }
}

export default ServiceDetail;