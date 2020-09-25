import React, { Fragment } from 'react';
import InnerNavItem from './innerNavItem/innerNavItem';
import './innerNavbar.scss';

const InnerNavBar = ({navItems, currentInnerPage, setCurrentInnerPage}) => {
    return ( 
        <div className="innerNavbar">
            {navItems && navItems.map(item=>(
                <Fragment key={item.key}>
                    <InnerNavItem 
                    value={item.value}
                    isActive={currentInnerPage===item.value}
                    setCurrentInnerPage={setCurrentInnerPage}
                    />
                </Fragment>
            ))}
        </div>
     );
}
 
export default InnerNavBar;