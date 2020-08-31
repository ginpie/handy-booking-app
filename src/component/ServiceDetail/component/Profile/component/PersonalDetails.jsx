import React from 'react';
import InformationPair from './InformationPair';
import Introduction from './Introduction';
import Rating from './Rating';
import style from '../Profile.module.scss';

class PersonalDetails extends React.Component {
    constructor(props) {
        super(props);
        const details = [
            {key:"Name", value: "Ian Yin"},
            {key: "Title", value: "Mr"},
            {key: "Gender", value: "Male"},
            {key: "Language", value: "English, Mandarin"},
        ];
        const rating = [
            {orderId: 1, comment: "Great", rating: 5},
            {orderId: 2, comment: "Wonderful", rating: 5},
            {orderId: 3, comment: "Not Bad", rating: 4},
        ];
        this.state = {
            details,
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            rating,
        }
    }

    render() {
        const details = this.state.details;
        const intro = this.state.introduction;
        const ratings = this.state.rating;
        
        return (
            <div>
                <Rating ratings={ratings}/>
                <table className={style.table}>
                    {details.map((content) => {
                        return (
                            <InformationPair content={content.value}>{content.key}</InformationPair>
                        )
                    })}
                </table>
                <Introduction>{intro}</Introduction>
            </div>
        )
    } 
}

export default PersonalDetails;