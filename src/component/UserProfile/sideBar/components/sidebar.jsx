import React from 'react';
import Logo from '../../logo/logo';
import Avatar from '../../avatar/avatar';
import NavItem from './navItem/navItem';
import '../style/components/sidebar.scss';

const SideBar = ({fakeUserData: { name }, navItems, currentPage, onPageChange}) => {
    return ( 
        <div className='sidebar'>
            <div className="sidebar__logo-wrapper">
                <Logo />
            </div>
            <div className="sidebar__avatar-wrapper">
                <Avatar />
            </div>
            <div className="sidebar__name">
                {name}
            </div>
            <div className="sidebar__navItems">
                {navItems && navItems.map(item => (
                    <div className="sidebar__navItems--item"  key={item.key}>
                        <NavItem 
                            value={item.value}
                            icon={item.icon}
                            isActive={currentPage === item.value}
                            onPageChange={onPageChange}
                        />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default SideBar;
