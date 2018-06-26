import React, { Component, Fragment } from 'react';
import { Redirect } from "react-router-dom";
import { checkAuth } from '../helpers';
import Day from './DayComponent';

class CalendarComponent extends Component {

	daysInMonth() {
		let number = 33 - new Date(new Date().getFullYear(), new Date().getMonth(), 33).getDate();
		var days = [];
    	var index = 1;
		while(index <= number){
		    days[index] = index;
		    index++;
		}
		return days;
	}

    render() {
    	if(!checkAuth()) { return <Redirect to={'/login'} /> }

        return <Fragment>
                { this.daysInMonth().map(day => {return <Day key={day} day={day} />}) }
            </Fragment>
    }
}

export default CalendarComponent;
