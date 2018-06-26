import React, { Component, Fragment } from 'react';
import { checkAuth } from './helpers';
import Login from './components/LoginComponent';
import Calendar from './components/CalendarComponent';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: checkAuth()
        };
    }

    render() {
        return <Fragment>{ !this.state.auth ? <Login /> : <Calendar /> }</Fragment>
    }
}

export default App;
