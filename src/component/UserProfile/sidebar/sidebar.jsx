import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/components/sidebar.scss';
import Avatar from '../icons/users.png';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const SideBar = () => {
    return ( 
        <div className="sidebarContainer">
            <div className="sidebarNav">
                <div className="sidebarNav__user">
                    <div className="sidebarNav__user--avatar">
                        <img src={Avatar} alt="Avatar"/>
                    </div>
                    <div className="sidebarNav__user--name">
                        Mingxin Dong
                    </div>
                </div>
                <div className="sidebarNav__getQuotes">
                    <button>
                        Get Quotes Now
                    </button>
                </div>
                <div className="sidebarNav__navLinks">
                    <NavLink className="sidebarNav__navLinks--item" activeClassName="sidebarNav__navLinks--itemActive" to="/">My Jobs</NavLink>
                    <NavLink className="sidebarNav__navLinks--item" activeClassName="sidebarNav__navLinks--itemActive" to="/">My Messages</NavLink>
                    <NavLink className="sidebarNav__navLinks--item" activeClassName="sidebarNav__navLinks--itemActive" to="/">My Vouchers</NavLink>
                    <NavLink className="sidebarNav__navLinks--item" activeClassName="sidebarNav__navLinks--itemActive" to="/">My Conmmunity</NavLink>
                    <NavLink className="sidebarNav__navLinks--item" activeClassName="sidebarNav__navLinks--itemActive" to="/">Edit Profile</NavLink>
                    <NavLink className="sidebarNav__navLinks--item" activeClassName="sidebarNav__navLinks--itemActive" to="/">Change Password</NavLink>  
                </div>  
            </div>
            <div className="sidebarSupport">
                <div className="sidebarSupport__title">Need Support?</div>
                <div className="sidebarSupport__message">We're here to assist you!</div>
                <div className="sidebarSupport__phone">
                    <div className="sidebarSupport__phone--icon"><PhoneIcon /></div>
                    <div className="sidebarSupport__phone--number">1300 762 994</div>
                </div>
                <div className="sidebarSupport__email">
                    <div className="sidebarSupport__email--icon"><MailOutlineIcon/></div>
                    <div className="sidebarSupport__email--address">support@JRacdamy.com.au</div>
                </div>
            </div>
            <div className="sidebarFeedback">
                <div className="sidebarFeedback__topline"></div>
                <div className="sidebarFeedback__message">
                    How likely are you to recommend hipages to a friend?
                </div>
                <div className="sidebarFeedback__button">
                    <button>Let us know</button>
                </div>
            </div>
        </div>
     );
}
 
export default SideBar;