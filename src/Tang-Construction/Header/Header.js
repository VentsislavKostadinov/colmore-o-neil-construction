import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import './Header.css'
import Observer from "../Utils/Observer";



export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {username: null};

        this.userLoggedIn = this.userLoggedIn.bind(this);

        Observer.subscribe(Observer.events.loginUser, this.userLoggedIn)
    }

    userLoggedIn(username) {

        this.setState({username})
    }

    render() {

       const loggedInSection =  <ul className="navbar-nav pull-right">
            <li className="nav-item">
                <Link className="nav-link" to="#">Hello, {this.state.username}</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
            </li>
        </ul>;


        return(

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

            <Link className="navbar-brand" to="/"><h2>Colmore O'Neil</h2><p>Construction</p></Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="basicExampleNav">
                <ul className="navbar-nav mx-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>

                </ul>
                {this.state.username ? loggedInSection : null}
            </div>
        </nav>

        )
    }
}
