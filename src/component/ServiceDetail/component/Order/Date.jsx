import React from 'react';

class Date extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date.now(),
            timeSpan: 30,
            maxDate: this.today + this.timeSpan
        }
    }
};

export default Date;