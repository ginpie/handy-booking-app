import React from 'react';
import Order from './component/Order';
import Profile from './component/Profile';

import style from './ServiceDetail.module.css';

const ServiceDetail = () => (
    <div className={style.page}>
        <Profile />
        <Order>Furniture Assembly</Order>
    </div>
);

export default ServiceDetail;