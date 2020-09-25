import React from 'react';
import './innerNavItem.scss';

const InnerNavItem = ({value, setCurrentInnerPage, isActive}) => {
    return ( 
        <div className={isActive? "innerNavItem innerNavItemActived": "innerNavItem"} onClick={()=>setCurrentInnerPage(value)}>
            {value}
        </div>
     );
}
 
export default InnerNavItem;