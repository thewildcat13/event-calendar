import React, { Component, Fragment } from 'react';
import { Redirect, Link } from "react-router-dom";
import { checkAuth } from '../helpers';
import '../styles/styles.css';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validationEmail: ""
        };
    }

    handleLogin() {
        let email = document.getElementById("email");
        if(!email.checkValidity()) {
            this.setState({validationEmail: email.validationMessage});
            return false;
        }

        localStorage.setItem("email", this.refs.email.value);
        localStorage.setItem("pass", this.refs.pass.value);
        window.location.reload();
    }

    render() {
        if(checkAuth()) { return <Redirect to={'/calendar'} /> }

        return <Fragment>
            <nav class="navbar navbar-inverse bg-inverse">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <Link class="nav-link active" to="/login">Log In</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/calendar">Calendar</Link>
                    </li>
                </ul>
            </nav>

            <div class="container">
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <div class="form-group login-form">
                            <input className="form-control" id="email" type="email" placeholder="Email" ref="email" />
                            <div className="email">{this.state.validationEmail}</div>
                            <input className="form-control" type="password" placeholder="Password" ref="pass" />
                            <button className="btn btn-primary login-btn" onClick={this.handleLogin.bind(this)}>Log In</button>
                        </div>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>
        </Fragment>
    }
}

export default LoginComponent;
