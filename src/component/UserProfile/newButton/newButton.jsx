import React from 'react';
import addIcon from '../icons/placeOrder.png';
import './newButton.scss';

const NewButton = ({buttonName}) => {
    return ( 
        <div className="newButton">
            <div className="newButton__icon-wrapper">
                <img src={addIcon} className="newButton__icon-wrapper--icon" alt="icon"/>
            </div>
            <div className="newButton__text">{buttonName}</div>
        </div>
     );
}

export default NewButton;