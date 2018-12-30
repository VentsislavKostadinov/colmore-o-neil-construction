import React, {Component} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import Home from '../Tang-Construction/Home/Home';
import Services from './Services/Services';

import Login from '../Tang-Construction/Login/Login';
import Logout from '../Tang-Construction/Logout/Logout';
import Register from '../Tang-Construction/Register/Register';
import NotFoundPage from '../Tang-Construction/NotFoundPage/NotFoundPage';


export default class Routes extends Component {



    render() {

        return (

            <div>


                <Switch>
                <Route exact path = '/' component={Home}/>
                <Route path = '/services' component = {Services} />
                    <Route path = '/login' component = {Login} />
                    <Route path = '/logout' component = {Logout} />
                <Route path = '/register' component = {Register} />
                    <Route path = '/logout' component = {Logout} />
                <Redirect from= "/about-us" to= "about"/>
                <Route component = {NotFoundPage} />
            </Switch>


            </div>
        )
    }




}

