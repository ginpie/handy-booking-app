import React from 'react';

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            availableTime: ["9:00", "10:00", "11:00", "12:00", "13:00"]
        };

        this.handleClick = this.handleClick.bind(this);
    }

    getAvailableTime() {
        return this.state.availableTime;
    }

    handleClick(event) {
        event.preventDefault();
    }

    render() {
        const availableTime = this.getAvailableTime();

        return (
            <form>
                <select>
                    {availableTime.map(time => (
                        <option value={time}>{time}</option>
                    ))}
                </select>
                <input type="submit" value="Confirm" onClick={this.handleClick}/>
            
            </form>
        )
    }
};

export default Time;