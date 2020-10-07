import React from 'react';
import BoxContainer from '../../../boxContainer/boxContainer';
import DisplayEmptyContent from '../../../dispalyEmptyContent/displayEmptyContent';
import PromoCodeInfoBar from '../promoCodeInfoBar/promoCodeInfoBar';
import emptyBoxIcon from '../../../icons/empty-box.png';

const Active = () => {
    const promoCodes = []
    return ( 
        <BoxContainer 
        title="ACTIVE PROMO CODES"
        needSearchBar
        >
            <PromoCodeInfoBar />
            {(promoCodes.length !== 0)? (
                <div>content</div>
            ):(
                <DisplayEmptyContent 
                icon={emptyBoxIcon}
                message="You don't have any usable promo codes"
                />
            )}
        </BoxContainer>
     );
}
 
export default Active;