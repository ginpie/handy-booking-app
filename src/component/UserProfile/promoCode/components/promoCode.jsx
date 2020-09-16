import React, {useState, Fragment} from 'react';
import ContentHeader from '../../contentHeader/contentHeader';
import InnerNavBar from '../../innerNavbar/innerNavbar';
import Active from './active/active';
import InActive from './inactive/inactive';
import '../promoCode.scss';

const PromoCode = () => {
    const [currentInnerPage, setCurrentInnerPage] = useState('ACTIVE')

    const innerNavItems = [
        {key:"ACTIVE", value:"ACTIVE", content:(<Active/>)},
        {key:"INACTIVE", value:"INACTIVE", content:(<InActive />)},
    ]

    return ( 
        <div className="promoCode">
            <div className="promoCode__top">
                <ContentHeader buttonName="New order">My promo codes</ContentHeader>
            </div>
            <div className="promoCode__nav">
                <InnerNavBar 
                navItems={innerNavItems}
                currentInnerPage={currentInnerPage}
                setCurrentInnerPage={setCurrentInnerPage}
                />
            </div>
            <div className="promoCode__box">
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
 
export default PromoCode;