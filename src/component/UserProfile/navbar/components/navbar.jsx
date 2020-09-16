import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import '../style/components/navbar.scss';

const NavBar = () => {
    const [isDropdwonListOpen, setIsDropdownListOpen] = useState(false);

    const handleDropDownList = () => {
        const newStatus = !isDropdwonListOpen
        setIsDropdownListOpen(newStatus)
    }
    return (
        <BrowserRouter> 
        <div className="navbarContainer">
            <div className="navbarLargeScreen">
                <div className="navbar">
                    <div className="navbar__top">
                        <div className="navbar__top--logo">
                            LOGO
                        </div>
                        <div className="navbar__top--search">
                            <input type="text"/>            
                        </div>
                    </div>
                    <div className="navbar__buttom">
                        <NavLink className="navbar__buttom--item" activeClassName="navbar__buttom--itemActive" to="/">Get Quotes</NavLink>
                        <NavLink className="navbar__buttom--item" activeClassName="navbar__buttom--itemActive" to="/">Electricians</NavLink>
                        <NavLink className="navbar__buttom--item" activeClassName="navbar__buttom--itemActive" to="/">Plumbers</NavLink>
                        <NavLink className="navbar__buttom--item" activeClassName="navbar__buttom--itemActive" to="/">Handyman</NavLink>
                        <NavLink className="navbar__buttom--item" activeClassName="navbar__buttom--itemActive" to="/">Builders</NavLink>
                        <NavLink className="navbar__buttom--item" activeClassName="navbar__buttom--itemActive" to="/">Painters</NavLink>
                    </div>
                </div>
            </div>
            <div className="navbarSmallScreen">
                <div className="navbar">
                    <div className="navbar__logo">
                        LOGO
                    </div>
                    <div onClick={handleDropDownList} className="navbar__menu">
                        <MenuIcon className="navbar__menu--item" />
                    </div>
                </div>
                {isDropdwonListOpen &&
                    <div className="navbar__dropdownList">
                        <NavLink className="navbar__dropdownList--item" activeClassName="navbar__dropdownList--itemActive" to="/">Get Quotes</NavLink>
                        <NavLink className="navbar__dropdownList--item" activeClassName="navbar__dropdownList--itemActive" to="/">Electricians</NavLink>
                        <NavLink className="navbar__dropdownList--item" activeClassName="navbar__dropdownList--itemActive" to="/">Plumbers</NavLink>
                        <NavLink className="navbar__dropdownList--item" activeClassName="navbar__dropdownList--itemActive" to="/">Handyman</NavLink>
                        <NavLink className="navbar__dropdownList--item" activeClassName="navbar__dropdownList--itemActive" to="/">Builders</NavLink>
                        <NavLink className="navbar__dropdownList--item" activeClassName="navbar__dropdownList--itemActive" to="/">Painters</NavLink>        
                    </div>                
                }
            </div>
        </div>
        </BrowserRouter> 
     );
}
 
export default NavBar;