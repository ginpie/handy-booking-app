import React from 'react';
import NewButton from '../newButton/newButton';
import './displayEmptyContent.scss';


const DisplayEmptyContent = ({icon, title, message, buttonName, size="normal"}) => {

    return ( 
        <div className="emptyContent">
            <div className={(size!=="small") ? "emptyContent__icon-wrapper" : "smallIconWrapper" }>
                <img className="emptyContent__icon-wrapper--item" src={icon} alt="box"/>
            </div>
            {title &&
            <div className="emptyContent__title">
                {title}
            </div>            
            }
            {message &&
            <div className="emptyContent__message">
                {message}
            </div>
            }
            {buttonName &&
            <div className="emptyContent__button">
                <NewButton buttonName={buttonName}/>
            </div>
            }
        </div>
     );
}
 
export default DisplayEmptyContent;