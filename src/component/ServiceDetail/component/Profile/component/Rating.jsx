import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import style from '../Profile.module.scss';

class Rating extends React.Component {

    constructor(props) {
        super(props);

        this.getAvgRating = this.getAvgRating.bind(this);
    }

    getAvgRating() {
        let score = 0;
        let count = 0;
        this.props.ratings.map((item) => {
                score += item.rating;
                count++;
                return null;    
        });
        return (score / count).toFixed(1);
    }

    getStars() {
        const rating = this.getAvgRating();
        return Math.round(rating);
    }

    render() {
        const rating = this.getAvgRating();
        const stars = this.getStars();

        return (
            <div className={style.rating}>
                <div>
                    <p>{`Rating: ${rating}/5`}</p>
                </div>
                <FontAwesomeIcon icon={faStar} color={(stars > 0)?"Orange":"Black"} />
                <FontAwesomeIcon icon={faStar} color={(stars > 1)?"Orange":"Black"} />
                <FontAwesomeIcon icon={faStar} color={(stars > 2)?"Orange":"Black"} />
                <FontAwesomeIcon icon={faStar} color={(stars > 3)?"Orange":"Black"} />
                <FontAwesomeIcon icon={faStar} color={(stars > 4)?"Orange":"Black"} />
            </div>
        )
    }
}

export default Rating;