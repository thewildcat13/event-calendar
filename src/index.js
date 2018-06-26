import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Login from './components/LoginComponent';
import Calendar from './components/CalendarComponent';

ReactDOM.render(<Router>
		<div>
			<Route exact path="/" component={App} />
	        <Route path="/login" component={Login} />
	        <Route path="/calendar" component={Calendar} />
		</div>
    </Router>, document.getElementById('root'));
    