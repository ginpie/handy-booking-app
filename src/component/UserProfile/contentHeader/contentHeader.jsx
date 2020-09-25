import React from 'react';
import NewButton from '../newButton/newButton';
import './contentHeader.scss';

const ContentHeader = ({children, buttonName}) => {
    return ( 
        <div className="contentHeader">
            <div className="contentHeader__title">
                {children}
            </div>
            <NewButton buttonName={buttonName}/>
        </div>
     );
}
 
export default ContentHeader;