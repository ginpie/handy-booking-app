import React from 'react';
import './promoCodeInfoBar.scss';

const PromoCodeInfoBar = () => {
    return ( 
        <div className="promoCodeInfoBar">
            <div className="promoCodeInfoBar__innerContainer">
                <div className="promoCodeInfoBar__innerContainer--info">Promo code</div>
                <div className="promoCodeInfoBar__innerContainer--info">Discount</div>
                <div className="promoCodeInfoBar__innerContainer--info">Expiration date</div>
                <div className="promoCodeInfoBar__innerContainer--info">Available</div>
            </div>
        </div>
     );
}
 
export default PromoCodeInfoBar;