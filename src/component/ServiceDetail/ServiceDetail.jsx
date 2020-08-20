import React from 'react';
import Order from './component/Order';
import Profile from './component/Profile';

import style from './ServiceDetail.module.scss';

class ServiceDetail extends React.Component {
    constructor(props) {
        super(props);
        this.order = "Furniture Assembly";
        this.state = {
            order : this.order,
        }
    }

    render() {
        const order = this.state.order;
        return (
            <div className={style.page}>
                <div className={style.title}>
                    <p>{order}</p>
                </div>
                <Profile />
                <Order>{order}</Order>
            </div>
        )
    }
}

export default ServiceDetail;