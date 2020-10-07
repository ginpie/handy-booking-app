import React from 'react';
import './navItem.scss';

const NavItem = ({icon, value, isActive, onPageChange}) => {
    return ( 
        <div className={isActive? "navitem navitem-actived" : "navitem"} onClick={()=>onPageChange(value)}>
            <div className="navitem__icon-wrapper">
                <img src={icon} className="navitem__icon-wrapper--icon" alt="nav-icon"/>
            </div>
            <div className="navitem__value">{value}</div>
        </div>
     );
}
 
export default NavItem;