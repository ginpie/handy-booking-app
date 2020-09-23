import React, { Component } from 'react';
// import NavBar from './navbar/components/navbar';
import SideBar from './sideBar/components/sidebar';
import MyOrders from './orders/components/orders';
import PromoCode from './promoCode/components/promoCode';
import Settings from './settings/components/settings';
import placeOrderIcon from './icons/placeOrder.png';
import myOrdersIcon from './icons/myOrders.png';
import myMessagesIcon from './icons/myMessages.png';
import myPromoCodesIcon from './icons/myPromoCodes.png';
import settingsIcon from './icons/settings.png';
import helpCentreIcon from './icons/helpCentre.png';
import './style/components/layout.scss';

class UserProfile extends Component {

    state = { 
        fakeUserData:{},
        currentPage:'',
     }

    componentDidMount() {
        this.setState(
            {fakeUserData:
                {
                    firstName: "Mingxin",
                    lastName: "DONG",
                    DOB: "DD-MM-YY",
                    email: {address: "xxxxx@gmail.com", status:"Verified"},
                    messages:[
                {
                    sender:"Sam Li", text:"Hi, We have a meeting today", senderAvatar:""
                },
            ]
        }, currentPage:'My orders'})
    }

    handleNavItemChange = (value) => {
        const currentPage = value
        this.setState({currentPage});
    }

    render() {
        const navItems = [
            {key: 'PLACEORDERS', value: 'Place orders', icon:placeOrderIcon, content:(<div />)},
            {key: 'MYORDERS', value: 'My orders', icon:myOrdersIcon, content:(<MyOrders/>)},
            {key: 'MYPROMOCODES', value: 'My promo codes', icon:myPromoCodesIcon, content:((<PromoCode/>))},
            {key: 'SETTING', value: 'Settings', icon:settingsIcon, content:(<Settings fakeUserData={this.state.fakeUserData}/>)},
            {key: 'HELPCENTRE', value: 'Help Centre', icon:helpCentreIcon, content:((<div/>))},
        ]

        const { fakeUserData, currentPage } = this.state

        return (
                <div className="outerContainer">
                    {/* <NavBar /> */}
                    <div className="contentContainer">
                        <SideBar 
                            fakeUserData={fakeUserData}
                            navItems={navItems}
                            currentPage={currentPage}
                            onPageChange={this.handleNavItemChange}
                        />
                        <div className="contentContainer__right">
                            {navItems.map((item)=>{
                                if(currentPage!==item.value) {
                                    return null
                                }
                                return (
                                <React.Fragment key={item.key}>
                                    {item.content}
                                </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
         );
    }
}
 
export default UserProfile;