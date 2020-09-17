import React, {useState, Fragment} from 'react';
import ContentHeader from '../../contentHeader/contentHeader';
import InnerNavBar from '../../innerNavbar/innerNavbar';
import General from './general/general';
import SignInAndSecuirty from './signInAndSecurity/signInAndSecurity';
import '../settings.scss';

const Settings = ({fakeUserData}) => {
    const [currentInnerPage, setCurrentInnerPage] = useState('GENERAL');

    const innerNavItems = [
        {key:"GENERAL", value:"GENERAL", content:(<General fakeUserData={fakeUserData}/>)},
        {key:"SINGINANDSECURITY", value:"SING IN AND SECURITY", content:(<SignInAndSecuirty fakeUserData={fakeUserData}/>)},
        {key:"NOTIFICATIONS", value:"NOTIFICATIONS", content:(<div />)}
    ]

    return ( 
        <div className="settings">
            <div className="settings__top">
                <ContentHeader buttonName="New order">Settings</ContentHeader>
            </div>
            <div className="settings__nav">
                <InnerNavBar 
                navItems={innerNavItems}
                currentInnerPage={currentInnerPage}
                setCurrentInnerPage={setCurrentInnerPage}
                />
            </div>
            <div className="settings__box">
                {innerNavItems.map(item=>{
                    if(currentInnerPage!==item.value){
                        return null
                    }
                    return (
                        <Fragment key={item.key}>
                            {item.content}
                        </Fragment>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Settings;