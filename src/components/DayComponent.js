import React, { Component, Fragment } from 'react';
import Event from './EventComponent';
import '../styles/styles.css';

class DayComponent extends Component {

	constructor(props) {
        super(props);
        this.state = {
        	show: false
        };
    }

	handleOpenEvent() {
		this.setState({
            show: true
        })
	}

	handleCloseEvent() {
		this.setState({
            show: false
        })
	}

    saveEvent(value) {
        this.setState({
            event: value
        })
    }

    removeEvent() {
        this.setState({
            event: ''
        })
    }

    render() {
    	let display = this.state.show ? 'block' : 'none';
        return <Fragment>
            <div className="day" style={this.state.event? {backgroundColor: '#b9f6ca'} : null}
                 onClick={this.handleOpenEvent.bind(this)}>{this.props.day}</div>

            {this.state.show ?
                <Event show={this.state.show ? ' show' : null}
                       hidden={this.state.show ? null : 'true'}
                       display={{display: display }}
                       close={this.handleCloseEvent.bind(this)}
                       day={this.props.day}
                       event={this.state.event}
                       save={this.saveEvent.bind(this)}
                       remove={this.removeEvent.bind(this)}
                />
            : null}


				
        </Fragment>
    }
}

export default DayComponent;
