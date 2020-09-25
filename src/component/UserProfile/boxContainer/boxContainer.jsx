import React from 'react';
import NewButton from '../newButton/newButton';
import './boxContainer.scss';

const BoxContainer = ({title, needSearchBar, children, buttonName, ...rest}) => {
    return ( 
        <div className="boxContainer">
            <div className="boxContainer__top">
                <div className="boxContainer__top--title">
                    {title && title}
                </div>
                {needSearchBar &&
                    <div className="boxContainer__top--search">
                        <input type="text"/>
                    </div>
                }
                {buttonName &&
                    <div className="boxContainer__top--search">
                        <NewButton buttonName={buttonName}/>
                    </div>
                }
            </div>
            <div className="boxContainer__children">
                {children}
            </div>
        </div>
     );
}
 
export default BoxContainer;