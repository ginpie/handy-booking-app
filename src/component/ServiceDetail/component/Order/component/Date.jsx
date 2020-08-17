import React from 'react';

class Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            today: new Date(),
            timeSpan: 30
        }

        this.getDate = this.getDate.bind(this);
        this.getMaximumDate = this.getMaximumDate.bind(this);
        this.setTimeSpan = this.setTimeSpan.bind(this);
    }

    getDate(date) {
        const year = date.getFullYear().toString();
        const month = this.checkDate(date.getMonth() + 1);
        const daily = this.checkDate(date.getDate());        
        return year + '-' + month + '-' + daily;
    }

    checkDate(date) {
        return (date < 10)? "0" + date.toString():date.toString();
    }

    getMaximumDate() {
        let maximum = new Date();
        maximum.setDate(this.state.today.getDate() + this.state.timeSpan);
        return maximum;

    }
    
    setTimeSpan(dayNum) {
        this.setState({
            timeSpan: dayNum
        });
    } 

    render() {
        const today = this.getDate(this.state.today);
        const maximum = this.getDate(this.getMaximumDate());

        return (
            <form>
                <input type="date" min={today} max={maximum}/>
            </form>
        );
    };
};

export default Date;