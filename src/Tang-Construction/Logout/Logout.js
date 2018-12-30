
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import requester from "../Utils/requester";

export default class Logout extends Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {

        requester.post('user', '_logout', 'kinvey')
            .then(() => {
                sessionStorage.removeItem('authtoken');
            });
    };

    render() {
        this.logout();

        return(

            <Redirect to= '/' />
        )
    }
}